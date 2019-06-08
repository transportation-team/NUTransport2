
var myObj = new Object();
myObj.stop = ["Lincoln","Noyes","Foster","Arch","Chicago/Davis","Sheridan/Loyola","Downtown"];
myObj["Lincoln"] = {"times_north": ["7:26","8:09","8:47","9:02","9:17","9:47","10:17","10:53","11:44","12:19","12:46","13:16","13:43","14:23","15:06","15:26","16:17","16:53","17:13","17:28","17:38","17:53","18:08","18:38","18:53","19:03","19:13","20:13","20:58","22:16","23:04"], "times_south": ["6:48","7:03","7:18","7:48","8:33","9:13","9:33","10:13","10:43","11:18","12:03","12:43","13:03","13:38","14:08","14:48","15:08","15:33","15:58","16:13","16:43","17:03","17:13","17:23","17:38","17:53","18:03","18:18","18:33","19:28","20:38","21:43"] };
myObj["Noyes"] = {"times_north": ["7:25","8:08","8:46","9:01","9:16","9:46","10:16","10:52","11:43","12:18","12:45","13:15","13:42","14:22","15:05","15:25","16:16","16:52","17:12","17:27","17:37","17:52","18:07","18:37","18:52","19:02","19:12","20:12","20:57","22:15","23:03"], "times_south": ["6:50","7:05","7:20","7:50","8:35","9:15","9:35","10:15","10:45","11:20","12:05","12:45","13:05","13:40","14:10","14:50","15:10","15:35","16:00","16:15","16:45","17:05","17:15","17:25","17:40","17:55","18:05","18:20","18:35","19:30","20:40","21:45"] };
myObj["Foster"] = {"times_north": ["7:24","8:07","8:45","9:00","9:15","9:45","10:15","10:51","11:42","12:17","12:44","13:14","13:41","14:21","15:04","15:24","16:15","16:51","17:11","17:26","17:36","17:51","18:06","18:36","18:51","19:01","19:11","20:11","20:56","22:14","23:02"], "times_south": ["6:52","7:07","7:22","7:52","8:37","9:17","9:37","10:17","10:47","11:22","12:07","12:47","13:07","13:42","14:12","14:52","15:12","15:37","16:02","16:17","16:47","17:07","17:17","17:27","17:42","17:57","18:07","18:22","18:37","19:32","20:42","21:47"] };
myObj["Arch"] = {"times_north": ["7:23","8:06","8:44","8:59","9:14","9:44","10:14","10:50","11:41","12:16","12:43","13:13","13:40","14:20","15:03","15:23","16:14","16:50","17:10","17:25","17:35","17:50","18:05","18:35","18:50","19:00","19:10","20:10","20:55","22:13","23:01"], "times_south": ["6:54","7:09","7:24","7:54","8:39","9:19","9:39","10:19","10:49","11:24","12:09","12:49","13:09","13:44","14:14","14:54","15:14","15:39","16:04","16:19","16:49","17:09","17:19","17:29","17:44","17:59","18:09","18:24","18:39","19:34","20:44","21:49"] };
myObj["Chicago/Davis"] = {"times_north": ["7:20","8:03","8:41","8:56","9:11","9:41","10:11","10:47","11:38","12:13","12:40","13:10","13:37","14:17","15:00","15:20","16:11","16:47","17:07","17:22","17:32","17:47","18:02","18:32","18:47","18:57","19:07","20:07","20:52","22:10","22:58"], "times_south": ["6:57","7:12","7:27","7:57","8:42","9:22","9:42","10:22","10:52","11:27","12:12","12:52","13:12","13:47","14:17","14:57","15:17","15:42","16:07","16:22","16:52","17:12","17:22","17:32","17:47","18:02","18:12","18:27","18:42","19:37","20:47","21:52"] };
myObj["Sheridan/Loyola"] = {"times_north": ["7:05","7:48","8:26","8:41","8:56","9:26","9:56","10:32","11:23","11:58","12:25","12:55","13:22","14:02","14:45","15:05","15:56","16:32","16:52","17:07","17:17","17:32","17:47","18:17","18:32","18:42","18:52","19:52","20:37","21:55","22:43"], "times_south": ["7:11","7:26","7:41","8:11","8:56","9:36","9:56","10:36","11:06","11:41","12:26","13:06","13:26","14:01","14:31","15:11","15:31","15:56","16:21","16:36","17:06","17:26","17:36","17:46","18:01","18:16","18:26","18:41","18:56","19:51","21:01","22:06"] };
myObj["Downtown"] = {"times_north": ["6:40","7:20","8:00","8:15","8:30","9:00","9:30","10:10","11:00","11:35","12:00","12:30","13:00","13:40","14:25","14:45","15:35","16:05","16:25","16:40","16:50","17:05","17:20","17:50","18:05","18:20","18:30","19:30","20:15","21:35","22:25"], "times_south": ["7:51","8:06","8:21","8:51","9:26","10:06","10:21","10:53","11:23","11:58","12:43","13:23","13:43","14:18","14:48","15:28","15:56","16:21","16:46","17:11","17:36","18:01","18:11","18:21","18:41","18:51","18:56","19:11","19:26","20:11","21:18","22:23"] };
myObj.numTimes = 6;
var NUMSTOPS = 15;

