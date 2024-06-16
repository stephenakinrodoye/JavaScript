
function toggle(firstButton, secondButton, thirdButton) {
  let button = document.querySelector(firstButton);
  let button2 = document.querySelector(secondButton);
  let button3 = document.querySelector(thirdButton);

  if (!button.classList.contains('is-toggled')) {
    button.classList.add('is-toggled');
    button2.classList.remove('is-toggled');
    button3.classList.remove('is-toggled'); 
  } else {
    button.classList.remove('is-toggled');
  }
}