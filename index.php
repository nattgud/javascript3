<!DOCTYPE html>
<html lang="sv">
<head>
<title>JavaScript 3</title>
<meta charset="utf-8">
<script src="js.js"></script>
<link rel="stylesheet" type="text/css" href="css.css">
</head>
<body>
<h1>JavaScript 3</h1>
<div id="player">
	<img src="rock.png" alt="Sten"		onclick="move(0);">
	<img src="scissor.png" alt="Sax"	onclick="move(1);">
	<img src="paper.png" alt="Påse"		onclick="move(2);">
</div>
<div id="ai">
	<img src="rock.png" alt="Sten">
	<img src="scissor.png" alt="Sax">
	<img src="paper.png" alt="Påse">
</div>
<h1 id="result"></h1>


<table><tbody>
	<tr id="stats">
		<td>0</td><td>0</td><td>0</td>
	</tr>
</tbody></table>
</body>
</html>










