function cny2019()
{
	var overlay = createOverlay();
	var caption = createCaption();
	var pig = createPig();
	var body = document.getElementsByTagName("body");

	overlay.appendChild(caption);
	overlay.appendChild(pig);
	body[0].appendChild(overlay);

	pig.onclick = function()
	{
		if (caption.style.visibility == "hidden")
		{
			caption.style.visibility = "visible";
			getNumbers();
		}
		else
		{
			caption.style.visibility = "hidden";
		}
	}

	setInterval
	(
		function()
		{
			var eyes = document.getElementsByClassName("cny2019_eyes");

			eyes[0].innerHTML = "-&nbsp;&nbsp;-";

			setTimeout
			(
				function() 
				{
					eyes[0].innerHTML = "&bull;&nbsp;&nbsp;&bull;";
				},
				500
			);
		},
		5000
	);

	setInterval
	(
		function()
		{
			var tail = document.getElementsByClassName("cny2019_tail");

			tail[0].style.transform = "rotate(-185deg)";

			setTimeout
			(
				function() 
				{
					tail[0].style.transform = "rotate(-175deg)";
				},
				500
			);
		},
		1000
	);

	function createOverlay()
	{
		var div = document.createElement("div");
		//div.style.outline = "1px solid #FFFFFF";
		div.style.width = "100px";
		div.style.height = "400px";
		div.style.position = "fixed";
		div.style.padding = "10px";
		div.style.right = "0";
		div.style.bottom = "0";
		return div;
	}

	function createPig()
	{
		var torso = document.createElement("div");
		torso.style.width = "80px";
		torso.style.height = "70px";
		torso.style.borderRadius = "50%";
		torso.style.position = "relative";
		torso.style.backgroundColor = "rgba(255, 100, 100, 1)";
		torso.style.float = "right";
		torso.style.cursor = "pointer";

		var tail = document.createElement("div");
		tail.className = "cny2019_tail";
		tail.style.width = "80px";
		tail.style.height = "10px";
		tail.style.position = "relative";
		tail.style.margin = "10px auto 0 auto";
		tail.style.fontSize = "20px";
		tail.style.fontWeight = "bold";
		tail.style.textAlign = "center";
		//tail.style.outline = "1px solid #00FF00";
		tail.style.color = "rgba(255, 100, 100, 1)";
		tail.innerHTML = "&zeta;";
		tail.style.webkitTransformOrigin = "50% 0";
		tail.style.transformOrigin = "50% 0";
		tail.style.webkitTransform = "rotate(-180deg)";
		tail.style.transform = "rotate(-180deg)";
		tail.style.webkitTransition = "all 0.5s";
		tail.style.transition = "all 0.5s";
	
		var eyes = document.createElement("div");
		eyes.className = "cny2019_eyes";
		eyes.style.width = "80px";
		eyes.style.height = "20px";
		eyes.style.position = "relative";
		eyes.style.margin = "15px auto 0 auto";
		eyes.style.fontSize = "15px";
		eyes.style.fontWeight = "bold";
		eyes.style.textAlign = "center";
		//eyes.style.outline = "1px solid #00FF00";
		eyes.style.color = "rgba(0, 0, 0, 1)";
		eyes.innerHTML = "&bull;&nbsp;&nbsp;&bull;";

		var snout = document.createElement("div");
		snout.style.width = "20px";
		snout.style.height = "15px";
		snout.style.borderRadius = "50%";
		snout.style.position = "relative";
		snout.style.backgroundColor = "rgba(200, 50, 50, 1)";
		snout.style.margin = "0 auto 0 auto";
		snout.style.fontSize = "10px";
		snout.style.fontWeight = "bold";
		snout.style.textAlign = "center";
		//snout.style.outline = "1px solid #00FF00";
		snout.style.color = "rgba(100, 20, 20, 1)";
		snout.innerHTML = "&bull;&bull;";
	
		var legs = document.createElement("div");
		legs.style.width = "70px";
		legs.style.height = "16px";
		legs.style.position = "relative";
		legs.style.margin = "-17px auto 0 auto";
		//legs.style.outline = "1px solid #00FF00";
			
		var leg1 = createLeg();
		leg1.style.float = "left";
		leg1.style.margin = "5px 0 0 5px";
		
		var leg2 = createLeg();
		leg2.style.float = "right";
		leg2.style.margin = "5px 5px 0 0";

		var leg3 = createLeg();
		leg3.style.float = "left";
		leg3.style.margin = "-8px 0 0 0px";
		
		var leg4 = createLeg();
		leg4.style.float = "right";
		leg4.style.margin = "-8px 0px 0 0";
		
		legs.appendChild(leg3);
		legs.appendChild(leg1);
		legs.appendChild(leg4);
		legs.appendChild(leg2);	
		
		torso.appendChild(tail);
		torso.appendChild(eyes);
		torso.appendChild(snout);
		torso.appendChild(legs);
		
		return torso;
	}

	function createLeg()
	{
		var leg = document.createElement("div");
		leg.style.position = "relative";
		leg.style.width = "8px";
		leg.style.height = "15px";
		leg.style.borderRadius = "50%";
		leg.style.backgroundColor = "rgba(255, 100, 100, 1)";

		return leg;
	}

	function createCaption()
	{
		var caption = document.createElement("div");
		caption.style.visibility = "hidden";
		caption.style.position = "relative";
		caption.style.width = "60%";
		caption.style.margin = "0 auto 50px auto";
		//caption.style.outline = "1px solid #00FF00";

		var leftcol = document.createElement("div");
		leftcol.style.position = "relative";
		leftcol.style.float = "left";
		leftcol.style.width = "40%";
		leftcol.style.color = "#FF9900";
		leftcol.style.fontSize = "30px";
		leftcol.style.textAlign = "center";
		leftcol.fontWeight = "bold";
		leftcol.style.textShadow = "2px 2px 20px #FF0000, 0px 0px 20px #FF0000, 0px 2px 20px #FF0000, 2px 0px 20px #FF0000";
		leftcol.innerHTML = "猪<br />你<br />恭<br />喜<br />发<br />财<br />!<br />";

		var rightcol = document.createElement("div");
		rightcol.className = "cny2019_numbers";
		rightcol.style.position = "relative";
		rightcol.style.float = "right";
		rightcol.style.width = "40%";
		rightcol.style.color = "#FFFF00";
		rightcol.style.fontSize = "20px";
		rightcol.style.textAlign = "center";
		rightcol.fontWeight = "bold";
		rightcol.style.textShadow = "2px 2px 20px #FF0000, 0px 0px 20px #FF0000, 0px 2px 20px #FF0000, 2px 0px 20px #FF0000";

		caption.appendChild(leftcol);
		caption.appendChild(rightcol);

		return caption;
	}

	function getNumbers()
	{
		var numbers = 
		[
			generateRandomNo(0, 9),
			generateRandomNo(0, 9),
			generateRandomNo(0, 9),
			generateRandomNo(0, 9)
		];

		var rightcol = document.getElementsByClassName("cny2019_numbers");
		rightcol[0].innerHTML = "幸<br />运<br />号<br />码<br />" + numbers[0] + "<br />" + numbers[1] + "<br />" + numbers[2] + "<br />" + numbers[3];
	}

	function generateRandomNo(varmin, varmax)
	{
		return Math.floor((Math.random() * (varmax-varmin+1)) + varmin);
	}
}
