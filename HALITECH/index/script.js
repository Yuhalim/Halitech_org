var name = document.getElementById("name");
var button = document.getElementById("button");
button.addEventListener("click", function(){
    var name = document.getElementById("name");
    var message = name.value;
    alert("Thank you "+message+ ", you have successfully contacted us and will be responded to in due time");
    name.value="";
})