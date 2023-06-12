let soundQueue = [];
let sounds = {};
let soundCount = {};
let maxQueueSizePerSound = 25;
var volumeLevel = 0.1;  // Volume level for all voices


let isPaused = false;

function pauseAllSounds() {
    isPaused = true;
    for (let key in sounds) {
        sounds[key].pause();
    }
    setTimeout(resumeAllSounds, 20000); // 20000 milliseconds = 20 seconds
}

function resumeAllSounds() {
    isPaused = false;
    if (soundQueue.length > 0) {
        soundQueue[0].play();
    }
}


window.onload = function () {
    for (let i = 1; i <= 11; i++) {
        let sound = document.getElementById(`sound${i}`);
        sound.onended = playNextSound;
        sounds[i] = sound;
        soundCount[i] = 0;  // Initialize the count for each sound to 0
    }
};

function playSpecificSound(id) {
    if (isPaused) {
        console.log("All sounds are paused. Wait until resume.");
        return;
    }
    if (sounds[id]) {
        if (soundCount[id] < maxQueueSizePerSound) {
            soundQueue.push(sounds[id]);
            soundCount[id]++;  // Increment the count for the specified sound
            if (soundQueue.length === 1) {
                soundQueue[0].play();
            }
        } else {
            console.log(`Maximum queue size for sound ${id} reached.`);
        }
    } else {
        console.log(`No sound with id ${id} exists.`);
    }
}

function playNextSound() {
    for (let id in soundCount) {
        if (soundQueue[0] === sounds[id]) {
            soundCount[id]--;  // Decrement the count for the sound that just finished playing
        }
    }
    soundQueue.shift();
    if (soundQueue.length > 0) {
        soundQueue[0].play();
    }
}



let connection = new TikTokIOConnection(undefined);
let finishGame = false;
let iconList = [];
let nextId = 1;
let winner = [];
let animationID;
let defaultRate = 1.2; // Hızı varsayılan 1.5 katına çıkarır
let messagesQueue = [];

let usernames = new Map();
// START
$(document).ready(() => {
    setTimeout(function () {
        let targetLive = "oyun_aze";
        connect(targetLive);
    }, 5000);

})

function playSound(mode) {
    var audioElement = document.getElementById("sfx" + mode);
    audioElement.play();

    audioElement.onended = function () {
        // Check if any sound is currently playing
        let isPlaying = false;
        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("sfx" + i).paused) {
                isPlaying = true;
                break;
            }
        }

        // If no sound is currently playing, start the next sound
        if (!isPlaying && soundQueue.length > 0) {
            playSound(soundQueue.shift());
        }
    };
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

    if (!isPendingStreak(data) && data.diamondCount > 0) {
        let giftCount = data.diamondCount * data.repeatCount
        //mikrofon yeraz
        if (data.giftId === 5650) {
            // soundQueue.push(9);
            playSpecificSound(9);
        }

        //elde urek baki
        if (data.giftId === 5487) {
            // soundQueue.push(9);
            playSpecificSound(10);
        }

        //lolipop gence
        if (data.giftId === 5657) {
            // soundQueue.push(9);
            playSpecificSound(11);
        }

               // //panda naxcivan
               if (data.giftId === 37) {
                // soundQueue.push(7);
                playSpecificSound(7);
            }


              //turk qehvesi talis
              if (data.giftId === 5994) {
                // soundQueue.push(8);
                playSpecificSound(8);
            }

        for (let i = 0; i < giftCount; i++) {
            //tiktok siu
            if (data.giftId === 5269) {
                // soundQueue.push(1);
                playSpecificSound(1);
            }
            //rose siu
            if (data.giftId === 5655) {
                // soundQueue.push(2);
                playSpecificSound(2);
            }

            // //top footbal 33
            if (data.giftId === 6093) {
                playSpecificSound(3);
                // soundQueue.push(3);
            }

            // //qantel yaxsilar
            if (data.giftId === 5760) {
                // soundQueue.push(4);
                playSpecificSound(4);
            }
            // //alov mujik
            if (data.giftId === 5523 || data.giftId === 6793) {
                // soundQueue.push(5);
                playSpecificSound(5);
            }
            // //kalonka auye
            if (data.giftId === 6042) {
                // soundQueue.push(6);
                playSpecificSound(6);
            }
     

          

            //stop all 
            if (data.giftId === 6427 || data.giftId === 6104) {
                // soundQueue.push(9);
                pauseAllSounds();
            }


        }

        const messages = [
            { text: " adlı hesaba her kes takip atsın", language: "tr" },
            { text: "Teşekkür ederim", language: "tr" },
            { text: "Kendini gösteriyor, onu takip edin", language: "tr" },
            { text: "Harikasın, toplu takip gönderin", language: "tr" },
            { text: "Kesene bereket", language: "tr" },
            { text: "Seni çok seviyorum ,Her kes hesabına takip atsin", language: "tr" },
            { text: "Geri dönüşleri çok iyi hemen takip et", language: "tr" },
            { text: " Desteğin için teşekkür ederiz", language: "tr" },


        ];

        messagesQueue = messagesQueue.filter(item => item.type !== 'random')

        function getRandomMessage(messages) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }
        const randomMessage = getRandomMessage(messages);


        let end = { text: data.nickname + randomMessage.text, language: randomMessage.language, type: 'gift' }; // type ekle

        if (!usernames.has(userName)) {
            messagesQueue.push(end);
            processQueue();
        }

        lakaka1(userName);
    }





})


