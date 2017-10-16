/**
 * To move around the image on click.
 */
(function () {
    "use strict";

    var element = document.getElementById("image");

    element.addEventListener("click", function() {
        var move = 20;
        var style = window.getComputedStyle(element);
        var left = parseInt(style.left, 10);
        var top  = parseInt(style.top, 10);

        left += move * (Math.random() > 0.5 ? 1 : -1);
        top  += move * (Math.random() > 0.5 ? 1 : -1);

        element.style.left = left + "px";
        element.style.top  = top + "px";

        console.log("Image was clicked");
        console.log("Left: " + left);
        console.log("Top: " + top);
    });
}());
