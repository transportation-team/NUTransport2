
var myObj = new Object();
//since had to change names to one word things, could have something that every 
//capital letter encountered, we add a space 
myObj.stop = ["Old Orchard Mall", "Central/Crawford", "Central/Greenbay", "Davis-Church/Benson", "Howard Station"];
myObj["Old Orchard Mall"] = {"times_north": ["5:29", "6:05", "6:35", "6:57", "7:19", "7:38", "7:58", "8:19", "8:38", "8:53", "9:09", "9:24", "9:44", "10:04", "10:22", "10:43", "11:05", "11:35", "12:05", "12:38", "13:09", "13:40", "14:11", "14:42", "15:14", "15:45", "16:05", "16:24", "16:44", "17:04", "17:24", "17:44", "18:02", "18:29", "18:58", "19:25", "19:51", "20:16", "20:36"], "times_south": ["5:54", "6:19", "6:43", "7:07", "7:27", "7:44", "8:05", "8:26", "8:48", "9:11", "9:41", "10:11", "10:41", "11:11", "11:41", "12:12", "12:44", "13:15", "13:46", "14:17", "14:48", "15:12", "15:31", "15:51", "16:11", "16:30", "16:50", "17:10", "17:31", "17:51", "18:11", "18:35", "19:04", "19:31", "20:01"] };
myObj["Central/Crawford"] = {"times_north": ["5:28", "5:58", "6:28", "6:50", "7:11", "7:30", "7:51", "8:12", "8:31", "8:46", "9:02", "9:17", "9:37", "9:57", "10:15", "10:36", "10:58", "11:28", "11:58", "12:30", "13:01", "13:32", "14:03", "14:34", "15:06", "15:37", "15:57", "16:16", "16:36", "16:56", "17:16", "17:36", "17:55", "18:22", "18:51", "19:18", "19:44", "20:09", "20:29"], "times_south": ["5:58", "6:23", "6:48", "7:12", "7:32", "7:49", "8:10", "8:31", "8:53", "9:16", "9:46", "10:16", "10:46", "11:16", "11:46", "12:17", "12:49", "13:20", "13:51", "14:22", "14:53", "15:17", "15:36", "15:56", "16:16", "16:35", "16:55", "17:15", "17:36", "17:56", "18:16", "18:40", "19:09", "19:36", "20:06"] };
myObj["Central/Greenbay"] = {"times_north": ["5:23", "5:53", "6:23", "6:45", "7:06", "7:25", "7:45", "8:06", "8:25", "8:40", "8:56", "9:11", "9:31", "9:51", "10:09", "10:30", "10:52", "11:22", "11:52", "12:24", "12:55", "13:26", "13:57", "14:28", "15:00", "15:31", "15:51", "16:10", "16:30", "16:50", "17:10", "17:30", "17:49", "18:17", "18:46", "19:13", "19:39", "20:04", "20:24"], "times_south": ["6:04", "6:29", "6:55", "7:19", "7:39", "7:58", "8:19", "8:40", "8:59", "9:22", "9:52", "10:22", "10:52", "11:22", "11:52", "12:23", "12:55", "13:26", "13:57", "14:28", "14:59", "15:23", "15:42", "16:02", "16:22", "16:41", "17:01", "17:21", "17:42", "18:02", "18:22", "18:45", "19:14", "19:41", "20:11"] };
myObj["Davis-Church/Benson"] = {"times_north": ["5:12", "5:42", "6:12", "6:34", "6:55", "7:14", "7:34", "7:54", "8:12", "8:27", "8:43", "8:59", "9:19", "9:39", "9:57", "10:18", "10:40", "11:10", "11:40", "12:12", "12:43", "13:14", "13:45", "14:16", "14:46", "15:17", "15:37", "15:57", "16:17", "16:37", "16:57", "17:17", "17:37", "18:06", "18:35", "19:02", "19:28", "19:53", "20:13"], "times_south": ["6:14", "6:39", "7:06", "7:30", "7:50", "8:10", "8:31", "8:52", "9:11", "9:34", "10:04", "10:34", "11:04", "11:34", "12:05", "12:36", "13:07", "13:38", "14:09", "14:40", "15:11", "15:35", "15:55", "16:15", "16:35", "16:56", "17:16", "17:36", "17:56", "18:16", "18:36", "18:57", "19:26", "19:53", "20:23"] };
myObj["Howard Station"] = {"times_north": ["5:00", "5:30", "6:00", "6:22", "6:41", "7:00", "7:19", "7:37", "7:55", "8:10", "8:26", "8:43", "9:03", "9:23", "9:43", "10:04", "10:26", "10:56", "11:26", "11:57", "12:28", "12:59", "13:30", "14:01", "14:31", "15:02", "15:22", "15:43", "16:03", "16:23", "16:43", "17:03", "17:23", "17:53", "18:22", "18:49", "19:15", "19:40", "20:00"], "times_south": ["6:29", "6:54", "7:21", "7:45", "8:05", "8:25", "8:46", "9:07", "9:25", "9:48", "10:18", "10:48", "11:18", "11:48", "12:21", "12:52", "13:22", "13:53", "14:24", "14:55", "15:28", "15:52", "16:13", "16:33", "16:53", "17:16", "17:36", "17:56", "18:15", "18:35", "18:55", "19:13", "19:41", "20:08", "20:38"] };
myObj.numTimes = 6;
var NUMSTOPS = 5;

var x = 0;
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
        timeform.style.border = "2px solid red";
    }
    else
    {
        timeform.style.borderColor = null;
        var times;
        startIndex = myObj.stop.indexOf(start);
        endIndex = myObj.stop.indexOf(destination);

        console.log(start);

        if (startIndex > endIndex)
        {
            times = "times_north"
            myObj.numTimes = 39; //Number of north times
        }
        else
        {
            times = "times_south"
            myObj.numTimes = 35; //Number of south times
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

function init() {

}