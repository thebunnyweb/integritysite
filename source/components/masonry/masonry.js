module.exports = function() {


    $(".showcase_images").slick({
        nextArrow: "<i class='fa fa-chevron-right next'></i>",
        prevArrow: "<i class='fa fa-chevron-left prev'></i>",
        onAfterChange: function(slide, index) {
            console.log($(slide.$slides.get(index)).attr('id'))
        }
    })

    $('#showcase').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var elSlide = $(slick.$slides[currentSlide]);
        var index = elSlide.data('index');
        console.log(index);
      
        if (index == 1) {

            $(".showcase_names ul li p").removeClass('active_hover');
            $(".showcase_names ul li[data-index='1'] p").addClass('active_hover');

        }else if (index == 2) {
            $(".showcase_names ul li p").removeClass('active_hover');
            $(".showcase_names ul li[data-index='2'] p").addClass('active_hover');
        }else if (index == 3) {
            $(".showcase_names ul li p").removeClass('active_hover');
            $(".showcase_names ul li[data-index='3'] p").addClass('active_hover');
        }else if (index == 4) {
            $(".showcase_names ul li p").removeClass('active_hover');
            $(".showcase_names ul li[data-index='4'] p").addClass('active_hover');
        }else if (index == 5) {
            $(".showcase_names ul li p").removeClass('active_hover');
            $(".showcase_names ul li[data-index='5'] p").addClass('active_hover');
        }else{
        	$(".showcase_names ul li p").removeClass('active_hover');
        }
    });
}
