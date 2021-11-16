const outputElement = document.getElementById('password_output');
const rangeElement = document.getElementById('char_number_range');
const copyMessageElement = document.querySelector('.copy_message');


var form = document.querySelector("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function generatePassword() {
  let range = rangeElement.value;
  let randomPassword = getRandomChar(range);

  outputElement.value = String(randomPassword);
}

function getRandomChar(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function copyPassword() {
  outputElement.select();
  outputElement.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(outputElement.value);
  copyMessageElement.classList.add('copied');

  setTimeout(()=>{ copyMessageElement.classList.remove('copied') }, 2000);
} 