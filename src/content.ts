const pres = document.querySelectorAll("pre");

if (pres.length > 0) {
    pres.forEach(pre => {
        const newElement = document.createElement("div");
        newElement.className = pre.className.replace("short-text", "")
        newElement.innerHTML = pre.innerHTML.replace(/(?:\r\n|\r|\n)/g, "<br/>")
        pre.replaceWith(newElement);
    })

    const showMoreToggles = document.querySelectorAll(".show-more")
    showMoreToggles.forEach(toggle => toggle.remove())
}
