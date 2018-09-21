    var color = 1;

    $(document).ready(function(){
        $("button").click(function(){     
            if (color === 1) {
                $('header').css('background-color', '#9C27B0');
                $(this).css('color', '#9C27B0');
                color = 2;
            }  else if (color === 2) {
                $('header').css('background-color', '#009688');
                $(this).css('color', '#009688');
                color = 3;
            } else {
                $('header').css('background-color', '#ef3340');
                $(this).css('color', '#ef3340');
                color = 1;
            }
        });
    });


