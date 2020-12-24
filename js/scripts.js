var elForm = document.querySelector('.js-form');
var elInputs = document.querySelectorAll('.js-input');
var elNumberInput = document.querySelector('.js-input-number');
var elOutput = document.querySelector('.js-output');


elInputs.forEach(function(elInput) {
  elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();


    elOutput.classList.add('px-3','py-4','rounded');
    var contactOutput = document.createElement('p');
    contactOutput.classList.add('h5','text-secondary');
    contactOutput.textContent = elInput.value;

    elOutput.appendChild(contactOutput);
  });
});

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var telNumber = elNumberInput.value;

  var linkNumber = document.createElement('a');
  linkNumber.classList.add('h4','text-info');
  linkNumber.href = `tel: ${telNumber}`;
  linkNumber.textContent = telNumber;

  elOutput.appendChild(linkNumber);
});