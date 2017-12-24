$(function () {
    var lightMode = $("#white").click(mode(1));
    var darkMode = $("#dark").click(mode(0));
    function mode(a) {
        if (a > 0) {
            alert("light");
        } else {
            alert("dark");
        }
    }
});