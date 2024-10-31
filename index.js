// Initial score counts
var homeScoreCount = 0
var guestScoreCount = 0

// reference to score elements
var homeScore = document.getElementById("home-el")
var guestScore = document.getElementById("guest-el")


// Function to update leader highlight
function updateLeaderHighlight() {
        if (homeScoreCount > guestScoreCount) {
            homeScore.setAttribute("class", "leader");
            guestScore.removeAttribute("class", "leader");
        } 
        else if (guestScoreCount > homeScoreCount) {
            guestScore.setAttribute("class", "leader");
            homeScore.removeAttribute("class", "leader");
        }
        else if (guestScoreCount === homeScoreCount && homeScoreCount > 0) {
            guestScore.setAttribute("class", "draw");
            homeScore.setAttribute("class", "draw");
        } else {
            homeScore.removeAttribute("class", "leader");
            guestScore.removeAttribute("class", "leader");
        }
    }   

// Updates to Home Score Buttons
function homeAdd1() {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount
    updateLeaderHighlight()
}

function homeAdd2() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
    updateLeaderHighlight() 
}

function homeAdd3() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
    updateLeaderHighlight() 
}


// Updates to Guest Score Buttons  

function guestAdd1() {
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
    updateLeaderHighlight()   
}

function guestAdd2() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
    updateLeaderHighlight()  
}

function guestAdd3() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount  
    updateLeaderHighlight()
}

// Resets the score after pressing the "New Game" button

function resetScore() {
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.textContent = homeScoreCount
    guestScore.textContent = guestScoreCount
    updateLeaderHighlight()    
}