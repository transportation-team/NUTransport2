


function generate_table() {
    // get the reference for the body
    var body = document.getElementsByClassName("table-box")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var myObj = new Object();
    myObj.stop = ["Linden", "Noyes", "Central", "Howard",];
    myObj.Linden = { "pmSwitch": 4, "times": ["12:20 AM", "04:40 AM", "06:10 AM", "11:30 AM", "01:00 PM", "05:00 PM"] }
    myObj.Noyes = { "pmSwitch": 4, "times": ["12:30 AM", "04:50 AM", "06:30 AM", "11:45 AM", "01:10 PM", "05:15 PM"] }
    myObj.Central = { "pmSwitch": 4, "times": ["12:50 AM", "05:00 AM", "06:40 AM", "11:55 AM", "01:20 PM", "05:25 PM"] }
    myObj.Howard = { "pmSwitch": 3, "times": ["12:55 AM", "05:05 AM", "06:50 AM", "12:05 PM", "01:30 PM", "05:40 PM"] }
    myObj.numTimes = 6;
    var NUMSTOPS = 4;

    //Suppose we wanted to arrive at Central by 3:00 pm, from Linden
    var destination = "Central";
    //    var textboxValue = document.getElementById("textbox").value;
    //    var destination = textboxValue;
    var time = "04:50";
    time = time.split(":");
    var timeConverted;
    var pm = true;
    timeConverted = parseInt(time[0]) * 60 + parseInt(time[1]);
    if (pm) { timeConverted = timeConverted + 12 * 60 }

    var i = 0;
    var continueLoop = true;
    var currTime = "00:00";

    while (continueLoop == true) {
        currTime = myObj[destination]['times'][i];
        currTime = currTime.split(":")
        var currTimeConverted = parseInt(currTime[0]) * 60 + parseInt(currTime[1]);
        if (myObj[destination]['pmSwitch'] <= i) {
            currTimeConverted = currTimeConverted + 12 * 60;
        }
        if (currTimeConverted < timeConverted) {
            i = i + 1;
        }
        else {
            continueLoop = false;
        }
    }


    //Now i-1 is the correct entry
    var lastTrip = i;
    var numColumns = 5;
    if (numColumns > lastTrip) {
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

    for (var i = 0; i < lastTrip; i++) {
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
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}

function init() {

}