var x = 0;
var y = 0;
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByClassName("table-box")[0];
    //time input, so can make red if wrong
    var timeform = document.getElementsByClassName("time")[0];
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //Suppose we wanted to arrive at Central by 3:00 pm, from Linden
    var start = document.getElementById("start").value;
    var destination = document.getElementById("destination").value;
    var time = document.getElementById("time12").value;
    if (time.toString()=="")
    {
        y = 1;
        timeform.style.border = "2px solid red";
        var errorMessage = document.createElement("p");
        errorMessage.id = "error-text"
        errorMessage.innerHTML = "Invalid Time Input";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = ".7em";
        errorMessage.style.marginBottom = "-10px";
        var diverr = document.getElementById("error-message");
        diverr.appendChild(errorMessage);
    }
    else
    {
        timeform.style.border = null;
        if (y==1)
        {
            var errorMessage = document.getElementById("error-text");
            errorMessage.parentNode.removeChild(errorMessage);
            y = 0;
        }
        var times;
        startIndex = myObj.stop.indexOf(start);
        endIndex = myObj.stop.indexOf(destination);
        if (startIndex > endIndex)
        {
            times = "times_north"
            myObj.numTimes = 31; //Number of north times
        }
        else
        {
            times = "times_south"
            myObj.numTimes = 32; //Number of south times
        }

        time = time.split(":");
        var timeConverted = parseInt(time[0]) * 60 + parseInt(time[1]);

        var i = 0;
        var continueLoop = true;
        var today = new Date();
        var currTime = today.getHours() + ":" + today.getMinutes();

        //finds first time after when input time is
        while (continueLoop == true) {
            currTime = myObj[start][times][i];
            currTime = currTime.split(":")
            var currTimeConverted = parseInt(currTime[0]) * 60 + parseInt(currTime[1]);
            if (currTimeConverted < timeConverted) {
                i = i + 1;
            }
            else {
                continueLoop = false;
            }
            if (i == myObj.numTimes) {
                continueLoop = false;
            }
        }


        //Now i-1 is the correct entry
        var lastTrip = i;
        var numColumns = 5;
        if (numColumns + lastTrip > myObj.numTimes) 
        {
            numColumns = myObj.numTimes - lastTrip;
        }
        //    var firstTrip = max(0, lastTrip-5);
        if (numColumns == 0)
        {
            y = 1;
            var errorMessage = document.createElement("p");
            errorMessage.id = "error-text"
            errorMessage.innerHTML = "No Trips After This Time";
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = ".7em";
            errorMessage.style.marginBottom = "-10px";
            var diverr = document.getElementById("error-message");
            diverr.appendChild(errorMessage);
        }
        else
        {
            if (y==1)
            {
                var errorMessage = document.getElementById("error-text");
                errorMessage.parentNode.removeChild(errorMessage);
                y = 0;
            }
            var currStop;
            // creating all cells
            var row = document.createElement("tr");
            var cell = document.createElement("th");
            var cellText = document.createTextNode("Upcoming Trips");
            cell.appendChild(cellText);
            row.appendChild(cell);

            if (startIndex <= endIndex) {
                for (var k = lastTrip; k < lastTrip + numColumns; k++) {
                    var cell = document.createElement("th");
                    var text = k + 1 - lastTrip;
                    var cellText = document.createTextNode("Departure " + text);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                tblBody.appendChild(row);
                for (var j = startIndex; j <= endIndex; j++){
                    // creates a table row
                    var row = document.createElement("tr");
                    
                    var cell = document.createElement("th");
                    currStop = myObj.stop[j];
                    var cellText = document.createTextNode(currStop);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                
                    for (var i = lastTrip; i < lastTrip + numColumns; i++)  {
                        // Create a <td> element and a text node, make the text
                        // node the contents of the <td>, and put the <td> at
                        // the end of the table row
                        var cell = document.createElement("td");
                        currStop = myObj.stop[j];
                        var cellTime = new Date("August 19, 1975 " + myObj[currStop][times][i]);
                        cellTime = cellTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                        var cellText = document.createTextNode(cellTime);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    }
                
                    // add the row to the end of the table body
                    tblBody.appendChild(row);
                }
            }
            else {
                for (var k = lastTrip; k < lastTrip + numColumns; k++) {
                    var cell = document.createElement("th");
                    var text = k + 1 - lastTrip;
                    var cellText = document.createTextNode("Departure " + text);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                tblBody.appendChild(row);
                for (var j = startIndex; j >= endIndex; j--){
                    // creates a table row
                    var row = document.createElement("tr");
                    
                    var cell = document.createElement("th");
                    currStop = myObj.stop[j];
                    var cellText = document.createTextNode(currStop);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                
                    for (var i = lastTrip; i < lastTrip + numColumns; i++)  {
                        // Create a <td> element and a text node, make the text
                        // node the contents of the <td>, and put the <td> at
                        // the end of the table row
                        var cell = document.createElement("td");
                        currStop = myObj.stop[j];
                        var cellTime = new Date("August 19, 1975 " + myObj[currStop][times][i]);
                        cellTime = cellTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                        var cellText = document.createTextNode(cellTime);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    }
                
                    // add the row to the end of the table body
                    tblBody.appendChild(row);
                }
            }

            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);
            tblBody.classList.add("table");
            tblBody.classList.add("table-box");
            tbl.setAttribute("id", "remove");
            tbl.setAttribute("border", "2");
            // appends <table> into <body>
            if(x==0)
            {
                body.appendChild(tbl);
                x = x +1;
            }
            else
            {
                var tblRemove = document.getElementById("remove");
                tblRemove.parentNode.removeChild(tblRemove);
                body.appendChild(tbl);
            }
            // sets the border attribute of tbl to 2;
        }
    } 
}

function init() {

}