'use strict';

function handleContactClick(){
  $('#contactButton').on('click', (ev) => {
    ev.preventDefault();
    
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    
    const glowAnimation = new Promise((res, rej) => {
      setTimeout(() => {
      res($('.contactBox').toggleClass('glow'));
      }, 200);
      setTimeout(() => {
        res($('.contactBox').toggleClass('glow'));
      }, 1000);
    });
    
    const contactGlow = new Promise((res, rej) => {
      setTimeout(() => {
        res($('.contact').toggleClass('glow'));
      }, 800);
      setTimeout(() => {
        res($('.contact').toggleClass('glow'));
      }, 1600);
    });
    
  });
}



function handleProjectsClick(){
  $('#projectButton').on('click', (ev) => {
    ev.preventDefault();

    $('#main-content').html(renderedProjects);
    if($('#siteBody').hasClass('coral')){
      backgroundSwap();  
    }
    
    const projectFadeIn = new Promise((res, rej) => {
      setTimeout(() => {
        res($('.projectBox').toggleClass('faded'));
      }, 100);
    });
    
  })
}

function handleAboutClick(){
  $('#aboutButton').on('click', (ev) => {
    ev.preventDefault();
    $('#main-content').html(aboutMe);

    const aboutFadeIn = new Promise((res, rej) => {
      setTimeout(() => {
        res($('.aboutMeHolder').toggleClass('faded'));
      }, 100);
    });
  });
}

function backgroundSwap(){
  $("html, body").animate({ scrollTop: 0 }, "fast");
  $('#siteBody').toggleClass('sea');
  $('#siteBody').toggleClass('coral');  
}

function infoFade(){
  const projectFadeIn = new Promise((res, rej) => {
    setTimeout(() => {
      res($('.infoContainer').toggleClass('faded'));
    }, 100);
  });
}

function infoGlow(){
  const glowAnimation = new Promise((res, rej) => {
    setTimeout(() => {
    res($('.infoTitle').toggleClass('glow'));
    }, 400);
    setTimeout(() => {
      res($('.infoTitle').toggleClass('glow'));
    }, 1600);
  });
}


function handleFirstProject(){
  $('#main-content').on('click', 'button#elevationVisualizer', (ev) => {
    backgroundSwap();
    infoFade();
    infoGlow();
    $('#main-content').html(elevationVisualizerInfo)
  });
}

function handleSecondProject(){
  $('#main-content').on('click', 'button#storyBank', (ev) => {
    backgroundSwap();
    $('#main-content').html(elevationVisualizerInfo)
  });
}

function handleThirdProject(){
  $('#main-content').on('click', 'button#movieHelix', (ev) => {
    backgroundSwap();
    $('#main-content').html(elevationVisualizerInfo)
  });
}

function handleBackClick(){
  $('#main-content').on('click', 'button#back', (ev) => {
    ev.preventDefault();
    $('#siteBody').toggleClass('sea');
    $('#siteBody').toggleClass('coral');
    $('#main-content').html(renderedProjects);
    
    const projectFadeIn = new Promise((res, rej) => {
      setTimeout(() => {
        res($('.projectBox').toggleClass('faded'));
      }, 100);
    });
    console.log('kiwi test')
  });
}

function portfolio(){
  $(handleContactClick);
  $(handleAboutClick);
  $(handleProjectsClick);
  $(handleFirstProject);
  $(handleBackClick);  
}

$(portfolio);