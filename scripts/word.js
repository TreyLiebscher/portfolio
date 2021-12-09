function handleNavigateToHome() {
    $('#nameButton').on('click', (ev) => {
      window.location.pathname = '';
    });
}

function runWord() {
    $(handleNavigateToHome);
}

$(runWord);
