'use strict';

const projectArray = [
  {
    name: 'elevationVisualizer',
    info: elevationVisualizerInfo
  },
  {
    name: 'storyBank',
    info: storyBankInfo
  },
  {
    name: 'movieHelix',
    info: movieHelixInfo
  }
];

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
    $('#main-content').html(projectContainer);
    $('#siteBody').attr('background-state') === 'coral' ? changeBackground('#siteBody', 'coral', 'sea') : null;
    fade('.projectBox', 100);
  });
}

function moreInfo(requestedProject) {
  projectArray.map(project => {
    if(project.name === requestedProject) {
      $('#main-content').html(project.info)
    }
  });
  changeBackground('#siteBody', 'sea', 'coral');
  glow('.infoTitle', 400, 1600);
  fade('.infoContainer', 100);
}

function handleProjectClick() {
  $('#main-content').on('click', 'button', (ev) => {
    const requestedProject = ev.currentTarget.id;
    projectArray.map(project => {
      if (project.name === requestedProject) {
        moreInfo(project.name);
      }
    });
  });
}

function handleBackClick() {
  $('#main-content').on('click', 'button#back', (ev) => {
    ev.preventDefault();
    changeBackground('#siteBody', 'coral', 'sea');
    $('#main-content').html(projectContainer);
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

function handleGreet() {
  console.log('OO  00  ||||||   ||   ||                                      ')
  console.log('OO  00  ||       ||   ||                                  ')
  console.log('OO  00  ||       ||   ||                                  ')
  console.log('OO0000  ||||||   \\  //                                        ')
  console.log('OO  00  ||         ||                                    ')
  console.log('OO  00  ||         ||                                    ')
  console.log('OO  00  ||||||     ||                                        ')          
}

function handleNavigateToLS() {
  $('#navigateToLS').on('click', (ev) => {
    window.location.href = window.location.href + 'test'; 
  });
}

function handleNavigateToHome() {
  $('#nameButton').on('click', (ev) => {
    window.location.pathname = '';
  });
}

function navigateToWord() {
  $('#navigateToWord').on('click', (ev) => {
    window.location.pathname =  'wordTool'; 
  });
}

function portfolio() {
  $(handleContactClick);
  $(handleAboutClick);
  $(handleProjectsClick);
  $(handleBackClick);
  $(handleProjectClick);
  $(handleGreet);
  $(handleNavigateToLS);
  $(handleNavigateToHome);
  $(navigateToWord);
}

$(portfolio);