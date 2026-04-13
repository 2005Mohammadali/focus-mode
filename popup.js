let pillBtn = document.querySelector(".pill");
let slider = document.querySelector(".slide");

async function initialState(){
    let inState = await chrome.storage.local.get({state: "on"});
    if (inState.state === "on") {
        slider.classList.add('active');
        pillBtn.classList.add('active');
    }
}
async function toggleBtn(){
    let curState = await chrome.storage.local.get({state: "on"});
    slider.classList.toggle('active');
    pillBtn.classList.toggle('active');
    let nextState = curState.state === "on" ? "off" : "on";
    await chrome.storage.local.set({
        state: nextState
    }).then(() => {console.log("State set to", nextState)});
    
}
document.querySelector(".pill").addEventListener("click", toggleBtn);

initialState();