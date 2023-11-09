(function ($) {
  "use strict";

  var year = 2023;
  var month = 10;
  var date = 6;
  var time =12;

  month = month - 1;
  jQuery(function () {
    jQuery("#defaultCountdown").countdown({
      until: new Date(year, month, date, time),
    });
  });
})(jQuery);
