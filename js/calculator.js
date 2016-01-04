$(document).ready(function() {
  // numbers (0 - 9, ., -/+)
  var numbers = [];
  for (i = 0; i <= 9; i++) {
    var j = 9 - i;
    numbers.push('<div class="square number ' + j + '">' + j + '</div>');
  }
  numbers.push('<div class="square dot">.</div>');
  numbers.push('<div class="square minus-plus-sign">-/+</div>');
  $('.numbers').append(numbers.join(''));

  // store clicked numbers/dot and add to input field
  var input = [];
  $('.number, .dot').on('click', function(){    // edit this to add only one dot
    var number = $(this).text();
    input.push(number);
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // operations
  var num1 = 0;
  var operation = '';
  $('.plus, .minus, .divide, .multiply').on('click', function(){    // edit this to add only one dot
    operation = $(this).text();
    num1 = Number(input.join(''));
    $('.input').text(operation);
    input = [];
  });

  // clear
  $('.clear').on('click', function() {
    $('.input').empty();
    input = [];
    operation = '';
    num1 = 0;
  });

  // calculate
  var calculate = function(num1, num2) {
    switch(operation) {
      case '+':
        return (num1 + num2);
        break;
      case '-':
        return (num1 - num2);
        break;
      case '*':
        return (num1 * num2);
        break;
      case '/':
        return (num1 / num2);
        break;
      default:
        return ('Error')
    }
  };

  $('.equal').on('click', function() {
    var num2 = Number(input.join(''));
    var result = calculate(num1, num2);
    $('.input').text(result);
  });
});
