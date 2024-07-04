var logo= document.getElementById("logo");
var sidebar=document.getElementById("sidebar");
logo.addEventListener("mouseenter", () => {
    setTimeout(() => {
        console.log("h");
        logo.style.transform="rotateZ(360deg)"
        logo.style.transitionDuration="1s";
        logo.style.transitionTimingFunction="ease-in-out";
        logo.style.transform = "";
        sidebar.style.left="0px";

    });
});


logo.addEventListener("mouseleave", () => {
    setTimeout(() => {
        logo.style.transform="rotateZ(-360deg)"
        logo.style.transitionDuration="1s";
        logo.style.transitionTimingFunction="ease-in-out";
        logo.style.transform = "";
        sidebar.style.left="-250px";
    });
});


sidebar.addEventListener("mouseenter", () => {
    setTimeout(() => {
        sidebar.style.left="0px";
    });
});
sidebar.addEventListener("mouseleave", () => {
    setTimeout(() => {
        sidebar.style.left="-250px";
    });
});