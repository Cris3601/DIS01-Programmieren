document.addEventListener("DOMContentLoaded", function () {

  document.querySelector('#button1').addEventListener('click',showHide);
  document.querySelector('#button2').addEventListener('click',showHide);

  function showHide(event){ 
    event.target.parentNode.classList.toggle('hide');
    let text = event.target.firstChild;
    text.data = text.data == 'mehr' ? 'weniger' : 'mehr';
  }
});

