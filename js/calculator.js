$(document).ready(function() {
  // initial grid (9 divs)
  var squares = [];
  for (i = 0; i <= 9; i++) {
    var j = 9 - i;
    squares.push('<div class="square ' + j + '">' + j + '</div>');
  }
  squares.push('<div class="square comma">,</div>');
  squares.push('<div class="square minus-plus-sign">-/+</div>');
  $('.container').append(squares.join(''));
});
