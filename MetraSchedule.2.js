
var myObj = new Object();
myObj.stop = ["Wilmette","Central/Green Bay", "Davis", "Main", "Rogers Park", "Ravenswood","Clybourn", "Ogilvie"];
myObj["Wilmette"] = {"times_north": ["6:13","6:51","7:03","7:27","7:57","8:21","9:04","11:04","12:04","13:04","14:04","15:05","15:50","16:02","17:03","17:44","18:31","19:13","20:04","21:04","22:04","23:04"], "times_south": ["4:50","5:42","6:10","6:42","7:11","7:19","7:31","7:37","8:03","8:14","8:33","9:23","9:55","10:54","12:54","13:54","14:54","15:55","16:22","16:56","17:37","17:55","18:13","18:56","19:54","20:54","21:59","22:49"]};
myObj["Central/Green Bay"] = {"times_north": ["6:10","6:49","7:00","7:25","7:54","8:19","9:01","11:01","12:01","13:01","14:01","15:02","15:47","15:59","17:01","17:41","18:28","19:10","20:01","21:01","22:01","23:01"], "times_south": ["4:53","5:45","6:13","6:45","7:14","7:22","7:34","7:40","8:07","8:18","8:35","9:26","9:58","10:57","12:57","13:57","14:57","15:58","16:24","16:59","17:40","17:58","18:16","18:59","19:57","20:57","22:02","22:52"]};
myObj["Davis"] = {"times_north": ["6:07","6:47","6:57","7:23","7:50","8:16","8:58","10:58","11:58","12:58","13:58","14:59","15:44","15:56","16:59","17:38","18:25","19:07","19:58","20:58","21:58","22:58"], "times_south": ["4:56","5:49","6:17","6:48","7:17","7:25","7:38","7:43","8:11","8:22","8:38","9:29","10:01","11:00","13:00","14:00","15:00","16:01","16:27","17:02","17:43","18:01","18:19","19:02","20:00","21:00","22:05","22:55"]};
myObj["Main"] = {"times_north": ["6:04","6:45","6:54","7:21","7:47","8:14","8:55","10:55","11:55","12:55","13:55","14:56","15:41","15:53","16:57","17:35","18:22","19:04","19:55","20:55","21:55","22:55"], "times_south": ["4:58","5:51","6:19","6:51","7:19","7:28","7:42","7:46","8:13","8:24","8:40","9:31","10:03","11:02","13:02","14:02","15:02","16:03","16:29","17:05","17:45","18:03","18:21","19:04","20:02","21:02","22:07","22:57"]};
myObj["Rogers Park"] = {"times_north": ["6:01","6:43","6:51","7:19","7:43","8:11","8:52","10:52","11:52","12:52","13:52","14:53","15:38","15:50","16:53","17:32","18:18","19:01","19:52","20:52","21:52","22:52"], "times_south": ["5:02","5:54","6:23","6:55","7:22","7:31","7:45","7:49","8:15","8:28","8:44","9:34","10:07","11:05","13:05","14:05","15:05","16:07","16:32","17:10","17:48","18:07","18:24","19:07","20:05","21:05","22:10","23:00"]};
myObj["Ravenswood"] = {"times_north": ["5:56","6:40","6:46","7:17","7:38","8:06","8:48","10:48","11:48","12:48","13:48","14:48","15:33","15:45","16:48","17:27","18:13","18:57","19:48","20:48","21:48","22:48"], "times_south": ["5:07","5:59","6:29","7:01","7:27","7:36","7:49","7:54","8:19","8:31","8:50","9:39","10:13","11:10","13:10","14:10","15:10","16:13","16:37","17:15","17:53","18:12","18:29","19:12","20:10","21:10","22:15","23:05"]};
myObj["Clybourn"] = {"times_north": ["5:50","6:36","6:41","7:12","7:33","8:00","8:43","10:43","11:43","12:43","13:43","14:43","15:28","15:40","16:43","17:21","18:08","18:52","19:43","20:43","21:43","22:43"], "times_south": ["5:13","6:06","6:36","7:07","7:34","7:43","7:51","8:02","8:25","8:38","8:57","9:46","10:20","11:17","13:17","14:17","15:17","16:20","16:44","17:22","18:00","18:19","18:36","19:19","20:16","21:16","22:21","23:11"]};
myObj["Ogilvie"] = {"times_north": ["5:42","6:28","6:33","7:04","7:25","7:52","8:35","10:35","11:35","12:35","13:35","14:35","15:20","15:32","16:35","17:13","18:00","18:44","19:35","20:35","21:35","22:35"], "times_south": ["5:23","6:15","6:45","7:17","7:44","7:53","8:02","8:13","8:35","8:49","9:08","10:06","10:41","11:38","13:38","14:38","15:38","16:31","16:55","17:33","18:09","18:31","18:45","19:30","20:30","21:30","22:35"]};
myObj.numTimes = 6;
var NUMSTOPS = 6;

var x = 0;
var y = 0;
function generate_table() {
    console.log(myObj["Wilmette"]['times_south'].length);
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
            times = "times_north";
            myObj.numTimes = 24; //Number of north times
        }
        else
        {
            times = "times_south";
            myObj.numTimes = 30; //Number of south times
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
            currTime = currTime.split(":");
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
        console.log(numColumns);
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