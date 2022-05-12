using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 05/06/2022 03:27 am - SSN - [20220506-0327] - [001] - SignalR Hub
// https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-6.0&tabs=visual-studio
// Added client-side library @microsoft/signalr (Right-click on wwwwroot)
using Microsoft.AspNetCore.SignalR;

namespace DevSitesIndex.Hubs
{
    public class MessageRecord
    {
        public string user { get; set; }
        public string message { get; set; }
        public string dateTime { get; set; }
    }
    public class SignalRHub:Hub
    {
        public async Task SendMessage(string user, string message, string dateTime )
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, dateTime);
        }

        public async Task SendMessage_WithObj(MessageRecord messageRecord)
        {
            await Clients.All.SendAsync("ReceiveMessage", messageRecord.user, messageRecord.message, messageRecord.dateTime);
        }
    }

}
