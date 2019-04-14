var track=1;
function flip() {
	track++;
	if(track==1)
	document.body.style="background-image:url(image1.jpg)";
	if(track==2)
	document.body.style="background-image:url(image2.jpg)";
	if(track==3)
	document.body.style="background-image:url(image3.jpg)";
	if(track==4)
	document.body.style="background-image:url(image4.jpg)";
	if(track==5)
	{
	document.body.style="background-image:url(image5.jpg)";
	track=0;
	}
	if(track==1)
	document.getElementById("id1").style="margin-top:-10px;";
}
function gotohome() {
	location.replace("file:///C:/Users/himan/OneDrive/Desktop/Project%20WEBD/project_air_force.html");
}
