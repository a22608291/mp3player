$(document).ready(function () {
  $(".songList td").click(function () {
    $(this).toggleClass('active');

    // if ($(this).hasClass('active')) {
    //   $(this).find('.pause').fadeOut();
    //   $(this).find('.play').fadeIn();
    //   $(this).removeClass('active');

    // } else {
    //   $(this).find('.play').fadeOut();
    //   $(this).find('.pause').fadeIn();
    //   $(this).addClass('active');

    //下列是if跟else的find以外其他四種用法
    // $(this).children()
    // $(this).sibrings()
    // $(this).parent()
    // $(this).parents('.softface')

  });
});