connection.on('member', (data) => {
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;


    messagesQueue = messagesQueue.filter(item => item.type !== 'random');


    const messages = [
        { text: " hoş geldin", language: "tr" },
        { text: " Hoş geldin, Seni bekliyorduk", language: "tr" },
        { text: " Hoş geldin ,Lütfen arkadaşlarını davet et", language: "tr" },
        { text: " Hoş geldin , Seni Seviyoruz", language: "tr" },


        // { text: " welcome", language: "en" },
    ];

    function getRandomMessage(messages) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }
    const randomMessage = getRandomMessage(messages);


    let end = { text: data.nickname + randomMessage.text, language: randomMessage.language, type: 'member' };

    if (!usernames.has(userName)) {
        messagesQueue.push(end);
        processQueue();
    }
    lakaka1(userName);

})



function isPendingStreak(data) {
    return data.giftType === 1 && !data.repeatEnd;
}

// End
connection.on('streamEnd', () => {
    $('#stateText').text('Canlı sona çatdı.');
})


function lakaka1(username) {


    // Eğer username zaten usernames Map'inde bulunuyorsa, işlemi sonlandır
    if (usernames.has(username)) {
        return;
    }

    // username'i usernames Map'ine ekle ve şu anki zamanı değer olarak ata
    usernames.set(username, Date.now());

    // 30 saniye sonra username'i kontrol et ve eğer süre geçtiyse usernames Map'inden çıkar
    setTimeout(() => {
        const timestamp = usernames.get(username);
        if (Date.now() - timestamp >= 30000) {
            usernames.delete(username);
        }
    }, 30000);

    // ...
    // Geri kalan gift fonksiyonu kodu
    // ...
}

// Otomatik seslendirme başlatma
window.addEventListener("load", async () => {
    try {
        // Kullanıcıdan otomatik seslendirmeye izin isteyin
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();


    } catch (error) {
        console.error("Otomatik seslendirme başlatılamadı:", error);
    }
});



