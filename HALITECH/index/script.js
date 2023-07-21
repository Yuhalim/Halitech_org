// var name = document.getElementById("name");
// var button = document.getElementById("button");
// button.addEventListener("click", function(){
//     var name = document.getElementById("name");
//     var message = name.value;
//     alert("Thank you "+message+ ", you have successfully contacted us and will be responded to in due time");
//     name.value="";
// })

var img=document.getElementById('img');
var slides = ["images/images1.jpg", "images/images2.jpg", "images/images3.jpg"];
var start = 0;

function slider(){
    if(start<slides.length){
        start=start+1;
    }
    else{
        start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[start-1]+">";

}
setinterval(slider, 2000);

