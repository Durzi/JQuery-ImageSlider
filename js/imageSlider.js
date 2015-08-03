$(function() {

    var cSlide = 0;
    var left = $("#left-arrow");
    var right = $("#right-arrow");

    //Onclick right arrow
    right.bind("click", function() {

        var nSlide = cSlide + 1;

        //At end of images return to image 1
        if (cSlide == $("li").length - 1) {
            left.css("z-index", "1");
            right.css("z-index", "1");
            $("li:eq("+cSlide+")").addClass("move");
            $("li:eq(0)").addClass("active");

            setTimeout(function() {
                $("li").last().removeClass("active move");
                left.css("z-index", "");
                right.css("z-index", "");
                cSlide = 0;
            }, 700);

            return;
        }

        //Image on top moves out and behind
        left.css("z-index", "1");
        right.css("z-index", "1");
        $("li:eq("+cSlide+")").addClass("move");
        $("li:eq("+nSlide+")").addClass("next");

        setTimeout(function() {
            $("li:eq("+nSlide+")").removeClass("next").addClass("active");
            $("li:eq("+cSlide+")").removeClass("move active");
            left.css("z-index", "");
            right.css("z-index", "");
            cSlide++;
        }, 700);

    }); // End of right arrow click



    //Onclick left arrow
    left.bind("click", function() {

        var pSlide = cSlide - 1;

        // Reset counters if at beginning or end of images
        if (cSlide == 0 ) {

            cSlide = $("li").length;
            $("li:eq("+pSlide+")").addClass("move active");
            $("#left-arrow").css("z-index", "1");
            $("#right-arrow").css("z-index", "1");

            setTimeout(function() {
                $("li").first().removeClass("active");
                $("li:eq("+pSlide+")").removeClass("move");
                $("#left-arrow").css("z-index", "");
                $("#right-arrow").css("z-index", "");
                cSlide--;
            }, 700);

            return;
        }

        // Moves previous image out and back on top
        $("li:eq("+pSlide+")").addClass("move active");
        left.css("z-index", "1");
        right.css("z-index", "1");

        setTimeout(function() {
            $("li:eq("+cSlide+")").removeClass("active");
            $("li:eq("+pSlide+")").removeClass("move");
            $("#left-arrow").css("z-index", "");
            $("#right-arrow").css("z-index", "");
            cSlide--;
        }, 700);

    }); // End of left arrow click



});// End of document ready