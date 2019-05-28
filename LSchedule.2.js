

var x = 0;
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByClassName("table-box")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var myObj = new Object();
    myObj.stop = ["Linden", "Central", "Noyes", "Howard",];
    myObj.Linden = {"times": ["0:20", "04:40", "06:10", "11:30", "01:00", "05:00"] }
    myObj.Central = {"times": ["0:30", "04:50", "06:30", "11:45", "01:10", "05:15"] }
    myObj.Noyes = {"times": ["0:50", "05:00", "06:40", "11:55", "01:20", "05:25"] }
    myObj.Howard = { "times": ["0:55", "05:05", "06:50", "0:05", "01:30", "05:40"] }
    myObj.numTimes = 6;
    var NUMSTOPS = 4;

    //Suppose we wanted to arrive at Central by 3:00 pm, from Linden
    var destination = document.getElementById("location").value;
    console.log(destination);
    var textboxValue = document.getElementById("time12").value;
    //var destination = textboxValue;
    var time = textboxValue;

    time = time.split(":");
    var timeConverted = parseInt(time[0]) * 60 + parseInt(time[1]);

    var i = 0;
    var continueLoop = true;
    var today = new Date();
    var currTime = today.getHours() + ":" + today.getMinutes();

    //finds first time after when input time is
    while (continueLoop == true) {
        currTime = myObj[destination]['times'][i];
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
    if (numColumns > lastTrip) 
    {
        numColumns = lastTrip;
    }
    //    var firstTrip = max(0, lastTrip-5);


    var currStop;
    // creating all cells
    var row = document.createElement("tr");
    var cell = document.createElement("th");
    var cellText = document.createTextNode("Trips before Arrival");
    cell.appendChild(cellText);
    row.appendChild(cell);

    for (var j = 0; j < NUMSTOPS; j++) {
        var cell = document.createElement("th");
        currStop = myObj.stop[j];
        var cellText = document.createTextNode(currStop);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
    for (var i = lastTrip - numColumns; i < lastTrip; i++) {
        // creates a table row
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        var text = lastTrip - i;
        var cellText = document.createTextNode(text);
        cell.appendChild(cellText);
        row.appendChild(cell);

        for (var j = 0; j < NUMSTOPS; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            currStop = myObj.stop[j];
            var cellText = document.createTextNode(myObj[currStop]['times'][i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
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