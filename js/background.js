/* eslint-disable no-unused-vars */

// Importing the constants
// eslint-disable-next-line no-undef


// chrome.storage.onChanged.addListener(function(changes, namespace){
// 	if(changes.enabled){
// 		const newValue = changes.enabled.newValue;
// 		console.log("Extension enabled: " + newValue);
// 		// Enable or disable the extension's functionality based on the new value of "enabled"
// 	}
// });

chrome.action.onClicked.addListener(async function(tab){
	if(tab.url.match(/^http/i) || tab.url.match(/^file/i)){
		if((new URL(tab.url)).origin != browserstore && tab.url != browsernewtab){
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				files: ["js/run.js"]
			});
		}
	}
});

