$(document).ready(function() {

 $("a").on("click", function(e){
   $("#menuPanel").fadeOut("slow", function(){
     $("#menuPanel").toggleClass("menuDeactivated");
    //  $(document.body).toggleClass("noScroll");
   });
 });

  $("#menuBtn").click(function() {
    $("#menuPanel").fadeIn("slow", function(){
      $("#menuPanel").toggleClass("menuDeactivated");
      // $(document.body).toggleClass("noScroll");
    });

  });

  $("#closeMenuBtn").click(function() {
    $("#menuPanel").fadeOut("slow", function(){
      $("#menuPanel").toggleClass("menuDeactivated");
      // $(document.body).toggleClass("noScroll");
    });
  });

});
