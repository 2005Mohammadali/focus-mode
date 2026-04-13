let timeout = null;
async function removeShorts() {
    let curState = await chrome.storage.local.get({state: "on"});
    if (curState.state === "off") {
        return;
    }

    if (window.location.href.includes('/shorts/')) { 
        window.location.replace('https://www.youtube.com/'); 
        return;
    }

    if (window.location.pathname === '/results') { 
        let shortSection = document.querySelectorAll(".shortsLockupViewModelHostEndpoint")
        if (shortSection.length > 0) {
            shortSection.forEach(element => {
                const container = element.closest('grid-shelf-view-model');
                if (container) container.style.display = "none";
            });
        }
    }

    
    const embededShorts1 = document.querySelectorAll("ytd-rich-shelf-renderer[is-shorts]");
    const shortBtn = document.querySelectorAll('[aria-label="Shorts"]');
    shortBtn.forEach(btn => {
        const parent = btn.closest('ytd-guide-entry-renderer') || btn.closest('ytd-mini-guide-entry-renderer');
        if (parent) {
            parent.style.display = "none";
        }
    });

    if (embededShorts1.length > 0) {
        embededShorts1.forEach(element => {
            const container = element.closest('ytd-rich-section-renderer');
            if (container) container.style.display = "none";
        });
    }
}


async function showShorts() {
    let curState = await chrome.storage.local.get({state: "on"});
    if (curState.state === "on") {
        return;
    }
    
    if (window.location.pathname === '/results') { 
        let shortSection = document.querySelectorAll(".shortsLockupViewModelHostEndpoint")
        if (shortSection.length > 0) {
            shortSection.forEach(element => {
                const container = element.closest('grid-shelf-view-model');
                if (container) container.style.display = "";
            });
        }
    }

    const embededShorts1 = document.querySelectorAll("ytd-rich-shelf-renderer[is-shorts]");
    const shortBtn = document.querySelectorAll('[aria-label="Shorts"]');
    shortBtn.forEach(btn => {
        const parent = btn.closest('ytd-guide-entry-renderer') || btn.closest('ytd-mini-guide-entry-renderer');
        if (parent) {
            parent.style.display = "";
        }
    });

    if (embededShorts1.length > 0) {
        embededShorts1.forEach(element => {
            const container = element.closest('ytd-rich-section-renderer');
            if (container) container.style.display = "";
        });
    }
}

let observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(removeShorts, 500);
});
observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.onChanged.addListener((changes) => {
    if (changes.state) {
        if(changes.state.newValue === "off"){
            showShorts();
        }else{
            removeShorts();
        }
    }
});
