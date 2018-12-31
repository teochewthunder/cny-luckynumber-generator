function cny2019()
{
	var overlay = createOverlay();
	var body = document.getElementsByTagName("body");

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

}

function createCaption()
{

}

function createSpeech()
{

}
