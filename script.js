'use strict';
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');
const login_form = document.querySelector('.loginForm');
const signup_form = document.querySelector('.signupForm');
const login_link = document.querySelector('.login-link');
const signup_link = document.querySelector('.signup-link');
const email_box = document.querySelector('.email');
const password_box = document.querySelector('.password');
const input_box = document.querySelectorAll('.input-box');
let i;
const reset = function () {
  for (i = 0; i < input_box.length; i++) {
    input_box[i].value = '';
  }
};
const login_event = function () {
  reset();
  login_form.classList.remove('hidden');
  signup_form.classList.add('hidden');
  login.classList.add('active-btn');
  signup.classList.remove('active-btn');
};
const signup_event = function () {
  reset();
  login_form.classList.add('hidden');
  signup_form.classList.remove('hidden');
  login.classList.remove('active-btn');
  signup.classList.add('active-btn');
};
login.addEventListener('click', login_event);
signup.addEventListener('click', signup_event);
login_link.addEventListener('click', login_event);
signup_link.addEventListener('click', signup_event);
