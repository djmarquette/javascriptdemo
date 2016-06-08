function minFunction() {
    var a = Math.min(5, 10);
    var b = Math.min(0, 150, 30, 20, 38);
    var c = Math.min(-5, 10);
    var d = Math.min(-5, -10);
    var e = Math.min(1.5, 2.5);

    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("output").innerHTML = x;
}