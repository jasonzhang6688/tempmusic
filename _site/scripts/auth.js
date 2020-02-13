// Script for Logging in and Signing Up
// TODO: remove preventDefault after done

// Signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        signupForm.reset();
    })
    .catch(e => console.log(e.message))
})

// Login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();
    })
    .catch(e => console.log(e.message));
    
})


