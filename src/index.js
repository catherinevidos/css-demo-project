import './styles/index.scss';


window.addEventListener("DOMContentLoaded", () => {
  window.onload = fadeIn; 
  // window.onbeforeunload = function () {
  //   // window.scrollTo(0, 0);
  // }
  console.log("hello");
  
  function fadeIn() {
    let fade = document.getElementById("intro-text");
    let fadeParent = document.getElementById('top-div');
    let content = document.getElementById('body-wrapper');
    let opacity = 0;
    
    
    const interval = setInterval(function() {
      if (opacity < 1) {
        opacity = opacity + 0.1
        fade.style.opacity = opacity;
      } else {
        clearInterval(interval);
        fade.remove();
        fadeParent.remove();
        content.id = 'body-wrapper-show'
      }
    }, 300);
  }

  let display = document.getElementById('highlight');
  let typing = document.getElementById('hello-world');

  display.addEventListener('mouseover', function() {
    display.style.animation = 'highlight 1.5s';
  })

  display.addEventListener('mouseout', function() {
    display.style.animation = 'none';
  })

  typing.addEventListener('mouseover', function() {
    typing.style.animation = 'type 5s steps(18) 1s infinite normal both';
    typing.textContent = 'click to stop';
  })

  typing.addEventListener('click', function() {
    typing.style.animation = 'none';
    typing.textContent = 'hover to start';
  })



  // document.getElementById('highlight-hover').addEventListener('mouseout', function(event) {
  //   event.target.id = 'highlight';
  // })

});
