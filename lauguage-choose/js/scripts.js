$(document).ready(function() {
  $("form#code").submit(function() {
    event.preventDefault();
    const name = $("#name").val();
    const stack = $("#stack").val();
    const pina = parseInt($('input[name="pina"]:checked').val());
    const rain = parseInt($('input[name="rain"]:checked').val());
    const yoga = parseInt($('input[name="yoga"]:checked').val());
    const champagne = parseInt($('input[name="champagne"]:checked').val());
    const result = pina + rain + yoga + champagne;

    $(".name").text(name);
    $(".stack").text(stack);
    
    if (result === 4) {
      $("#js").show();
      $("#swift").hide();
      $("#java").hide();
      $("#scala").hide();
    }
    else if (result > 4 && result <= 7) {
      $("#swift").show();
      $("#java").hide();
      $("#scala").hide();
      $("#js").hide();
    }
    else if (result > 7 && result <= 9) {
      $("#java").show();
      $("#scala").hide();
      $("#js").hide();
      $("#swift").hide();
    }
    else {
      $("#scala").show();
      $("#js").hide();
      $("#swift").hide();
      $("#java").hide();
    }
  });
});