// DATA

var soundQueue = []; // Array to store the sound queue
let connection = new TikTokIOConnection(undefined);
let finishGame = false;
let iconList = [];
let nextId = 1;
let winner = [];
let animationID;
// START
$(document).ready(() => {
    setTimeout(function () {
        let targetLive = "oyun_aze";
        connect(targetLive);
    }, 5000);

})

function playSound(mode) {
    var audioElement = document.getElementById("sfx" + mode);
    
    // If another sound is already playing, add the current sound to the queue
    if (!audioElement.paused) {
        soundQueue.push(mode);
    } else {
        audioElement.play(); // Play the current sound
        
        audioElement.onended = function() {
            // After the sound finishes playing, check if there are sounds in the queue
            if (soundQueue.length > 0) {
                var nextSound = soundQueue.shift(); // Get the next sound from the queue
                playSound(nextSound); // Play the next sound recursively
            }
        };
    }
}

function connect(targetLive) {
    if (targetLive !== '') {
        $('#stateText').text('Qoşulur...');
        $("#usernameTarget").html("@" + targetLive);
        connection.connect(targetLive, {
            enableExtendedGiftInfo: true
        }).then(state => {
            $('#stateText').text(`Xoş gəldin... ${state.roomId}`);
        }).catch(errorMessage => {
            $('#stateText').text(errorMessage);
        })
    } else {
        alert('İstifadəçi adını daxil et');
    }
}

// New gift received
let callCount = 0; // the counter variable

let userCallCount = {}; // the object to track calls per user
// // New gift received
connection.on('gift', (data) => {
    let userName = data.uniqueId;
    if (!userCallCount[userName]) {
        userCallCount[userName] = 0; // initialize the count if it doesn't exist
    }

    userCallCount[userName]++;

    if (userCallCount[userName] % 2 !== 0) { // only execute the function on every other call
        let giftCount = data.diamondCount * data.repeatCount / 2;
        for (let i = 0; i < giftCount; i++) {
            if (data.giftId === 5269) {
                playSound(1);
            }
    
            if (data.giftId === 5655) {
                playSound(2);
            }
    
            if (data.giftId === 7591) {
                playSound(3);
            }
    
            if (data.giftId === 6104) {
                playSound(4);
            }
    
            if (data.giftId === 5509) {
                playSound(5);
            }
        }
    }

    
})


function isPendingStreak(data) {
    return data.giftType === 1 && !data.repeatEnd;
}

// End
connection.on('streamEnd', () => {
    $('#stateText').text('Canlı sona çatdı.');
})