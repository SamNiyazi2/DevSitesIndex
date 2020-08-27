// 08/26/2020 07:27 pm - SSN - [20200826-1927] - [001] - Format textarea for edit
var TextArea_util_0718;
(function (TextArea_util_0718) {
    var doSetup = function () {
        $(function () {
            $('[ssn_FitInScreen]').on('click', function (e) {
                var textAreaID = $(this).attr('ssn_FitInScreen');
                var $ta = $("#" + textAreaID);
                var ta_position = $($ta).position();
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                var screenWidth = screen.width;
                var screenHeight = screen.height;
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();
                var offset = $ta.offset();
                var ta_width = $ta.width();
                var ta_height = $ta.height();
                $ta.width(windowWidth - ((ta_position.left + offset.left) * 2));
                $ta.height(windowHeight - 100);
                ta_width = $ta.width();
                ta_height = $ta.height();
                //console.log("20200826-1941 - TextArea_util_0718 - B");
                //console.log('textAreaID [' + textAreaID + ']');
                //console.log('ta_position', ta_position);
                //console.log('scrollTop [' + scrollTop + ']');
                //console.log('scrollLeft  [' + scrollLeft + ']');
                //console.log('screenWidth [' + screenWidth + ']');
                //console.log('screenHeight [' + screenHeight + ']');
                //console.log('windowWidth  [' + windowWidth + ']');
                //console.log('windowHeight  [' + windowHeight + ']');
                //console.log('offset top [' + offset.top + ']')
                //console.log('offset left [' + offset.left + ']')
                //console.log('ta_width [' + ta_width + ']');
                //console.log('ta_height [' + ta_height + ']');
                //console.log('ta_width [' + ta_width + ']');
                //console.log('ta_height [' + ta_height + ']');
                $('html, body').animate({
                    scrollTop: offset.top - 80,
                }, 1000);
            });
        });
    };
    $(function () {
        console.log('TextArea_util_0718 running doSetup');
        doSetup();
    });
})(TextArea_util_0718 || (TextArea_util_0718 = {}));
export { TextArea_util_0718 };
//# sourceMappingURL=TextArea_util_0718.js.map