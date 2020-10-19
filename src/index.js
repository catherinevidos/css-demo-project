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

  let image1 = document.getElementById('container1');
  let image2 = document.getElementById('container2');
  let image3 = document.getElementById('container3');
  let header = document.getElementById('button-demos-tooltip');
  let span1 = document.getElementById('image1-span');
  let span2 = document.getElementById('image2-span');
  let span3 = document.getElementById('image3-span');
  let x = document.getElementById('x-button');
 

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
  // function resetWidths() {
  //   if (image1.style.width === '50%') {
  //     image2.style.width = '30%';
  //     image3.style.width = '30%';
  //   } else if (image2.style.width === '50%') {
  //     image1.style.width = '30%';
  //     image3.style.width = '30%';
  //   } else if (image3.style.width === '50%') {
  //     image2.style.width = '30%';
  //     image1.style.width = '30%';
  //   } 
  // }

  document.body.parentNode.addEventListener('click', function(event) {
    event.preventDefault();
    if (image1.contains(event.target)) {
      image1.style.animation = 'resize 1s linear forwards';
      image2.style.animation = 'resizeBack 1s linear forwards';
      image3.style.animation = 'resizeBack 1s linear forwards';
      header.style.opacity = 0;
      span1.style.opacity = 0;
      span2.style.opacity = 0;
      span3.style.opacity = 0;

    } else if (image2.contains(event.target)) {
      image2.style.animation = 'resize 1s linear forwards';
      image1.style.animation = 'resizeBack 1s linear forwards';
      image3.style.animation = 'resizeBack 1s linear forwards';
      header.style.opacity = 0;
      span1.style.opacity = 0;
      span2.style.opacity = 0;
      span3.style.opacity = 0;
    } else if (image3.contains(event.target)){
      image3.style.animation = 'resize 1s linear forwards';
      image2.style.animation = 'resizeBack 1s linear forwards';
      image1.style.animation = 'resizeBack 1s linear forwards';
      header.style.opacity = 0;
      span1.style.opacity = 0;
      span2.style.opacity = 0;
      span3.style.opacity = 0;
    } else {
      image1.style.animation = 'resizeBack 1s linear forwards';
      image2.style.animation = 'resizeBack 1s linear forwards';
      image3.style.animation = 'resizeBack 1s linear forwards';
      header.style.opacity = 1;
      span1.style.opacity = '';
      span2.style.opacity = '';
      span3.style.opacity = '';
    }
  })

  image1.addEventListener('mouseover', function() {
    span1.textContent = 'serene ferry ride';
  })

  image1.addEventListener('mouseout', function() {
    span1.textContent = 'hover or click me';
  })

  image2.addEventListener('mouseover', function() {
    span2.style.opacity = 0;
  })

  // span1.addEventListener('mouseover', function() {
  //   span1.style.height = '50%';
  // })

  // span1.addEventListener('mouseout', function() {
  //   span1.style.height = '';
  // })

  // image1.addEventListener('click', function() {
  //     image1.style.animation = 'resize 1s linear forwards';
  //     image2.style.animation = 'resizeBack 1s linear forwards';
  //     image3.style.animation = 'resizeBack 1s linear forwards';

  //     // window.scrollTo(0, document.body.scrollHeight)
  //     x.id = 'x-button-show';
  // });

  // image2.addEventListener('click', function() {
  //     image2.style.animation = 'resize 1s linear forwards';
  //     image1.style.animation = 'resizeBack 1s linear forwards';
  //     image3.style.animation = 'resizeBack 1s linear forwards';
  //     x.id = 'x-button-show';
  // })

  // image3.addEventListener('click', function() {
  //     image3.style.animation = 'resize 1s linear forwards';
  //     image1.style.animation = 'resizeBack 1s linear forwards';
  //     image2.style.animation = 'resizeBack 1s linear forwards';
  //     x.id = 'x-button-show';
  // })

  // x.addEventListener('click', function() {
  //   image1.style.animation = 'resizeBack 1s linear forwards';
  //   image2.style.animation = 'resizeBack 1s linear forwards';
  //   image3.style.animation = 'resizeBack 1s linear forwards';
  //   x.id = 'x-button';
  // })
  

  // document.getElementById('highlight-hover').addEventListener('mouseout', function(event) {
  //   event.target.id = 'highlight';
  // })

});
