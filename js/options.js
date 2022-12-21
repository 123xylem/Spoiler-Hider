function $(id){ return document.getElementById(id); }

function save_options(){
	chrome.storage.sync.set({"redborder": $("redborder").checked});
}

function readOptions(){
	chrome.storage.sync.get(["redborder"], function(items){
		if(items["redborder"] == true)$("redborder").checked = true;
	});

	// Detect click / change to save the page and test it.
	var inputs = document.querySelectorAll("input");
	var i, l = inputs.length;
	for(i = 0; i < l; i++){ inputs[i].addEventListener("change", save_options); }
}

document.addEventListener("DOMContentLoaded", readOptions);