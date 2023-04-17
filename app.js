//by using click  jquery mouse event
$("#clickz").click( function(){
    alert("you have clicked the button");
 
}

);
//by using double click  jquery mouse event
$("#dbclickz").dblclick( function(){
    alert("you have double clicked the button");
    $(this).hide();
}

);
//mouse enter
$("#mouseenter").mouseenter( function(){
    alert("you have  mouse entered");
    $(this).hide();
}

);
//mouse leave
$("#mouseleave").mouseleave( function(){
    alert("bye you now leaved");
   
}

);
//mouse down
$("#mousedown").mousedown( function(){
    alert("mousedown");
   
}

);
//mouseup
$("#mouseup").mouseup( function(){
    alert("mouseup");
   
}
//hover
);
$("#hover").hover( function(){
    alert("hover");
    $(this).css("background-color","red");
   
}

);

//focus
$("input").focus( function(){
    
    $(this).css("background-color","red");
   
}

);


//blur
$("#blur").blur( function(){
    
    $(this).css("background-color","green");
   
}

);


//clicked
$("#on").on( "click",function(){
    alert("clciked")
    $(this).css("background-color","red");
   
}

);


