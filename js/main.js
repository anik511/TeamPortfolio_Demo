$(document).ready(function() {
   //sticky menu
   $(".js--services-section").waypoint(function(direction){
      if(direction == "down"){
         $("nav").addClass("sticky");
      }else{
         $("nav").removeClass("sticky");
      }
   });
   // actve nav
   $("nav ul li a").click(function(){
      $("nav ul li a").removeClass("active");
      $(this).addClass("active");
      console.log("add");
   });
   $("nav div a img.log").click(function(){
      $("nav ul li a").removeClass("active");
      $("nav ul li:first-child a").addClass("active");
   });

   
   //mixitup
   var mixer = mixitup('.container'); 
});


// var ul = document.getElementById("myUl");
// var a = ul.getElementsByTagName("a");
// for (var i = 0; i < a.length; i++) {
//   a[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   console.log("hi");
//   });
// }



function toggleBar() {
   document.getElementById('sideNav').style.width = "100%";
};
function closeNav() {
   document.getElementById('sideNav').style.width = "0%";
}

