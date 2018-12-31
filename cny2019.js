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
	var torso = document.createElement("div");
	torso.style.width = "100px";
	torso.style.height = "90px";
	torso.style.borderRadius = "50%";
	torso.style.position = "relative";
	torso.style.backgroundColor = "rgba(255, 100, 100, 1)";
	torso.style.float = "right";
	
	var eyes = document.createElement("div");
	eyes.style.width = "100px";
	eyes.style.height = "20px";
	eyes.style.position = "relative";
	eyes.style.margin = "40px auto 0 auto";
	eyes.style.fontSize = "50px";
	eyes.style.textAlign = "center";
	eyes.style.color = "rgba(0, 0, 0, 1)";
	eyes.innerHTML = "&sdot;&nbsp;&sdot;";

	var snout = document.createElement("div");
	snout.style.width = "30px";
	snout.style.height = "20px";
	snout.style.borderRadius = "50%";
	snout.style.position = "relative";
	snout.style.backgroundColor = "rgba(200, 50, 50, 1)";
	snout.style.margin = "5px auto 0 auto";
	snout.style.fontSize = "20px";
	snout.style.textAlign = "center";
	snout.style.color = "rgba(100, 50, 50, 1)";
	snout.innerHTML = "&sdot;&sdot;";
	
	var legs = document.createElement("div");
	legs.style.width = "80px";
	legs.style.height = "16px";
	legs.style.position = "relative";
	legs.style.margin = "5px auto 0 auto";
	
	var leg1 = document.createElement("div");
	leg1.style.width = "10px";
	leg1.style.height = "20px";
	leg1.style.borderRadius = "50%";
	leg1.style.backgroundColor = "rgba(255, 100, 100, 1)";
	leg1.style.float = "left";
	leg1.style.margin = "0 0 0 10px";
	
	var leg2 = document.createElement("div");
	leg2.style.width = "10px";
	leg2.style.height = "20px";
	leg2.style.borderRadius = "50%";
	leg2.style.backgroundColor = "rgba(255, 100, 100, 1)";
	leg2.style.float = "right";
	leg2.style.margin = "0 10px 0 0";
	
	legs.appendChild(leg1);
	legs.appendChild(leg2);
	
	torso.appendChild(eyes);
	torso.appendChild(snout);
	torso.appendChild(legs);
	return torso;
}

function createCaption()
{

}

function createSpeech()
{

}
