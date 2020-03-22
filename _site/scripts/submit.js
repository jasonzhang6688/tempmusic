// Script for submitting

const submitForm = document.querySelector("#submit-form");
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const titleI = submitForm["submit-title"].value;
    const composerI = submitForm["submit-composer"].value;
    const dateI = new Date();
    const linkI = "/pdf-name";
    //var storageRef = firebase.storage().ref();
    //const scoreRef = storageRef.child('file.jpg');//that's a lot of work still to do
    
    db.collection("scores").add({
        title: titleI,
        composer: composerI,
        date: dateI,
        link: linkI
    })
    .then(function(docRef) {
        submitForm.reset();
        console.log(docRef.id); // we should use this is as the (perma)link
    })
    .catch(e => console.log(e.message))
})