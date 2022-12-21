
// This function replaces the text of a node with a placeholder if it contains the word "spoiler"
function hideSpoilers(node){
	if(node.nodeType === Node.ELEMENT_NODE && (node.tagName.toLowerCase() === "h3" || node.tagName.toLowerCase() === "h1")){
		let spoilerWords = ["win", "beat", "defeated", "knocked out", "finishes", "draw", "draws", "beats", "knocks out", "destroys", "recap", "ko", "victory", "lost", "loses", "won", "wins", "loses", "tko"];
		spoilerWords.forEach((word) => {
			if(node.innerText.toLowerCase().includes(word)){
				node.innerText = "No Spoilers :)";
				let spoilerImg = node.closest("#dismissible.ytd-video-renderer");
				if(spoilerImg){
					spoilerImg.classList.add("spoiler");
				}
				// console.log(node);
				return node.innerText;
			}
		});
	}else if(node.childNodes){
		// Recursively check the child nodes
		node.childNodes.forEach(hideSpoilers);
	}
}
// This is the content script, which runs in the context of the web page and has access to the page's DOM
// It listens for changes to the page's DOM and hides spoilers from YouTube titles
var observer = new MutationObserver(function(mutations){
	mutations.forEach(function(mutation){
		mutation.addedNodes.forEach(hideSpoilers);
	});
});

window.addEventListener("load", function(){
	chrome.storage.sync.get(["enabled"], function(result){
		console.log("Extension enabled: " + result.enabled);
		observer.observe(document.body, {childList: true, subtree: true});
	});
});

