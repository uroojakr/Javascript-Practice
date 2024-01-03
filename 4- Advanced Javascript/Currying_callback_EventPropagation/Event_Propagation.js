document.addEventListener("DOMContentLoaded", function () {
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");

    parent.addEventListener("click", function (event) {
        console.log("Parent Clicked (Capturing Phase)");
    }, true);

    child.addEventListener("click", function (event) {
        console.log("Child Clicked (Bubbling Phase)");
        event.stopPropagation();
    });

    document.body.addEventListener("click", function (event) {
        console.log("Document Body Clicked (Bubbling Phase)");
    });
});

