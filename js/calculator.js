$(document).ready(function() {
  // initial grid (9 divs)
  var squares = [];
  for (i = 0; i <= 9; i++) {
    var j = 9 - i;
    squares.push('<div class="square number ' + j + '">' + j + '</div>');
  }
  squares.push('<div class="square dot">.</div>');
  squares.push('<div class="square minus-plus-sign">-/+</div>');
  $('.container').append(squares.join(''));

  // store clicked numbers/dot and add to input field
  var input = [];
  $('.number, .dot').on('click', function(){    // edit this to add only one dot
    var number = $(this).text();
    input.push(number);
    $('.input').empty();
    $('.input').append(input.join(''));
  });
});
