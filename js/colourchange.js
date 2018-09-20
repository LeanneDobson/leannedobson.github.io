  clicked = true;
    $(document).ready(function(){
        $("button").click(function(){
            if(clicked){
                $('header').css('background-color', '#9C27B0');
                $(this).css('color', '#9C27B0');
                clicked  = false;
            } else {
                $('header').css('background-color', '#009688');
                $(this).css('color', '#009688');
                clicked  = true;
            } 
        });
    });