function addRandomMessage() {
    const messages = [
        { text: "İlk üçe gir ve takip al", language: "tr" },
        { text: "Hepinize Teşekkür ederim", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },


        { text: "Canlını paylaş", language: "tr" },
        { text: "Yorum yaz, karşılığında takip ederim", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Harikasınız", language: "tr" },
        { text: "Birlikte büyüyelim, beğen ve takip et", language: "tr" },
        { text: "Topluluğa katıl, takip et ve etkileşime gir", language: "tr" },
        { text: "Beğen ve yorum yap, karşılığında takip ederim", language: "tr" },
        { text: "Bağlantıda kal, takip et ve paylaş", language: "tr" },
        { text: "Güncellemeler için bildirimleri aç", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Müthişsiniz, teşekkürler", language: "tr" },
        { text: "Pozitif enerjiyi sürdür, beğen ve takip et", language: "tr" },
        { text: "Birlikte daha güçlüyüz, destekle ve takip et", language: "tr" },
        { text: "Paylaşmak önemsemektir, takip et ve yeniden paylaş", language: "tr" },
        { text: "Daha fazla içerik için takipte kal", language: "tr" },
        { text: "Yeni arkadaşlar keşfet, takip et ve etkileşime gir", language: "tr" },
        { text: "Birbirimize ilham verelim, beğen ve takip et", language: "tr" },
        { text: "Özel içerik için takip et", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Beğeni bırak, takipçi kazan", language: "tr" },
        { text: "Harika işler çıkarmaya devam edin, teşekkürler", language: "tr" },
        { text: "Bağlan ve büyü, takip et ve destekle", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Sohbete katıl, yorum yap ve takip et", language: "tr" },
        { text: "Yeni fikirler keşfet, takip et ve paylaş", language: "tr" },
        { text: "Güncel kal, takip et ve bildirimleri aç", language: "tr" },
        { text: "Takip et ve düşüncelerini paylaş", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Karşılıklı destek için beğen ve yorum yap", language: "tr" },
        { text: "Pozitif bir topluluk oluştur, takip et ve etkileşime gir", language: "tr" },
        { text: "Desteğiniz için teşekkür ederiz", language: "tr" },
        { text: "Lütfen yayımı beyenin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Sandık koy daha çok takipçi kazan", language: "tr" },
        { text: "Burada herkes takipçi kazanacak", language: "tr" },
        { text: "Mesaj yazanları takip edin", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Aktiv ol ve takipçi kazan", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },

    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    messagesQueue.push({ ...randomMessage, type: 'random' }); // type ekle
    processQueue();
}

setInterval(addRandomMessage, 20000);




function onEnd() {
    messagesQueue.shift();
    processQueue();
}

function containsBannedWords(text) {
    const bannedWords = ["pox", "cindir", "amciq", "got", "meme", "məmə", "dillaq", "dıllağ", "göt", "amcıq", "Bok", "am", "kahbe", "Qəhbə", "Qancıx", "Götveren"];

    for (const word of bannedWords) {
        if (text.match(new RegExp('\\b' + word + '\\b', 'gi'))) {
            return true;
        }
    }

    return false;
}



function speak(text) {
    if (containsBannedWords(text)) {
        text = "söyüş söyme";
        let ms = [
            { text: text, language: "en" }]

    }
    console.log("a")
    responsiveVoice.speak(ms, "Turkish Male", { rate: defaultRate, onend: onEnd }, { volume: volumeLevel });
}

function processQueue() {
    if (messagesQueue.length > 0) {
        // Şu anda seslendirme yapılıp yapılmadığını kontrol et
        if (!responsiveVoice.isPlaying()) {
            let message = messagesQueue[0].text;
            let language = messagesQueue[0].language;

            // Dil tercihine göre seslendirme yapın
            switch (language) {
                case 'tr':
                    // Türkçe seslendirme
                    console.log("A")
                    responsiveVoice.speak(message, "Turkish Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
                    break;
                case 'en':
                    // İngilizce seslendirme
                    responsiveVoice.speak(message, "UK English Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
                    break;

                default:
                    // Dil tespit edilemediğinde varsayılan olarak İngilizce kullanın
                    responsiveVoice.speak(message, "UK English Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
                    break;
            }
        } else {
            // Eğer şu anda seslendirme yapılıyorsa, bekleyen sesleri sil ve yeni mesajları ekle
            messagesQueue.shift();
            processQueue();
        }
    }
}
