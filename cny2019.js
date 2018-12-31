function cny2019()
{
	var overlay = createOverlay();
	var pig = createPig();
	var body = document.getElementsByTagName("body");

	overlay.appendChild(pig);
	body[0].appendChild(overlay);
}

function createOverlay()
{
	var div = document.createElement("div");
	div.style.width = "300px";
	div.style.height = "100px";
	div.style.position = "absolute";
	div.style.backgroundColor = "rgba(0,0,0,0.3)";
	div.style.right = "0";
	div.style.bottom = "0";
	return div;
}

function createPig()
{
	var body = document.createElement("div");
	body.style.width = "150px";
	body.style.height = "100px";
	body.style.borderRadius = "50%";
	body.style.position = "relative";
	body.style.backgroundColor = "rgba(255,200,100,1)";
	body.style.float = "right";
	
	return body;
}

function createCaption()
{

}

function createSpeech()
{

}
