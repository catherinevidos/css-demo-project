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
        fadeParent.remove()
        content.id = 'body-wrapper-show';
        // content.style.
      }
    }, 300);
  }

  let display = document.getElementById('highlight');
  let typing = document.getElementById('hello-world');
  let image = document.getElementsByClassName('container');

  display.addEventListener('mouseover', function() {
    display.style.animation = 'highlight 1.5s';
  })

  display.addEventListener('mouseout', function() {
    display.style.animation = 'highlight-away .6s 1 linear';
  })

  typing.addEventListener('mouseover', function() {
    typing.style.animation = 'type 5s steps(18) 1s infinite normal both';
    typing.textContent = 'click to stop';
  })

  typing.addEventListener('click', function() {
    typing.style.animation = 'none';
    typing.textContent = 'hover to start';
  })

  image[0].addEventListener('click', function() {
    let body = document.getElementsByTagName('BODY')[0];
    image[0].style.height = '100%';
    // body.style.background = 'background: rgba(0, 0, 0, 0.6)';
    body.style.backgroundColor = 'blue';
  })

  // document.getElementById('highlight-hover').addEventListener('mouseout', function(event) {
  //   event.target.id = 'highlight';
  // })

});
