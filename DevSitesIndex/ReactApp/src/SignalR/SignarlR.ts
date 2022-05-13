
// 05/06/2022 03:46 am - SSN - [20220506-0327] - [005] - SignalR Hub

// https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-6.0&tabs=visual-studio

"use strict";
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR
// Leave until we are done testing SignalR



var connection = new signalR.HubConnectionBuilder().withUrl("/SignalRhub").build();





connection.on("ReceiveMessage", function (user, message) {

    console.log('%c ' + 'wwwroot - SignalR - 20220506-0347-ReceivedMessage', 'color:yellow;font-size:12pt;');
    console.log(user);
    console.log(message);


});


connection.start().then(function () {

    console.log('%c ' + 'wwwroot - SignalR - 20220506-0347-Start', 'color:yellow;font-size:12pt;');


}).catch(function (err) {

    console.log('%c ' + 'wwwroot - SignalR - 20220506-0347-Error', 'color:red;font-size:12pt;');
    console.dir(err);

    return console.error(err.toString());
});


function signalR_sendMessage(user, message, dateTime) {

    console.log('%c ' + 'wwwroot - SignalR - 20220506-0347-B-SendMessage', 'color:yellow;font-size:12pt;');


    connection.invoke("SendMessage", user, message, dateTime)


        .catch(function (err) {


            console.log('%c ' + 'wwwroot - SignalR - 20220506-0349', 'color:red;font-size:12pt;');
            console.dir(err);

            return console.error(err.toString());
        });


}
