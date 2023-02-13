// event hdl
function submitClicked(){
	let vals = document.getElementsByTagName("input");

	for (let i = 0; i<vals.length; i++){
		if (vals[i].checked){
			console.log(vals[i].value);
			let newText = "Selected Vis: " + vals[i].value;
			document.getElementById("selected-vis").innerHTML = newText;

		}
	}
}

function changeCol(){
  var element = document.getElementById("max");
  element.classList.toggle("dark-mode");
}



document.getElementById("subButton")
		.addEventListener('click', submitClicked);

document.getElementById("colButton")
		.addEventListener('click', changeCol);

(function(){

})();