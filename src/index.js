import './styles/index.scss';
import './styles/reset.scss';
import './styles/demo1.scss';
import './styles/demo2.scss';


window.addEventListener("DOMContentLoaded", () => {
  window.onload = fadeIn; 
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
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
    }, 200);
  }

  
});
