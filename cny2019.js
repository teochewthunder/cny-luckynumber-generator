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
	div.style.padding = "10px";
	div.style.backgroundColor = "rgba(0,0,0,0.3)";
	div.style.right = "0";
	div.style.bottom = "0";
	return div;
}

function createPig()
{
	var body = document.createElement("div");
	body.style.width = "100px";
	body.style.height = "90px";
	body.style.borderRadius = "50%";
	body.style.position = "relative";
	body.style.backgroundColor = "rgba(255,100,100,1)";
	body.style.float = "right";
	
	var snout = document.createElement("div");
	snout.style.width = "60px";
	snout.style.height = "50px";
	snout.style.borderRadius = "50%";
	snout.style.position = "relative";
	snout.style.backgroundColor = "rgba(200,50,50,1)";
	snout.style.margin = "10px auto 0 auto";
	
	body.appendChild(snout);
	return body;
}

function createCaption()
{

}

function createSpeech()
{

}
