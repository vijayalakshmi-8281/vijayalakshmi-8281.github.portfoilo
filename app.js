// contact section
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwrqalM0jWtBytNnYmrNdyxC9IjPgFLKxCW5VBOxOnhCZBubTPru374W-5vnA6HPMH-fA/exec';
    const form = document.forms['submit-to-google-sheet'];
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            console.log('Success!', response);
            alert('Successfully Submitted!!'); 
            form.reset();
          })
          .catch(error => console.error('Error!', error.message));
      });
    } else {
      console.error('Form not found');
    }
  });
  //media home section
  document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.home-right');
    const openBtn = document.getElementById('openbtn');
    const closeBtn = document.getElementById('closebtn');
    const image=document.querySelector(".img1");
    const img=document.querySelector(".img");
    closeBtn.style.display = 'none';
    // Function to open the menu
     openBtn.onclick = function() {
     menu.style.right = '0';
     openBtn.style.display = 'none'; 
     closeBtn.style.display = 'inline'; 
     if (img) {
         image.removeChild(img);
     }

 };
    // Function to close the menu
     closeBtn.onclick = function() {
     menu.style.right = '-250px'; 
     openBtn.style.display = 'inline';
     closeBtn.style.display = 'none';
     if (img && !document.querySelector('.img1 .img')) {
         image.appendChild(img);
     }
    
 };
});