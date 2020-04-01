var btn = document.getElementById("start");
var displaycolor = document.getElementById("background");
btn.addEventListener("click", function(){
	var displaycolorvalue = displaycolor.value;
	if(displaycolorvalue == "red")
	{	
		document.body.style.backgroundColor = "red";
	}
	else if(displaycolorvalue == "green")
	{
		document.body.style.backgroundColor = "green";
	}
	else if(displaycolorvalue == "blue")
	{
		document.body.style.backgroundColor = "blue";
	}
})