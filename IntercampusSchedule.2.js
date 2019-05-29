


var x = 0;
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByClassName("table-box")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var myObj = new Object();
    myObj.stop = ["Noyes L Stop", "Civic Center", "Ridge/Garnett", "Emerson/Maple", "Sherman/Emerson", "Sherman/Foster", "Sherman/Gaffield","Lincoln","Noyes","Foster","Arch","Chicago/Davis","Chicago/Grove","Sheridan/Loyola","Downtown"];
    myObj["Noyes L Stop"] = {"times_north": ["1:01", "05:11", "06:56", "12:11", "13:36", "17:46"], "times_south": ["00:20", "04:40", "06:10", "11:30", "13:00", "17:00"] };
    myObj["Civic Center"] = {"times_north": ["1:00", "05:10", "06:55", "12:10", "13:35", "17:45"], "times_south": ["00:30", "04:50", "06:30", "11:45", "13:10", "17:15"] };
    myObj["Ridge/Garnett"] = {"times_north": ["00:59", "05:09", "06:54", "12:09", "13:34", "17:44"], "times_south": ["00:50", "05:00", "06:40", "11:55", "13:20", "17:25"] };
    myObj["Emerson/Maple"] = {"times_north": ["00:58", "05:08", "06:53", "12:08", "13:33", "17:43"], "times_south": ["00:51", "05:01", "06:41", "11:56", "13:21", "17:26"] };
    myObj["Sherman/Emerson"] = {"times_north": ["00:57", "05:07", "06:52", "12:07", "13:32", "17:42"], "times_south": ["00:52", "05:02", "06:42", "11:57", "13:22", "17:27"] };
    myObj["Sherman/Foster"] = {"times_north": ["00:56", "05:06", "06:51", "12:06", "13:31", "17:41"], "times_south": ["00:53", "05:03", "06:43", "11:58", "13:23", "17:28"] };
    myObj["Sherman/Gaffield"] = {"times_north": ["00:55", "05:05", "06:50", "12:05", "13:30", "17:40"], "times_south": ["00:55", "05:05", "06:50", "12:05", "13:30", "17:40"] };
    myObj["Lincoln"] = {"times_north": ["00:54", "05:04", "06:49", "12:04", "13:29", "17:40"], "times_south": ["00:56", "05:06", "06:51", "12:06", "13:31", "17:41"] };
    myObj["Noyes"] = {"times_north": ["00:53", "05:03", "06:48", "12:03", "13:28", "17:40"], "times_south": ["00:57", "05:07", "06:52", "12:07", "13:32", "17:42"] };
    myObj["Foster"] = {"times_north": ["00:52", "05:02", "06:47", "12:02", "13:27", "17:40"], "times_south": ["00:58", "05:08", "06:53", "12:08", "13:33", "17:43"] };
    myObj["Arch"] = {"times_north": ["00:51", "05:01", "06:46", "12:01", "13:26", "17:40"], "times_south": ["00:59", "05:09", "06:54", "12:09", "13:34", "17:44"] };
    myObj["Chicago/Davis"] = {"times_north": ["00:50", "05:00", "06:45", "12:00", "13:25", "17:40"], "times_south": ["01:00", "05:10", "06:55", "12:10", "13:35", "17:45"] };
    myObj["Chicago/Grove"] = {"times_north": ["00:50", "05:00", "06:45", "12:00", "13:25", "17:40"], "times_south": ["01:00", "05:10", "06:55", "12:10", "13:35", "17:45"] };
    myObj["Sheridan/Loyola"] = {"times_north": ["00:49", "04:59", "06:44", "11:59", "13:24", "17:40"], "times_south": ["01:01", "05:11", "06:56", "12:11", "13:36", "17:46"] };
    myObj["Downtown"] = {"times_north": ["00:48", "04:58", "06:43", "11:58", "13:23", "17:40"], "times_south": ["01:02", "05:12", "06:57", "12:12", "13:37", "17:47"] };
    myObj.numTimes = 6;
    var NUMSTOPS = 15;

    //Suppose we wanted to arrive at Central by 3:00 pm, from Linden
    var start = document.getElementById("start").value;
    var destination = document.getElementById("destination").value;
    var time = document.getElementById("time12").value;
    var times;
    startIndex = myObj.stop.indexOf(start);
    endIndex = myObj.stop.indexOf(destination);
    if (startIndex > endIndex)
    {
        times = "times_north"
    }
    else
    {
        times = "times_south"
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

    if (startIndex <= endIndex)
    {
        for (var j = startIndex; j <= endIndex; j++) {
            var cell = document.createElement("th");
            currStop = myObj.stop[j];
            var cellText = document.createTextNode(currStop);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
        for (var i = lastTrip; i < lastTrip + numColumns; i++) 
        {
            // creates a table row
            var row = document.createElement("tr");

            var cell = document.createElement("th");
            var text = i + 1 - lastTrip;
            var cellText = document.createTextNode(text);
            cell.appendChild(cellText);
            row.appendChild(cell);

            for (var j = startIndex; j <= endIndex; j++) 
            {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                currStop = myObj.stop[j];
                var cellTime = new Date("August 19, 1975 "+myObj[currStop][times][i]);
                cellTime = cellTime.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'});
                var cellText = document.createTextNode(cellTime);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }
    }
    else
    {
        for (var j = startIndex; j >= endIndex; j--) {
            var cell = document.createElement("th");
            currStop = myObj.stop[j];
            var cellText = document.createTextNode(currStop);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
        for (var i = lastTrip; i < lastTrip + numColumns; i++) 
        {
            // creates a table row
            var row = document.createElement("tr");

            var cell = document.createElement("th");
            var text = i + 1 - lastTrip;
            var cellText = document.createTextNode(text);
            cell.appendChild(cellText);
            row.appendChild(cell);

            for (var j = startIndex; j >= endIndex; j--) 
            {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                currStop = myObj.stop[j];
                var cellTime = new Date("August 19, 1975 "+myObj[currStop][times][i]);
                cellTime = cellTime.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'});
                //attempt to make AM/PM on same line
                //cellTime = cellTime.replace(' ','&nbsp');
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

function init() {

}