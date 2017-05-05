$(document).ready(function() {

  (function() {
    var i = 0;
    $('.titleContainer p').each(function() {
      var text = $(this).html();
      var tmp = "";

      if(text.indexOf("<img") >= 0) {
        tmp = "<span class=\"animateFall\" style=\"transition-delay:"+ i +"s \">" + text + "</span>";
      } else {
        for(var x = 0; x < text.length; x++) {
          if(text[x] == " ") {
            tmp += "<span class=\"animateFall\" style=\"margin-right:5px; transition-delay:"+ i +"s \">" + text[x] + "</span>";
          } else {
            tmp += "<span class=\"animateFall\" style=\"transition-delay:"+ i +"s \">" + text[x] + "</span>";
          }

          i += 0.1;
        }
      }

      $(this).html(tmp);

    });

    $('.test').click(function() {
      $(this).siblings('.titleContainer').addClass('animate');
    });
  })();

})
