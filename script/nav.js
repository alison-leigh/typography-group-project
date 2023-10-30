function loadNavbar() {
    console.log('loading navbar'); // debug
    fetch('template/nav.html')
        .then(res => res.text())
        .then(text => {
            let placeholder = document.querySelector("div#navigation");
            let output = document.createElement("div");
            output.innerHTML = text;
            placeholder.parentNode.replaceChild(output, placeholder);
        });
}
// type: "pageshow" didnt work
window.addEventListener("load", function(event) {
    console.log('Page show event triggered.'); // Debugging log
    if (event.persisted) {
        loadNavbar();
    }
});

loadNavbar();
