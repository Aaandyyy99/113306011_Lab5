function start() {
	var btn1 = document.getElementById('btn');
	btn1.addEventListener("click",output);
}
var count = 0, mathSum = 0, engSum = 0;
var tableCon = "";
function output() {
	var math = document.getElementById("math");
	var mathVal = math.value;
	var eng = document.getElementById("eng");
	var engVal = eng.value;
	if (!isNaN(parseInt(mathVal))&&!isNaN(parseInt(engVal))) {
		var content = "<table><thead><th>#</th><th>Math</th><th>English</th><th>Average</th></thead><tfoot><th>Average</th><th>"; 
		count += 1;
		mathSum += parseInt(mathVal);
		engSum += parseInt(engVal);
		content += Math.round(((mathSum)/count)*100)/100 + "</th><th>" + Math.round(((engSum)/count)*100)/100 + "</th><th>" + Math.round(((mathSum+engSum)/(2*count))*100)/100+ "</th><tbody>";

		tableCon += "<tr><td>" + count + "</td><td>" + mathVal + "</td><td>" + engVal + "</td><td>" + (parseInt(mathVal)+parseInt(engVal))/2 + "<td>";
		content += tableCon;
		content += "</tbody><table>";
		document.getElementById("table").innerHTML = content;
	}else{
		alert("please enter number")
	}
	
	math.value = "";
	eng.value = "";
}
window.addEventListener("load",start);