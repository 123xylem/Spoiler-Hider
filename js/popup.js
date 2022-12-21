
document.getElementById("activate-btn").addEventListener("click", function(){
	chrome.storage.sync.get(["enabled"], function(result){
		const newValue = !result.enabled;
		chrome.storage.sync.set({enabled: newValue}, function(){
			console.log("Extension enabled: " + newValue);
			document.getElementById("activate-btn").classList.toggle("active");
		});
	});
});

