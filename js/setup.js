'use strict';
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length - 1));
  return array[randomIndex];
};

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});


var setupSubmitButton = document.querySelector('.setup-submit');
var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    if (userNameInput.setCustomValidity('')) {
      setupSubmitButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        var form = document.querySelector('form');
        form.post();
      });
    }
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var coatColorButton = setupWizard.querySelector('.wizard-coat');
var eyesColorButton = setupWizard.querySelector('.wizard-eyes');
var setupFireballButton = document.querySelector('.setup-fireball-wrap');


coatColorButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  var coatColor = document.querySelector('input[name="coat-color"]');
  coatColor.value = getRandomElement(wizardCoatColors);
  coatColorButton.style.fill = getRandomElement(wizardCoatColors);
});

eyesColorButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  var eyesColor = document.querySelector('input[name="eyes-color"]');
  eyesColor.value = getRandomElement(wizardEyesColors);
  eyesColorButton.style.fill = getRandomElement(wizardEyesColors);


});
setupFireballButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  var fireballColor = document.querySelector('input[name="fireball-color"]');

  fireballColor.value = getRandomElement(wizardFireballColors);
  setupFireballButton.style.fill = getRandomElement(wizardFireballColors);

});


