
// Track game
let time;
let score = 0;
let currIndex = 0;

// Get DOM elements
let intro_container = document.querySelector(".intro-container");
let intro_play_btn = intro_container.querySelector("a");

let game_container = document.querySelector(".game-container");
let game_image = game_container.querySelector(".game-image");
let game_shades = game_container.querySelectorAll(".shade");
let game_option_1 = game_container.querySelector("#option-1");
let game_option_2 = game_container.querySelector("#option-2");
let game_option_3 = game_container.querySelector("#option-3");
let game_option_4 = game_container.querySelector("#option-4");

let results_container = document.querySelector(".results-container");

// When play button clicked, hide intro screen and show game screen
intro_play_btn.onclick = e => {
  intro_container.classList.add("hide");
  game_container.classList.remove("end");
  askQuestion()
}

function askQuestion(){

  // CHECK FOR END OF GAME
  if ( currIndex >= actors.length )
  {
    game_container.classList.add("end"); // Hide game container
    results_container.classList.remove("hide") //  Show results container

  }
  let question = actors[currIndex];

  // SETUP QUESTION VARIABLES
  game_image.style.backgroundImage = `url(${question.image})`;
  game_option_1.innerHTML = question.options[0];
  game_option_2.innerHTML = question.options[1];
  game_option_3.innerHTML = question.options[2];
  game_option_4.innerHTML = question.options[3];

  // LISTEN FOR CLICK
  game_container.querySelectorAll(".option").forEach(el => {
    el.onclick = e => {
      if ( e.target.innerHTML === question.answer ){
        currIndex++;
        score++;
        askQuestion();
      } else {
        currIndex++;
        if ( score > 0 ){
          score--;
        }
        askQuestion();
      }
    }
  });

}