using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 05/06/2022 03:27 am - SSN - [20220506-0327] - [001] - SignalR Hub
// https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-6.0&tabs=visual-studio
// Added client-side library @microsoft/signalr (Right-click on wwwwroot)
using Microsoft.AspNetCore.SignalR;

namespace DevSitesIndex.Hubs
{

    public class SignalR_MessageRecord
    {
        public string callSource { get; set; }
        public string processorName { get; set; } // AngularJS, Angular, ReactJS

        public string user { get; set; }
        public string message { get; set; }
        public string dateTime { get; set; }

        public string JobStatus { get; set; }
        public string StatusDate { get; set; }


        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }

        public string GroupName { get; set; }
        public string ConnectionId { get; set; }
        public bool ForCurrentConnetionOnly { get; set; }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendLine($"callSource: {callSource}");
            sb.AppendLine($"processorName: {processorName}");
            sb.AppendLine($"user: {user }");
            sb.AppendLine($"message: {message}");
            sb.AppendLine($"dateTime: {dateTime}");
            sb.AppendLine($"JobStatus: {JobStatus}");
            sb.AppendLine($"JobStatus: {StatusDate}");

            return sb.ToString();
        }
    }

    public struct JOB_STATUS
    {
        public const string STARTING = "Starting";
        public const string ALREADY_STARTED = "Already started";
        public const string NOT_FOUND = "Job not found";

    }



    public class SignalRHub : Hub
    {

        // 05/17/2022 03L37 pm - SSN - Add ProcessorName


        static ConcurrentDictionary<string, SignalR_MessageRecord> messageList = new ConcurrentDictionary<string, SignalR_MessageRecord>();
        static ConcurrentDictionary<string, SignalR_MessageRecord> ProcessorUsers = new ConcurrentDictionary<string, SignalR_MessageRecord>();

        static List<string> ValidProcessorNames = new List<string>
            {
                "AngularJS",
                "ReactJS"
            };


        // 05/19/2022 02:09 pm - SSN - Adding groups
        public Task JoinRoom(string roomName)
        {
            ProcessorUsers.TryAdd(roomName + Context.ConnectionId, new SignalR_MessageRecord { GroupName = roomName, ConnectionId = Context.ConnectionId });
            return Groups.AddToGroupAsync(Context.ConnectionId, roomName);
        }



        //public async Task SendMessage(string callSource, string user, string message, string dateTime)
        //{
        //    await Clients.All.SendAsync("ReceiveMessage", callSource, user, message, dateTime);
        //}

        public async Task<SignalR_MessageRecord> SendMessage_v2(SignalR_MessageRecord messageRecord)
        {
            HubCallerContext context = this.Context;


            if (messageRecord == null) messageRecord = new SignalR_MessageRecord();

            if (!ValidProcessorNames.Any(s => s == messageRecord.processorName))
            {
                messageRecord.ErrorCode = "DemoSite-20220517-1538";
                messageRecord.ErrorMessage = $"Calling SignalRHib SendMessage_v2 with an invalid ProcessorName [{messageRecord.processorName}]";

                return messageRecord;

            }


            // Can call either one.  The check above prevents reaching this code if processorName is invalid.
            // SignalRReceiveMessage_React
            // SignalRReceiveMessage_AngularJS

            string methodName = $"SignalRReceiveMessage_{messageRecord.processorName}";

            int recordsProcessed = 0;

            if (messageRecord.ForCurrentConnetionOnly)
            {

                foreach (KeyValuePair<string, SignalR_MessageRecord> rec in ProcessorUsers.Where(r => r.Key == $"{messageRecord.processorName}{context.ConnectionId}"))
                {
                    recordsProcessed++;
                    await Clients.Client(context.ConnectionId).SendAsync(methodName, messageRecord);

                }
            }

            //if (!string.IsNullOrWhiteSpace(messageRecord.ConnectionId))
            //{
            //    await Clients.User(messageRecord.ConnectionId).SendAsync(methodName, messageRecord);
            //}
            //else
            if (recordsProcessed == 0)
            {

                if (!string.IsNullOrWhiteSpace(messageRecord.processorName))
                {
                    await Clients.Group(messageRecord.processorName).SendAsync(methodName, messageRecord);
                }
                else
                {
                    await Clients.All.SendAsync(methodName, messageRecord);
                }

            }

            KeyValuePair<string, SignalR_MessageRecord> foundRecord = messageList.FirstOrDefault(r => r.Key == messageRecord.dateTime);

            if (foundRecord.Value != null)
            {
                messageRecord.ErrorCode = "DemoSite-20220517-1721";
                messageRecord.ErrorMessage = $"Calling SignalRHib SendMessage_v2 Record not found.";
                return messageRecord;
            }
            else
            {
                if (!messageList.TryAdd(messageRecord.dateTime, messageRecord))
                {
                    messageRecord.ErrorCode = "DemoSite-20220517-1619";
                    messageRecord.ErrorMessage = $"Calling SignalRHib SendMessage_v2.  Failed to add record to dictionary.";
                    return messageRecord;
                }
            }

            return messageRecord;
        }

        public Task<object> Test_101(string callSource)
        {
            return Task.FromResult<object>(new { Test = "Test-message-20220519-0252" });

        }


        public SignalR_MessageRecord CheckJobStatus(string callSource, SignalR_MessageRecord messageRecord)
        {

            lock (messageList)
            {

                SignalR_MessageRecord returnMessage = messageRecord;

                try
                {
                    KeyValuePair<string, SignalR_MessageRecord> foundRecord = messageList.FirstOrDefault(r => r.Key == messageRecord.dateTime);

                    if (foundRecord.Value == null)
                    {
                        messageRecord.JobStatus = JOB_STATUS.NOT_FOUND;
                        messageRecord.StatusDate = DateTime.Now.ToLongTimeString();
                    }
                    else
                    {
                        if (foundRecord.Value.JobStatus == null)
                        {
                            foundRecord.Value.JobStatus = JOB_STATUS.STARTING;
                            foundRecord.Value.StatusDate = DateTime.Now.ToLongTimeString();

                        }
                        else
                        {
                            if (foundRecord.Value.JobStatus == JOB_STATUS.STARTING)
                            {
                                foundRecord.Value.JobStatus = JOB_STATUS.ALREADY_STARTED;
                                foundRecord.Value.StatusDate = DateTime.Now.ToLongTimeString();
                            }

                        }

                        returnMessage = foundRecord.Value;
                    }


                }
                catch (Exception ex)
                {

                    returnMessage.ErrorCode = "DemoSite-20220518-1047";
                    returnMessage.ErrorMessage = $"Calling SignalRHib CheckJobStatus [{callSource}].  EXCEPTION: [{ex.Message}]";

                }

                return returnMessage;
            }

        }


        // 05/18/2022 12:41 pm - SSN - Monitor connections
        public override Task OnConnectedAsync()
        {
            string message = "Connected";
            IHubCallerClients clients = Clients;
            IGroupManager groups = this.Groups;


            return base.OnConnectedAsync();
        }

        // 05/18/2022 12:41 pm - SSN - Monitor connections
        public override Task OnDisconnectedAsync(Exception exception)
        {
            string message = "Disconnected";
            IHubCallerClients clients = Clients;
            IGroupManager groups = this.Groups;

            return base.OnDisconnectedAsync(exception);
        }
    }

}
