var names = ["Brooks", "Anthony", "Natalie", "Matt", "Chris", "Charlie", "Jeremy", "Eric", "Robby", "Nathan", "Zach", "Sam", "Paul", "Liz", "Kenzie", "Amber", "Altamir", "Mark", "Joe", "Scott"];
var counter = 0;

$(document).ready(function() {
  $(".reveal").on("click", nameGenerator);
  $("#container").on("click", ".remove", deopaciate);
  $("#container").on("click", ".faded", opaciate);
});

function nameGenerator() {
  console.log("click");
  if(counter < names.length) {
    newDiv(names[counter]);
    counter++;
  } else if (counter == names.length){
    $(".reveal").text("Remove all victims and begin adding again!");
    counter = "full";
  } else if (counter == "full"){
    removeAll();
  }
};
function newDiv(name) {
  $("#container").append("<div class='person'></div>");
  var $el = $("#container").children().last();
  $el.append("<p>" + name + "</p>");
  $el.append("<button class='remove'>End the Suffering</button>")
  slideDown($el);
};
function slideDown(name) {
  $(name).hide().slideDown();
};
function fadeOut() {
  $(this).parent().fadeOut();
};
function deopaciate() {
  $(this).parent().animate({opacity: 0.05}, 200);
  $(this).addClass("faded");
}
function opaciate() {
  $(this).parent().animate({opacity: 1}, 200);
  $(this).removeClass("faded");
}
function removeAll() {
  $(".reveal").text("Reveal next victim of Prime suffering....");
  $("#container").children().fadeOut()
  counter = 0;
}
