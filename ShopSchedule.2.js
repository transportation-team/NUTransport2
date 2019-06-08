
var myObj = new Object();
myObj.stop = ["Emerson/Maple", "Burger King", "Hinman", "Arch", "Foster", "Noyes", "Lincoln","Noyes L Stop","Civic Center","Ridge/Garnett","Old Orchard Mall","Howard/Sacramento"];
myObj["Emerson/Maple"] = {"times_north": ["10:53","11:58","13:08","14:13","15:18","16:23","17:28"], "times_south": ["00:20", "04:40", "06:10", "11:30", "13:00", "17:00"] };
myObj["Burger King"] = {"times_north": ["10:55","12:00","13:10","14:15","15:20","16:25","17:30"], "times_south": ["00:30", "04:50", "06:30", "11:45", "13:10", "17:15"] };
myObj["Hinman"] = {"times_north": ["10:00","11:05","12:15","13:20","14:25","15:30","16:35"], "times_south": ["00:50", "05:00", "06:40", "11:55", "13:20", "17:25"] };
myObj["Arch"] = {"times_north": ["10:02","11:07","12:17","13:22","14:27","15:32","16:37"], "times_south": ["00:51", "05:01", "06:41", "11:56", "13:21", "17:26"] };
myObj["Foster"] = {"times_north": ["10:03","11:08","12:18","13:23","14:28","15:33","16:38"], "times_south": ["00:52", "05:02", "06:42", "11:57", "13:22", "17:27"] };
myObj["Noyes"] = {"times_north": ["10:04","11:09","12:19","13:24","14:29","15:34","16:39"], "times_south": ["00:53", "05:03", "06:43", "11:58", "13:23", "17:28"] };
myObj["Lincoln"] = {"times_north": ["10:05","11:10","12:20","13:25","14:30","15:35","16:40"], "times_south": ["00:55", "05:05", "06:50", "12:05", "13:30", "17:40"] };
myObj["Noyes L Stop"] = {"times_north": ["10:08","11:13","12:23","13:28","14:33","15:38","16:43"], "times_south": ["00:55", "05:06", "06:51", "12:06", "13:31", "17:41"] };
myObj["Civic Center"] = {"times_north": ["10:10","11:15","12:25","13:30","14:35","15:40","16:45"], "times_south": ["00:55", "05:07", "06:52", "12:07", "13:32", "17:42"] };
myObj["Ridge/Garnett"] = {"times_north": ["10:11","11:16","12:26","13:31","14:36","15:41","16:46"], "times_south": ["00:55", "05:08", "06:53", "12:08", "13:33", "17:43"] };
myObj["Old Orchard Mall"] = {"times_north": ["10:26","11:31","12:41","13:46","14:51","15:56","17:01"], "times_south": ["00:55", "05:09", "06:54", "12:09", "13:34", "17:44"] };
myObj["Howard/Sacramento"] = {"times_north": ["10:41","11:46","12:56","14:01","15:06","16:11","17:16"], "times_south": ["00:55", "05:20", "06:55", "12:10", "13:35", "17:45"] };

myObj.numTimes = 6;
var NUMSTOPS = 12;

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
            myObj.numTimes = 6; //Number of north times
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