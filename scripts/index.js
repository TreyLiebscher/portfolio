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

function renderProjectBox(pro){
  return `
          <div class="projectBox faded" id="project-box">
            <h2 class="projectTitle">${pro.title}</h2>
            <div class="linkBox">
              <a href=${pro.repo} target="blank" class="projectLink">Code</a>
              <a href="${pro.demo}" target="blank" class="projectLink">Live Demo</a>
            </div>
            <img src="${pro.screenshot}" class="screenshot" />
            <p class="projectText">
              ${pro.description}
            </p>
            <div class="techIcons">
              ${pro.icons.join("")}
            </div>
            <button id="info-button" class="infoButton">MORE INFO</button>
          </div>
  `
}

function handleProjectsClick(){
  $('#projectButton').on('click', (ev) => {
    ev.preventDefault();
    const renderedProjects = projects.map((project) => {
      return renderProjectBox(project);
    });
    $('#main-content').html(renderedProjects);
    
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

function portfolio(){
  $(handleContactClick);
  $(handleAboutClick);
  $(handleProjectsClick);  
}

$(portfolio);