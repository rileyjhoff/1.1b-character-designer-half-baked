// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const resetCatchphrasesEl = document.getElementById('reset-catchphrases-container');
const resetCatchphrasesButton = document.getElementById('reset-catchphrases');
const nameEl = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const clearNameButton = document.getElementById('clear-name');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;
reportEl.onload = displayStats();
// set state for all of the character's catchphrases
let catchphrases = [];

// event listeners
headDropdown.addEventListener('change', () => {
    document.getElementById('head-select').disabled = true;
    // get the value of the head dropdown
    let headSelection = headDropdown.value;
    // increment the head change count state
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(assets/${headSelection}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    document.getElementById('middle-select').disabled = true;
    // get the value of the middle dropdown
    let middleSelection = middleDropdown.value;
    // increment the middle change count state
    middle++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url(assets/${middleSelection}-middle.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    document.getElementById('bottom-select').disabled = true;
    // get the value of the bottom dropdown
    let bottomSelection = bottomDropdown.value;
    // increment the bottom change count state
    bottom++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url(assets/${bottomSelection}-pants.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let catchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(catchphrase);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
    displayResetButton();
});

resetCatchphrasesButton.addEventListener('click', () => {
    resetCatchphrases();
});

nameButton.addEventListener('click', () => {
    displayName();
});

clearNameButton.addEventListener('click', () => {
    clearName();
});

nameInput.addEventListener('input', () => {
    nameButton.disabled = false;
});

// functions
function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You've changed the head ${head} times. You've changed the middle ${middle} times. You've changed the bottom ${bottom} times.`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let catchphrase of catchphrases) {
        // and for each catchphrase
        // create an HTML element with the catchphrase as its text content
        const div = document.createElement('div');
        div.classList.add('catchphrase');
        div.textContent = catchphrase;
        // and append that HTML element to the cleared-out DOM
        catchphrasesEl.append(div);
    }
}

function displayResetButton() {
    if (catchphrasesEl.textContent !== ''){
        resetCatchphrasesEl.classList.remove('hide');
    }
}

function resetCatchphrases() {
    catchphrasesEl.textContent = '';
    catchphrases = [];
    resetCatchphrasesEl.classList.add('hide');
}

function displayName() {
    nameEl.textContent = '';
    let name = nameInput.value;
    nameEl.textContent = name;
    nameInput.value = '';
    nameButton.textContent = 'Change';
    clearNameButton.classList.remove('hide');
    nameButton.disabled = true;
    if (nameEl.textContent === '') {
        nameButton.textContent = 'Add';
        clearNameButton.classList.add('hide');
    }
}

function clearName() {
    nameEl.textContent = '';
    nameInput.value = '';
    nameButton.textContent = 'Add';
    clearNameButton.classList.add('hide');
    nameButton.disabled = false;
}