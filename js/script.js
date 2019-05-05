function validateAll(){
  validateName();
  validateEmail();
  validatePhone();
}

function validateName() {
  let name = document.getElementById('name').value;
  if (name.length < 3) {
    alert('Слишком короткое фамилия и имя!');
  } else
  if (name.length > 25) {
    alert('Слишком длинное фамилия и имя!');
  } else
  if (name.indexOf(' ') == -1){
    alert('Укажите фамилию и имя!');
  }
}

function validateEmail() {
  let email = document.getElementById('email').value;
  if (email.indexOf('@') == -1){
    alert('Укажите правильную почту!');
  } else
  if (email.indexOf('.') == -1){
    alert('Укажите правильную почту!');
  }
}

function validatePhone() {
  let phone = document.getElementById('phone').value;
  if (phone.match(/^[\+\d]?(?:[\d-.\s()]*)$/) == null) {
    alert('Укажите корректный номер телефона!');
  } else
  if (phone.length < 7) {
    alert('Укажите корректный номер телефона!');
  }
}

window.addEventListener('load',function(){
  document.getElementById ("submit").addEventListener ("click", validateAll, false);
});