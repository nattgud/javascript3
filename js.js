let names = ["Sten", "Sax", "Påse"];
let results = ["Lika", "Vinst", "Förlust"];
let stats = [0, 0, 0];
function move(player) {
	let ai = Math.floor(Math.random()*3);
	let result = 0;
	if(player === ai) {
		result = 0;
	} else if(player === 0) {
		result = (ai === 1)?1:2;
	} else if(player === 1) {
		result = (ai === 2)?1:2;
	} else if(player === 2) {
		result = (ai === 0)?1:2;
	}
	let p_color = "#fff";
	let a_color = "#fff";
	for(let c = 0; c < 3; c++) {
		document.getElementById("player").children[c].style.outline = "2px solid #fff";
		document.getElementById("ai").children[c].style.outline = "2px solid #fff";
	}
	if(result === 0) {
		p_color = "#00f";
		a_color = "#00f";
	} else if(result === 1) {
		p_color = "#0f0";
		a_color = "#f00";
	} else if(result === 2) {
		p_color = "#f00";
		a_color = "#0f0";
	}
	document.getElementById("player").children[player].style.outline = "2px solid "+p_color;
	document.getElementById("ai").children[ai].style.outline = "2px solid "+a_color;
	document.getElementById("result").innerText = results[result];
	stats[result]++;
	for(let c in stats) {
		document.getElementById("stats").children[c].innerText = stats[c];
	}
}










