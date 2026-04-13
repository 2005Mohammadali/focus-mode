chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        state: "on"
    })
})


// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: "OFF",
//   });
// });

// // const extensions = 'https://developer.chrome.com/docs/extensions';
// // const webstore = 'https://developer.chrome.com/docs/webstore';
// const yt = "https://www.youtube.com";

// let nextState;
// chrome.action.onClicked.addListener(async (tab) => {
//     if (tab.url.startsWith(yt)) {
//         // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//         const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//         console.log(`TabId: ${tab.id} \n PrevState: ${prevState}`);
//         // Next state will always be the opposite
//         nextState = prevState === 'ON' ? 'OFF' : 'ON';

//         // Set the action badge to the next state
//         await chrome.action.setBadgeText({
//         tabId: tab.id,
//         text: nextState,
//         });
//         await chrome.storage.local.set({ enabled: nextState === 'ON' });

//         if (nextState === "ON") {
//           // Insert the CSS file when the user turns the extension on
//           await chrome.scripting.insertCSS({
//             files: ["focus-mode.css"],
//             target: { tabId: tab.id },
//           });
//         } else if (nextState === "OFF") {
//           // Remove the CSS file when the user turns the extension off
//           await chrome.scripting.removeCSS({
//             files: ["focus-mode.css"],
//             target: { tabId: tab.id },
//           });
//         }
//     }

// });

// // const ytShort = "https://www.youtube.com/shorts/*";

// // chrome.declarativeNetRequest.updateDynamicRules(() => {
// //   const urlFilter = "*://*.youtube.com/shorts/*";
  
// // })