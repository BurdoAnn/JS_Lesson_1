function myFunction() {
    document.getElementById("innerHTML_demo").innerHTML = "Changed!";
}

function myFunction1() {
    alert(document.getElementById("innerHTML_demo1").innerHTML);
}

function myFunction2() {
    document.getElementById("Click").innerHTML = "";
}

function myFunction() {
    document.getElementById("AnchorChange").innerHTML = "bogotobogo.com";
    document.getElementById("AnchorChange").href = "http://www.bogotobogo.com";
    document.getElementById("AnchorChange").target = "_blank";
}