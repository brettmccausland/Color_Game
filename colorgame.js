
var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(255, 0, 0)",
"rgb(255, 0, 0)",
"rgb(255, 0, 255)"
]

var squares= document.querySelectorAll(".square");
var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent=pickedColor;

for(var i= 0;i<squares.length;i++)
{
  // add initial colors to the squares
  squares[i].style.background=colors[i];
  // add click listners to the squares
  squares[i].addEventlistner("click", function(){
    var ClickedColor=this.style.background;

    if(clickedColor===pickedColor)
    {
      alert("correct!");
    }
    else
    {
      alert("Wrong");
    }

  });
}
