
var myObj = new Object();
myObj.stop = ["Library/Norris Center", "Fisk Hall", "Weber Arch", "Jacobs Center", "Tech Institute", "Noyes L Station", "Ridge/Civic Center", "Ridge/Reserve Apartments", "Emerson/Maple", "Sherman/Clark", "Davis/Sherman", "Davis/Oak", "Maple/Clark", "Sherman/Emerson", "Sherman/Foster", "Sherman/Gaffield", "Sheridan/Noyes", "Sheridan/Foster"];
myObj["Library/Norris Center"] = {"times_north": ["0:00","0:20","0:40","1:00","1:20","1:40","2:00","2:20","2:40","18:00","18:40","19:00","19:20","19:40","20:00","20:20","20:40","21:00","21:20","21:40","22:00","22:20","22:40","23:00","23:20","23:40"], "times_south": ["0:25","0:45","1:05","1:25","1:45","2:05","2:25","2:45","3:05","18:25","19:05","19:25","19:45","20:05","20:25","20:45","21:05","21:25","21:45","22:05","22:25","22:45","23:05","23:25","23:45","0:05"] };
myObj["Fisk Hall"] = {"times_north": ["0:02","0:22","0:42","1:02","1:22","1:42","2:02","2:22","2:42","18:02","18:42","19:02","19:22","19:42","20:02","20:22","20:42","21:02","21:22","21:42","22:02","22:22","22:42","23:02","23:22","23:42"], "times_south": ["0:23","0:43","1:03","1:23","1:43","2:03","2:23","2:43","3:03","18:23","19:03","19:23","19:43","20:03","20:23","20:43","21:03","21:23","21:43","22:03","22:23","22:43","23:03","23:23","23:43","0:03"] };
myObj["Weber Arch"] = {"times_north": ["0:04","0:24","0:44","1:04","1:24","1:44","2:04","2:24","2:44","18:04","18:44","19:04","19:24","19:44","20:04","20:24","20:44","21:04","21:24","21:44","22:04","22:24","22:44","23:04","23:24","23:44"], "times_south": ["0:22","0:42","1:02","1:22","1:42","2:02","2:22","2:42","3:02","18:22","19:02","19:22","19:42","20:02","20:22","20:42","21:02","21:22","21:42","22:02","22:22","22:42","23:02","23:22","23:42","0:02"] };
myObj["Jacobs Center"] = {"times_north": ["0:05","0:25","0:45","1:05","1:25","1:45","2:05","2:25","2:45","18:05","18:45","19:05","19:25","19:45","20:05","20:25","20:45","21:05","21:25","21:45","22:05","22:25","22:45","23:05","23:25","23:45"], "times_south": ["0:21","0:41","1:01","1:21","1:41","2:01","2:21","2:41","3:01","18:21","19:01","19:21","19:41","20:01","20:21","20:41","21:01","21:21","21:41","22:01","22:21","22:41","23:01","23:21","23:41","0:01"] };
myObj["Tech Institute"] = {"times_north": ["0:06","0:26","0:46","1:06","1:26","1:46","2:06","2:26","2:46","18:06","18:46","19:06","19:26","19:46","20:06","20:26","20:46","21:06","21:26","21:46","22:06","22:26","22:46","23:06","23:26","23:46"], "times_south": ["0:20","0:40","1:00","1:20","1:40","2:00","2:20","2:40","3:00","18:20","19:00","19:20","19:40","20:00","20:20","20:40","21:00","21:20","21:40","22:00","22:20","22:40","23:00","23:20","23:40","0:00"] };
myObj["Noyes L Station"] = {"times_north": ["0:08","0:28","0:48","1:08","1:28","1:48","2:08","2:28","2:48","18:08","18:48","19:08","19:28","19:48","20:08","20:28","20:48","21:08","21:28","21:48","22:08","22:28","22:48","23:08","23:28","23:48"], "times_south": ["0:18","0:38","0:58","1:18","1:38","1:58","2:18","2:38","2:58","18:18","18:58","19:18","19:38","19:58","20:18","20:38","20:58","21:18","21:38","21:58","22:18","22:38","22:58","23:18","23:38","23:58"] };
myObj["Ridge/Civic Center"] = {"times_north": ["0:10","0:30","0:50","1:10","1:30","1:50","2:10","2:30","2:50","18:10","18:50","19:10","19:30","19:50","20:10","20:30","20:50","21:10","21:30","21:50","22:10","22:30","22:50","23:10","23:30","23:50"], "times_south": ["0:16","0:36","0:56","1:16","1:36","1:56","2:16","2:36","2:56","18:16","18:56","19:16","19:36","19:56","20:16","20:36","20:56","21:16","21:36","21:56","22:16","22:36","22:56","23:16","23:36","23:56"] };
myObj["Ridge/Reserve Apartments"] = {"times_north": ["0:11","0:31","0:51","1:11","1:31","1:51","2:11","2:31","2:51","18:11","18:51","19:11","19:31","19:51","20:11","20:31","20:51","21:11","21:31","21:51","22:11","22:31","22:51","23:11","23:31","23:51"], "times_south": ["0:15","0:35","0:55","1:15","1:35","1:55","2:15","2:35","2:55","18:15","18:55","19:15","19:35","19:55","20:15","20:35","20:55","21:15","21:35","21:55","22:15","22:35","22:55","23:15","23:35","23:55"] };
myObj["Emerson/Maple"] = {"times_north": ["0:12","0:32","0:52","1:12","1:32","1:52","2:12","2:32","2:52","18:12","18:52","19:12","19:32","19:52","20:12","20:32","20:52","21:12","21:32","21:52","22:12","22:32","22:52","23:12","23:32","23:52"], "times_south": ["0:13","0:33","0:53","1:13","1:33","1:53","2:13","2:33","2:53","18:13","18:53","19:13","19:33","19:53","20:13","20:33","20:53","21:13","21:33","21:53","22:13","22:33","22:53","23:13","23:33","23:53"] };
myObj["Sherman/Clark"] = {"times_north": ["0:13","0:33","0:53","1:13","1:33","1:53","2:13","2:33","2:53","18:13","18:53","19:13","19:33","19:53","20:13","20:33","20:53","21:13","21:33","21:53","22:13","22:33","22:53","23:13","23:33","23:53"], "times_south": ["0:12","0:32","0:52","1:12","1:32","1:52","2:12","2:32","2:52","18:12","18:52","19:12","19:32","19:52","20:12","20:32","20:52","21:12","21:32","21:52","22:12","22:32","22:52","23:12","23:32","23:52"] };
myObj["Davis/Sherman"] = {"times_north": ["0:15","0:35","0:55","1:15","1:35","1:55","2:15","2:35","2:55","18:15","18:55","19:15","19:35","19:55","20:15","20:35","20:55","21:15","21:35","21:55","22:15","22:35","22:55","23:15","23:35","23:55"], "times_south": ["0:11","0:31","0:51","1:11","1:31","1:51","2:11","2:31","2:51","18:11","18:51","19:11","19:31","19:51","20:11","20:31","20:51","21:11","21:31","21:51","22:11","22:31","22:51","23:11","23:31","23:51"] };
myObj["Davis/Oak"] = {"times_north": ["0:16","0:36","0:56","1:16","1:36","1:56","2:16","2:36","2:56","18:16","18:56","19:16","19:36","19:56","20:16","20:36","20:56","21:16","21:36","21:56","22:16","22:36","22:56","23:16","23:36","23:56"], "times_south": ["0:10","0:30","0:50","1:10","1:30","1:50","2:10","2:30","2:50","18:10","18:50","19:10","19:30","19:50","20:10","20:30","20:50","21:10","21:30","21:50","22:10","22:30","22:50","23:10","23:30","23:50"] };
myObj["Maple/Clark"] = {"times_north": ["0:18","0:38","0:58","1:18","1:38","1:58","2:18","2:38","2:58","18:18","18:58","19:18","19:38","19:58","20:18","20:38","20:58","21:18","21:38","21:58","22:18","22:38","22:58","23:18","23:38","23:58"], "times_south": ["0:08","0:28","0:48","1:08","1:28","1:48","2:08","2:28","2:48","18:08","18:48","19:08","19:28","19:48","20:08","20:28","20:48","21:08","21:28","21:48","22:08","22:28","22:48","23:08","23:28","23:48"] };
myObj["Sherman/Emerson"] = {"times_north": ["0:20","0:40","1:00","1:20","1:40","2:00","2:20","2:40","3:00","18:20","19:00","19:20","19:40","20:00","20:20","20:40","21:00","21:20","21:40","22:00","22:20","22:40","23:00","23:20","23:40","0:00"], "times_south": ["0:06","0:26","0:46","1:06","1:26","1:46","2:06","2:26","2:46","18:06","18:46","19:06","19:26","19:46","20:06","20:26","20:46","21:06","21:26","21:46","22:06","22:26","22:46","23:06","23:26","23:46"] };
myObj["Sherman/Foster"] = {"times_north": ["0:21","0:41","1:01","1:21","1:41","2:01","2:21","2:41","3:01","18:21","19:01","19:21","19:41","20:01","20:21","20:41","21:01","21:21","21:41","22:01","22:21","22:41","23:01","23:21","23:41","0:01"], "times_south": ["0:05","0:25","0:45","1:05","1:25","1:45","2:05","2:25","2:45","18:05","18:45","19:05","19:25","19:45","20:05","20:25","20:45","21:05","21:25","21:45","22:05","22:25","22:45","23:05","23:25","23:45"] };
myObj["Sherman/Gaffield"] = {"times_north": ["0:22","0:42","1:02","1:22","1:42","2:02","2:22","2:42","3:02","18:22","19:02","19:22","19:42","20:02","20:22","20:42","21:02","21:22","21:42","22:02","22:22","22:42","23:02","23:22","23:42","0:02"], "times_south": ["0:04","0:24","0:44","1:04","1:24","1:44","2:04","2:24","2:44","18:04","18:44","19:04","19:24","19:44","20:04","20:24","20:44","21:04","21:24","21:44","22:04","22:24","22:44","23:04","23:24","23:44"] };
myObj["Sheridan/Noyes"] = {"times_north": ["0:23","0:43","1:03","1:23","1:43","2:03","2:23","2:43","3:03","18:23","19:03","19:23","19:43","20:03","20:23","20:43","21:03","21:23","21:43","22:03","22:23","22:43","23:03","23:23","23:43","0:03"], "times_south": ["0:02","0:22","0:42","1:02","1:22","1:42","2:02","2:22","2:42","18:02","18:42","19:02","19:22","19:42","20:02","20:22","20:42","21:02","21:22","21:42","22:02","22:22","22:42","23:02","23:22","23:42"] };
myObj["Sheridan/Foster"] = {"times_north": ["0:25","0:45","1:05","1:25","1:45","2:05","2:25","2:45","3:05","18:25","19:05","19:25","19:45","20:05","20:25","20:45","21:05","21:25","21:45","22:05","22:25","22:45","23:05","23:25","23:45","0:05"], "times_south": ["0:00","0:20","0:40","1:00","1:20","1:40","2:00","2:20","2:40","18:00","18:40","19:00","19:20","19:40","20:00","20:20","20:40","21:00","21:20","21:40","22:00","22:20","22:40","23:00","23:20","23:40"] };
myObj.numTimes = 26;
var NUMSTOPS = 14;

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
        }
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