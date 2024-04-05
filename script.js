var participantNames = [
    "Pranav Dandgaval",
    "Kaivalya Rakesh Parange (कैवल्य राकेश पारंगे)",
    "Oajas Mahesh Lele",
    "Nachiket Likhite"
];

var table = document.getElementById("participants-table");

for (var i = 0; i < participantNames.length; i++) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = i + 1;
    cell2.textContent = participantNames[i];
}