
$(document).ready(function(){
    $(function (){
        $(document).on('click', '.burger', function(){
            $(this).toggleClass('active');
        });
    })
    $('.menu__link').click(function(){
        var tab_id = $(this).attr('data-menu');

        $('.menu__item').removeClass('current');
        $('.burger').removeClass('active');
        $('.main-content').removeClass('current');

        $(this).parent().addClass('current');
        $("#"+tab_id).addClass('current');
    })

})
$(function (){
    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            // on focus add cladd active to label
            $this.focus(function(){
                $this.next().addClass("active");
            });
            //on blur check field and remove class if needed
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass("active");
                }
            });
        });
    }
    floatLabel(".floatLabel");

})