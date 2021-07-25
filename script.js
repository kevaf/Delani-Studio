$(document).ready (function(){
   
//    WHAT WE DO 

    $("#design").click(function(){
        $('#destxt').toggle();
        $('#design').hide();
    });

    $("#destxt").click(function(){
        $('#design').toggle();
        $('#destxt').hide();
    });
    
    $("#devel").click(function(){
        $('#develtxt').toggle();
        $('#devel').hide();
    });

    $("#develtxt").click(function(){
        $('#devel').toggle();
        $('#develtxt').hide();
    });
    
    $("#product").click(function(){
        $('#producttxt').toggle();
        $('#product').hide();
    });
    
    $("#producttxt").click(function(){
        $('#product').toggle();
        $('#producttxt').hide();
    });
  


// PORTFOLIO HOVER

    $("#project1").mouseover(function(){
        $(this).css('opacity', '0.4');
        $('#p1').show();
    });
    $("#project1").mouseout(function(){
        $(this).css('opacity', '1');
        $('#p1').hide();
    });

    $("#project2").mouseover(function(){
        $(this).css('opacity', '0.4');
        $('#p2').show();
    });
    $("#project2").mouseout(function(){
        $(this).css('opacity', '1');
        $('#p2').hide();
    });
    $("#project3").mouseover(function(){
        $(this).css('opacity', '0.4');
        $('#p3').show();
    });
    $("#project3").mouseout(function(){
        $(this).css('opacity', '1');
        $('#p3').hide();
    });
    $("#project4").mouseover(function(){
        $(this).css('opacity', '0.4');
        $('#p4').show();
    });

    $("#project4").mouseout(function(){
        $(this).css('opacity', '1');
        $('#p4').hide();
    });
});