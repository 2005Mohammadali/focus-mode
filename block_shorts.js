// targets
// const embededShorts2 = document.getElementById("dismissible");

function removeShorts() {
    const embededShorts1 = document.querySelectorAll("ytd-rich-shelf-renderer[is-shorts]");
    const shortBtn = document.querySelector('[aria-label="Shorts"]');
    const shortBtnCollapsed = document.querySelector('[aria-label="Shorts"]');
    if (shortBtn){
        const elem = shortBtn.closest('ytd-guide-entry-renderer');
        if(elem){
            elem.style.display = "none";
        }
    }
    if(shortBtnCollapsed){
        const elem = shortBtnCollapsed.closest('ytd-mini-guide-entry-renderer');
        if(elem){
            elem.style.display = "none";
        }
    }
    
    if(embededShorts1.length > 0){
        embededShorts1.forEach(element => {
            const container = element.closest('ytd-rich-section-renderer');
            if (container) container.style.display = "none";
        });
    }
}

setInterval(removeShorts, 3000);