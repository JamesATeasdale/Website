class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
            <a href="index.html"><img class="logo" src="resources/logo.png"></a>
                <ul class="nav_links">
                    <li><a href="video.html">Video</a></li>
                    <li class="dropdown"><a href="#">Projects</a>
                        <div class="dropdown-content">
                            <a href="#home">Adventure</a>
                            <a href="#scraper">Scraper</a>
                            <a href="#chat">Chatbot</a>
                            <a href="spreadsheet.html">Calorie Calc</a>
                        </div>
                    </li>
                    <li class="dropdown"><a href="jsgames.html">Games</a>
                        <div class="dropdown-content">
                            <a href="mechAliens.html">Mech Aliens</a>
                        </div>
                    </li>
                    <li><a href="questionnaire.php">Feedback</a></li>
                </ul>
            <div id="sidenav" class="sidenav">
                <div class="profile">
                    <img src="resources/profile.png" alt="profile_photo">
                    <h3>James Teasdale</h3>
                    <p>Enthusiest</p>
                </div>
                <div class="items">
                    <a href="index.html">Home</a>
                    <a href="video.html">Video</a>
                    <a href="jsgames.html">Games</a>
                    <a href="questionnaire.php">Feedback</a>
                    <a href="https://www.codecademy.com/profiles/jamesTeasdale9097991433">Codecademy</a>
                    <a href="https://github.com/JamesATeasdale">Github</a>
                    <a href="mailto:jamesadamteasdale@gmail.com">Email Me!</a>
                    <a href="#">Server</a>
                    <a href="smb://james@192.168.1.94/James/server/coding/html_playground/resources/james_teasdale.pdf" download="james_teasdale.pdf">CV</a>
                </div>
            </div>
            <div id="main">
                    <span onclick="toggleNav();">
                        <div class="container" onclick="navAnim(this)">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </span>
            </div>
      </header>
      <div class="social">
        <a href="https://www.twitter.com/ShyGuro"><img  src="./resources/twitter.png"></a>
        <a href="https://www.youtube.com/channel/UCcu0L3IHVaEGfBcN7tUhATw"><img src="./resources/youtube.png"></a>
        <a href="https://www.facebook.com/ishykel/"><img  src="./resources/facebook.png"></a>
      </div>

<div id="dimscreen" style="width: 0%;" onclick="toggleNav();"></div>
      `;
  }
}
customElements.define('header-component', Header);


/* Navigation button in the top-right */

function toggleNav() {
	let sidenav = document.getElementById("sidenav");
    let dimscreen = document.getElementById("dimscreen");
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width == "250px" ? '0' : '250px';
    dimscreen.style.width = dimscreen.style.width == '100%' ? '0%' : '100%';
}

function navAnim(x) {
    x.classList.toggle("change");
}

/* Choose random video on webm.html */

function randomVid() {
    var video = document.getElementById('video');
    // change the arbitrary number to the number of files in webms/, then run enumerate.py
    var number = Math.floor(Math.random() * 42) + 1;
    video.src = "webms/" + number +'.webm#t=0.1';
}

/* For RPS game https://www.youtube.com/watch?v=1yS-JV4fWqY&list=LL&index=2 */

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const wins = document.getElementById('wins')
const SELECTIONS = [{
    name: 'rock',
    source: 'resources/rock.png',
    beats: 'scissors'
}, {
    name: 'paper',
    source: 'resources/paper.png',
    beats: 'rock'
}, {
    name: 'scissors',
    source: 'resources/scissors.png',
    beats: 'paper'
}]
 
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
        if ((parseInt(yourScoreSpan.innerText) === 3) || (parseInt(computerScoreSpan.innerText) === 3)) {
            wins.style.visibility = "visible";
            if (parseInt(yourScoreSpan.innerText) > parseInt(computerScoreSpan.innerText)) {
                wins.innerHTML = "You WIN!"
            } else {
                wins.innerHTML = "Comp WIN!"
            }
        };
    });
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const youWin = isWinner(selection, computerSelection)
    const computerWin = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWin)
    addSelectionResult(selection, youWin)

    if ((parseInt(yourScoreSpan.innerText) === 3) || (parseInt(computerScoreSpan.innerText) === 3)) {
        wins.innerHTML = "";
        wins.style.visibility = "hidden";
        yourScoreSpan.innerText = 0;
        computerScoreSpan.innerText = 0;
        var child = document.querySelectorAll('.result-selection');
        child.forEach(elem => {
            elem.remove()
        });
    } else {
        if (youWin) incrementScore(yourScoreSpan)
        if (computerWin) incrementScore(computerScoreSpan) 
    }
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    var img = document.createElement('img')
    const div = document.createElement('div').appendChild(img)
    div.classList.add('result-selection')
    img.src = selection.source
    /* img.opacity -= 0.1; */

    document.getElementById('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
} 

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}
