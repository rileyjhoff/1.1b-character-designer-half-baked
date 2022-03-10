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
const clearCatchphrasesEl = document.getElementById('clear-catchphrases-container');
const clearCatchphrasesButton = document.getElementById('clear-catchphrases');
const nameEl = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const clearNameButton = document.getElementById('clear-name');
const resetAllButton = document.getElementById('reset-all');
const headPleaseSelect = document.getElementById('head-select');
const middlePleaseSelect = document.getElementById('middle-select');
const bottomPleaseSelect = document.getElementById('bottom-select');
const clearHeadButton = document.getElementById('clear-head');
const clearMiddleButton = document.getElementById('clear-middle');
const clearBottomButton = document.getElementById('clear-bottom');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;
// set state for all of the character's catchphrases
let catchphrases = [];
// misc initial state
reportEl.onload = displayStats();
headPleaseSelect.disabled = true;
middlePleaseSelect.disabled = true;
bottomPleaseSelect.disabled = true;

// event listeners
nameButton.addEventListener('click', () => {
    displayName();
});

clearNameButton.addEventListener('click', () => {
    clearName();
});

nameInput.addEventListener('input', () => {
    nameButton.disabled = false;
});

headDropdown.addEventListener('change', () => {
    clearHeadButton.classList.remove('hide');
    // get the value of the head dropdown
    let headSelection = headDropdown.value;
    // increment the head change count state
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url(assets/${headSelection}-head.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

clearHeadButton.addEventListener('click', () => {
    clearHead();
});

middleDropdown.addEventListener('change', () => {
    clearMiddleButton.classList.remove('hide');
    // get the value of the middle dropdown
    let middleSelection = middleDropdown.value;
    // increment the middle change count state
    middle++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url(assets/${middleSelection}-middle.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

clearMiddleButton.addEventListener('click', () => {
    clearMiddle();
});

bottomDropdown.addEventListener('change', () => {
    clearBottomButton.classList.remove('hide');
    // get the value of the bottom dropdown
    let bottomSelection = bottomDropdown.value;
    // increment the bottom change count state
    bottom++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url(assets/${bottomSelection}-pants.png)`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

clearBottomButton.addEventListener('click', () => {
    clearBottom();
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
    displayClearCatchphrasesButton();
});

resetAllButton.addEventListener('click', () => {
    resetAll();
});

clearCatchphrasesButton.addEventListener('click', () => {
    clearCatchphrases();
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

function displayClearCatchphrasesButton() {
    if (catchphrasesEl.textContent !== ''){
        clearCatchphrasesEl.classList.remove('hide');
    }
}

function clearCatchphrases() {
    catchphrasesEl.textContent = '';
    catchphrases = [];
    clearCatchphrasesEl.classList.add('hide');
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
        nameButton.disabled = false;
    }
}

function clearName() {
    nameEl.textContent = '';
    nameInput.value = '';
    nameButton.textContent = 'Add';
    clearNameButton.classList.add('hide');
    nameButton.disabled = false;
}

function resetAll() {
    clearName();
    clearCatchphrases();
    clearHead();
    clearMiddle();
    clearBottom();
    head = 0;
    middle = 0;
    bottom = 0;
    displayStats();
}

function clearHead() {
    headDropdown.value = 'select';
    headEl.style.backgroundImage = '';
    clearHeadButton.classList.add('hide');
}

function clearMiddle() {
    middleDropdown.value = 'select';
    middleEl.style.backgroundImage = '';
    clearMiddleButton.classList.add('hide');
}

function clearBottom() {
    bottomDropdown.value = 'select';
    bottomEl.style.backgroundImage = '';
    clearBottomButton.classList.add('hide');
}