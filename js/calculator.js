$(document).ready(function() {
  // a little animation
  $('.square').mouseenter(function() {
    $(this).fadeTo('fast', 0.9);
  });
  $('.square').mouseleave(function() {
    $(this).fadeTo('fast', 1);
  });

  $('.square').on('click', function() {
    $(this).css("background", "#FEDCB6");
    setTimeout(function(){
      $('.square').css("background", "#bbb");
    }, 50);
  });

  // store last button clicked
  var lastClicked = "";
  var nowClicked = "";
  $('.square').on('click', function() {
    lastClicked = nowClicked;
    nowClicked = $(this).text();
  });

  // store clicked numbers and add to input field
  var input = [];
  $('.number').on('click', function() {
    if (lastClicked === "=") {
      input = [];
    }
    var number = $(this).text();
    input.push(number);
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // dot
  $('.dot').on('click', function() {
    if (!input.includes(".")) {
      input.push(".");
    }
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // +/-
  $('.minus-plus-sign').on('click', function() {
    if (input.includes("-")) {
      input.shift();
    } else {
      input.unshift("-");
    }
    $('.input').empty();
    $('.input').text(input.join(''));
  });

  // Percent
  $('.percent').on('click', function() {
    var num = Number(input.join('')) / 100;
    $('.input').text(num);
    input = [num];
  });

  // operations
  var chaining = [];
  $('.plus, .minus, .divide, .multiply').on('click', function() {
    var operation = $(this).text();
    var number = Number(input.join(''));
    $('.input').text(operation);

    // no number inbetween operations
    if (input.join('') === '') {
      chaining[chaining.length - 1] = operation;
    } else {
      chaining.push(number);
      chaining.push(operation);
    }
    input = [];
  });

  // calculate
  var calculate = function(num1, num2, opn) {
    switch (opn) {
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
    var result = 0;
    var number = Number(input.join(''));
    chaining.push(number);

    while (chaining.length > 1) {
      if (chaining.includes("×")) {
        var o = "×";
        var n = chaining[chaining.indexOf("×") - 1];
        var m = chaining[chaining.indexOf("×") + 1];
        chaining[chaining.indexOf("×") - 1] = calculate(n, m, o);
        chaining.splice(chaining.indexOf("×"), chaining.indexOf("×") + 1);

      } else if (chaining.includes("÷")) {
        var o = "÷";
        var n = chaining[chaining.indexOf("÷") - 1];
        var m = chaining[chaining.indexOf("÷") + 1];
        result = calculate(n, m, o);
        chaining[chaining.indexOf("÷") - 1] = result;
        chaining.splice(chaining.indexOf("÷"), chaining.indexOf("÷") + 1);

      } else {
        result = calculate(chaining[0], chaining[2], chaining[1]);
        chaining[0] = result;
        chaining.splice(1, 2);
      }
    }
    result = chaining[0];

    $('.input').text(result);
    input = [result];
    chaining = [];
  });

  // clear
  $('.clear').on('click', function() {
    $('.input').empty();
    input = [];
    chaining = [];
  });
});
