 $("#pirate").hide();

$(".yellow").click(function(){
    $(".hidden").text("Now double click on me!");
 });
 
 $(".hidden").dblclick(function(){
    $(".hidden").text("Hover over the treasure");
    $("#pirate").show();
    $("img").html("<img class='img2' src='https://irp-cdn.multiscreensite.com/c3c96d3d/dms3rep/multi/thumbnail/piratewithpolly.png");
    $(".yellow").hide();
    $(".hiddem").hide();
    
 });
 
 $("#bricks").mouseenter(function(){
    $("img").hide();
 });
 