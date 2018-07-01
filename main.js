document.getElementById("list").addEventListener("click", function(e) {
    //if (e.target && e.target.nodeName == "A") {
    //    console.log("List item ", e.target.textContent, " was clicked!");
    //}
    console.log(e.currentTarget);
    console.log(e.target);
});