'use strict';

function handleAboutClick() {
  $('#aboutButton').on('click', (ev) => {
    ev.preventDefault();
    $('#main-content').html(aboutMe);
    $('#siteBody').attr('background-state') === 'coral' ? changeBackground('#siteBody', 'coral', 'sea') : null;
    fade('.aboutMeHolder', 100);
  });
}

function handleContactClick() {
  $('#contactButton').on('click', (ev) => {
    ev.preventDefault();
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 'slow');
    glow('.contactBox', 200, 1000);
    glow('.contact', 800, 1600);
  });
}

function handleProjectsClick() {
  $('#projectButton').on('click', (ev) => {
    ev.preventDefault();
    $('#main-content').html(renderedProjects);
    $('#siteBody').attr('background-state') === 'coral' ? changeBackground('#siteBody', 'coral', 'sea') : null;
    fade('.projectBox', 100);
  });
}

function moreInfo(project) {
  changeBackground('#siteBody', 'sea', 'coral');
  glow('.infoTitle', 400, 1600);
  $('#main-content').html(project);
  fade('.infoContainer', 100);
}

function handleFirstProject() {
  $('#main-content').on('click', 'button#elevationVisualizer', (ev) => {
    moreInfo(elevationVisualizerInfo)
  });
}

function handleSecondProject() {
  $('#main-content').on('click', 'button#storyBank', (ev) => {
    moreInfo(storyBankInfo);
  });
}

function handleThirdProject() {
  $('#main-content').on('click', 'button#movieHelix', (ev) => {
    moreInfo(movieHelixInfo);
  });
}

function handleBackClick() {
  $('#main-content').on('click', 'button#back', (ev) => {
    ev.preventDefault();
    changeBackground('#siteBody', 'coral', 'sea');
    $('#main-content').html(renderedProjects);
    fade('.projectBox', 100);
  });
}

function changeBackground(element, state1, state2) {
  const current = $(element).attr('background-state')
  if (current === state1) {
    $(element).attr('background-state', state2);
  } else {
    $(element).attr('background-state', state1);
  }
  $("html, body").animate({
    scrollTop: 0
  }, "fast");
}

function fade(element, time) {
  new Promise((res, rej) => {
    setTimeout(() => {
      res($(element).toggleClass('faded'));
    }, time);
  });
}

function glow(element, start, end) {
  new Promise((res, rej) => {
    setTimeout(() => {
      res($(element).toggleClass('glow'));
    }, start);
    setTimeout(() => {
      res($(element).toggleClass('glow'));
    }, end);
  });
}

function portfolio() {
  $(handleContactClick);
  $(handleAboutClick);
  $(handleProjectsClick);
  $(handleFirstProject);
  $(handleSecondProject);
  $(handleThirdProject);
  $(handleBackClick);
}

$(portfolio);