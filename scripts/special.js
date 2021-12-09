let lightsRunning = true;

const defaultLightArray = [
    'a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5'
];

const grayscaleLightClassArray = [
    'white-glow',
    'lightgray-glow',
    'darkgray-glow',
    'gray-glow',
    'darker-gray-glow'
];

const blueLightArray = [
    'blue-1',
    'blue-2',
    'blue-3',
    'blue-4',
    'blue-5'
];

const orangeLightArray = [
    'orange-1',
    'orange-2',
    'orange-3',
    'orange-4',
    'orange-5'
];

const randomLightArray = [
    'random-1',
    'random-2',
    'random-3',
    'random-4',
    'random-5'
];

let stepSpeed = 5;

function handleSliderInputChange() {
    $("#stepSpeed").on('input change', (evt) => {
        stepSpeed = parseInt(evt.target.value);
    });
}

const squareButtons = `
    <button class="square-button" id="_a1"></button>
    <button class="square-button" id="_a2"></button>
    <button class="square-button" id="_a3"></button>
    <button class="square-button" id="_a4"></button>
    <button class="square-button" id="_a5"></button>

    <button class="square-button" id="_b1"></button>
    <button class="square-button" id="_b2"></button>
    <button class="square-button" id="_b3"></button>
    <button class="square-button" id="_b4"></button>
    <button class="square-button" id="_b5"></button>

    <button class="square-button" id="_c1"></button>
    <button class="square-button" id="_c2"></button>
    <button class="square-button" id="_c3"></button>
    <button class="square-button" id="_c4"></button>
    <button class="square-button" id="_c5"></button>

    <button class="square-button" id="_d1"></button>
    <button class="square-button" id="_d2"></button>
    <button class="square-button" id="_d3"></button>
    <button class="square-button" id="_d4"></button>
    <button class="square-button" id="_d5"></button>
    
    <button class="square-button" id="_e1"></button>
    <button class="square-button" id="_e2"></button>
    <button class="square-button" id="_e3"></button>
    <button class="square-button" id="_e4"></button>
    <button class="square-button" id="_e5"></button>
`;

const squareLights = `
    <div class="square" id="a1"></div>
    <div class="square" id="a2"></div>
    <div class="square" id="a3"></div>
    <div class="square" id="a4"></div>
    <div class="square" id="a5"></div>
    <div class="square" id="b1"></div>
    <div class="square" id="b2"></div>
    <div class="square" id="b3"></div>
    <div class="square" id="b4"></div>
    <div class="square" id="b5"></div>
    <div class="square" id="c1"></div>
    <div class="square" id="c2"></div>
    <div class="square" id="c3"></div>
    <div class="square" id="c4"></div>
    <div class="square" id="c5"></div>
    <div class="square" id="d1"></div>
    <div class="square" id="d2"></div>
    <div class="square" id="d3"></div>
    <div class="square" id="d4"></div>
    <div class="square" id="d5"></div>
    <div class="square" id="e1"></div>
    <div class="square" id="e2"></div>
    <div class="square" id="e3"></div>
    <div class="square" id="e4"></div>
    <div class="square" id="e5"></div>
`;

let userLightArray = [];

function handleSquareButtonClick() {
    $('#squareButtonContainer').on('click', '.square-button', (ev) => {
        if(ev.currentTarget.classList.length === 1) {
            $(`#${ev.currentTarget.id}`).addClass('selected');
            const id = ev.currentTarget.id.split('_')[1];
            userLightArray.push(id);
        } else {
            $(`#${ev.currentTarget.id}`).removeClass('selected');
            const id = ev.currentTarget.id.split('_')[1];
            const index = userLightArray.indexOf(id);
            userLightArray.splice(index, 1);
        }
    });    
}

function handleShowEditButton(duration) {
    setTimeout(() => {
        $('#viewControls').removeClass('hidden');
    }, (duration + 200));

}

const userControls = `
    <label for="durationInput">Duration (seconds)</label>
    <input id="durationInput" value="10" type="number" />
    <button id="viewSquares">RUN</button>
`;

function toggleEditMode() {
    $('#editSquaresContainer').on('click', '#editSquares', () => {
        console.log('Enabling edit mode .. .. .. ')
        $('#lightGrid').html(squareButtons);
        $('#editSquaresContainer').append(userControls)
    });
}

