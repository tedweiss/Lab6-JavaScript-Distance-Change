var distance = 20;
var unit = "km";

var convertToM = distance*1.6
var convertToKm = distance*0.64

if(unit ="miles") {
document.write(convertToM + " " + unit);
}else if (unit ="km") {
	document.write(convertToKm + " " + unit);
}else{
	document.write("sorry")
}