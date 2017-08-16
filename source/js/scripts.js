var drake = dragula({
  isContainer: function (el) {
    return el.classList.contains('dragula-container');
  }
});

$(document).ready(function () {
  
  var budget = 10000;
  var spending = [];
  var spent = 0;
  var total = budget;
  
  var myPrice = 0;

  $('#budget').text('$ ' + total);

  $('.dragula-container').bind('DOMNodeInserted', function() {
    var tempSpending = [];

    $('.pb-yes').children('.item').each(function (i) {
      
      myPrice = parseInt($(this).attr('data-item'));
      tempSpending.push(myPrice);
    });

    spent = 0;

    for (i in tempSpending) {
      spent += tempSpending[i];
    }


    total = budget - spent

    // console.log('budget = ' + budget);
    console.log(tempSpending[i]);
    console.log('total = ' + total);
    console.log('spending = ' + spending);
    console.log('temp = ' + tempSpending);
    
    $('#budget').text('$ ' + total);

    if (total < 0) {
      $('.budget-dashboard').addClass('over-budget');
    } else {
      $('.budget-dashboard').removeClass('over-budget');
    }
  });

  $('.item').click(function(){
    var id = $(this).attr('data-id');

    $('#modal-' + id).addClass('is-active');
    $('.modal-wrapper').addClass('is-active');
  });

  $('.modal-wrapper').click(function(){
    $('.modal-wrapper').removeClass('is-active');
    $('.modal').removeClass('is-active');

  });

  

}); // doc.ready