function toggleViewMode() {
    $('#runLightShow').on('click', () => {
        const durationInput = $('#durationInput').val() * 1000;
        $('#lightGrid').html(squareLights);

        $('#viewControls').removeClass('hidden');
        $('#userControls').addClass('hidden');

        lightShow(durationInput, userLightArray, false, stepSpeed, grayscaleLightClassArray);
    });
}

const speedArray = [
    { speed: 10, min: 25, max: 50 },
    { speed: 9, min: 50, max: 100 },
    { speed: 8, min: 75, max: 150 },
    { speed: 7, min: 100, max: 200 },
    { speed: 6, min: 125, max: 250 },
    { speed: 5, min: 150, max: 300 },
    { speed: 4, min: 175, max: 350 },
    { speed: 3, min: 200, max: 400 },
    { speed: 2, min: 225, max: 450 },
    { speed: 1, min: 250, max: 500 },
];


function lightShow(duration, lightArray, randomized, speed, colorArray) {
    let step;
    let speedObject;
    let lightIndex = 0;
    const length = lightArray.length;

    speedArray.map(item => {
        if (item.speed === speed){
            speedObject = item;
        }
    });

    step = Math.floor(Math.random() * (speedObject.max - speedObject.min) + speedObject.min);

    for (let i = 500; i < duration; i += step) {
        (() => {
            setTimeout(() => {
                const currentLight = $(`#${lightArray[lightIndex]}`);
                const currentLightClass = currentLight.attr('class').split(/\s+/);

                if (currentLightClass.length <= 1) {
                    $(`#${lightArray[lightIndex]}`).addClass(colorArray[0]);
                } else if (currentLightClass.length <= 2) {
                    $(`#${lightArray[lightIndex]}`).addClass(colorArray[1]);
                } else if (currentLightClass.length <= 3) {
                    $(`#${lightArray[lightIndex]}`).addClass(colorArray[2]);
                } else if (currentLightClass.length <= 4) {
                    $(`#${lightArray[lightIndex]}`).addClass(colorArray[3]);
                } else if (currentLightClass.length <= 5) {
                    $(`#${lightArray[lightIndex]}`).addClass(colorArray[4]);
                } else {
                    currentLight.removeClass(colorArray[0]);
                    currentLight.removeClass(colorArray[1]);
                    currentLight.removeClass(colorArray[2]);
                    currentLight.removeClass(colorArray[3])
                    currentLight.removeClass(colorArray[4]);
                }


                if(randomized) {
                    lightIndex = Math.floor(Math.random() * (length - 0) + 0);                    
                } else {
                    if(lightIndex === (length - 1)) {
                        lightIndex = 0;
                    } else {
                        lightIndex++
                    }                    
                }

            }, i)
        })();

    }
}

function handleViewControls() {
    $('#viewControls').on('click', () => {
        $('#viewControls').addClass('hidden');
        $('#userControls').removeClass('hidden');
    });
}

function handleHideControls() {
    $('#hideControls').on('click', () => {
        $('#viewControls').removeClass('hidden');
        $('#userControls').addClass('hidden');
    });
}


const infoObject = {
    speedInfo: 'This slider controls the speed of the animation',
    durationInfo: 'This input controls how long the animation will run',
    designInfo: `Here you may design the animation's pattern. The order in which they're selected determines the order of the animation`
};


function handleViewMoreInfo() {
    $('.more-info').on('click', (ev) => {
        const defaultMessage = '<p>?</p>'
        const message = `<p class='more-info-text'>${infoObject[ev.currentTarget.id]}</p>`;

        if(ev.currentTarget.classList.length > 1) {
            $(`#${ev.currentTarget.id}`).removeClass('KIWI');
            $(`#${ev.currentTarget.id}`).html(defaultMessage);            
        } else {
            $(`#${ev.currentTarget.id}`).addClass('KIWI');
            $(`#${ev.currentTarget.id}`).html(message);
        }
    });
}

function handleNavigateToHome() {
    $('#nameButton').on('click', (ev) => {
      window.location.pathname = '';
    });
}


function runSpecial() {
    $(lightShow(5000, defaultLightArray, false, 10, blueLightArray));
    $(toggleEditMode);
    $(toggleViewMode);
    $(handleShowEditButton(5000));
    $(handleSquareButtonClick);
    $(handleViewControls);
    $(handleHideControls);
    $(handleViewMoreInfo);
    $(handleSliderInputChange);
    $(handleNavigateToHome);
}

$(runSpecial);
