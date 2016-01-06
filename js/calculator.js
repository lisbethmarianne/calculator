$(document).ready(function() {
  // a little animation
  $('.square').mouseenter(function(){
    $(this).fadeTo('fast', 0.75);
  });
  $('.square').mouseleave(function(){
    $(this).fadeTo('fast', 1);
  });

  // store clicked numbers and add to input field
  var input = [];
  $('.number').on('click', function(){
    var number = $(this).text();
    input.push(number);
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // dot
  $('.dot').on('click', function(){
    if (!input.includes(".")) {
      input.push(".");
    }
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // +/-
  $('.minus-plus-sign').on('click', function(){
    if (input.includes("-")) {
      input.shift();
    } else {
      input.unshift("-");
    }
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // Percent
  $('.percent').on('click', function(){
    var num = Number(input.join(''))/100;
    $('.input').text(num);
    input = [num];
  });

  // clear
  $('.clear').on('click', function() {
    $('.input').empty();
    input = [];
    operation = '';
    num1 = 0;
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

  // calculate
  var calculate = function(num1, num2) {
    switch(operation) {
      case '+':
        return (num1 + num2);
        break;
      case '-':
        return (num1 - num2);
        break;
      case '×':
        return (num1 * num2);
        break;
      case '÷':
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
    input = [result];
    operation = '';
    num1 = 0;
  });
});
