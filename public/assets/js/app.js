let soundQueue = [];
let sounds = {};
let soundCount = {};
let maxQueueSizePerSound = 10;
var volumeLevel = 1;  // Volume level for all voices


let connection = new TikTokIOConnection(undefined);
let finishGame = false;
let iconList = [];
let nextId = 1;
let winner = [];
let animationID;
let defaultRate = 1.2; // Hızı varsayılan 1.5 katına çıkarır
let messagesQueue = [];

let usernames = new Map();

$(document).ready(() => {
    setTimeout(function () {
        let targetLive = "freecoinups";
        connect(targetLive);
    }, 5000);

})




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

let sonSesCalmaZamani = {};

connection.on('chat', async (data) => {
    let member = data.nickname;
    let lowerCaseComment = data.comment.toLowerCase();



});

// New gift received
let callCount = 0; // the counter variable

let userCallCount = {}; // the object to track calls per user
// // New gift received
connection.on('gift', (data) => {
    let userName = data.uniqueId;

    if (!isPendingStreak(data) && data.diamondCount > 0) {
        let giftCount = data.diamondCount * data.repeatCount;

        for (let i = 0; i < data.repeatCount; i++) {


        }




        for (let i = 0; i < giftCount; i++) {




        }
        setTimeout(() => {
            const messages = [
                { text: " yayımı beğendiğin için teşekkür ederim", language: "tr" },
                { text: " yayımı beğeniyor", language: "tr" },
                { text: " ellerin dert görmesin", language: "tr" },
                { text: " iyiki varsın", language: "tr" },
                { text: " lütfen yayımı paylaş", language: "tr" },
                { text: " lütfen arkadaşlarını davet et", language: "tr" },
                { text: " Seni seviyorum", language: "tr" },
                { text: " İyiki yayıma geldin", language: "tr" },
                { text: " beğendiğin üçün teşekkürler", language: "tr" },
                { text: " wow! Your support is incredible!", language: "en" },
                { text: " a big shoutout to you for your generosity!", language: "en" },
                { text: " you're just awesome! Thanks for your support!", language: "en" },
                { text: " keep the love coming! Your contribution is appreciated!", language: "en" },
                { text: " thanks for your generosity!", language: "en" },
                { text: " what a fantastic surprise!", language: "en" },
                { text: " your contribution just made my day!", language: "en" },
                { text: " feeling grateful for your support!", language: "en" },
                { text: " wow! Thank you for supporting the stream.", language: "en" },
                { text: " your support is greatly appreciated!", language: "en" },
                { text: " what a surprise! Thank you for your kindness.", language: "en" },
                { text: " thank you for your amazing support. You rock!", language: "en" },
                { text: " thanks for your support! It means a lot.", language: "en" },
                { text: " thanks for making the live more fun with your support!", language: "en" },
                { text: " a shoutout to you for your incredible contribution!", language: "en" },
                { text: " you're making a difference. Thank you for your support!", language: "en" },
                { text: " your contribution is much appreciated. Thanks a lot!", language: "en" },
                { text: " thank you for your kindness! Your support means the world.", language: "en" },
                { text: " thank you! Your support really lifts up the live!", language: "en" },
                { text: " we're all grateful for your support!", language: "en" },
                { text: " you're incredible! Thank you for your support.", language: "en" },
                { text: " you made my day brighter with your kindness! Thank you!", language: "en" },
                { text: " sending a big thanks to you for your contribution!", language: "en" },
                { text: " your kindness was a pleasant surprise. Thank you!", language: "en" },
                { text: " what a wonderful surprise! Thank you.", language: "en" },
                { text: " your support makes all the difference! Thank you.", language: "en" },
                { text: " thank you for your fantastic contribution! You're awesome.", language: "en" },
                { text: " a big shoutout to you for your generosity!", language: "en" },
                { text: " a huge thanks to you for your incredible contribution!", language: "en" },
                { text: " your kindness is appreciated more than you know. Thank you!", language: "en" },
                { text: "¡Vaya! ¡Tu apoyo es increíble!", language: "es" },
                { text: "¡Un gran agradecimiento a ti por tu generosidad!", language: "es" },
                { text: "¡Eres simplemente asombroso! ¡Gracias por tu apoyo!", language: "es" },
                { text: "¡Continúa con el amor! ¡Tu contribución es apreciada!", language: "es" },
                { text: "¡Gracias por tu generosidad!", language: "es" },
                { text: "¡Qué fantástica sorpresa!", language: "es" },
                { text: "¡Tu contribución acaba de alegrar mi día!", language: "es" },
                { text: "¡Me siento agradecido por tu apoyo!", language: "es" },
                { text: "¡Vaya! Gracias por apoyar la transmisión.", language: "es" },
                { text: "¡Tu apoyo es muy apreciado!", language: "es" },
                { text: "¡Qué sorpresa! Gracias por tu amabilidad.", language: "es" },
                { text: "Gracias por tu increíble apoyo. ¡Eres genial!", language: "es" },
                { text: "¡Gracias por tu apoyo! Significa mucho.", language: "es" },
                { text: "¡Gracias por hacer la transmisión en vivo más divertida con tu apoyo!", language: "es" },
                { text: "¡Un agradecimiento a ti por tu increíble contribución!", language: "es" },
                { text: "Estás haciendo la diferencia. ¡Gracias por tu apoyo!", language: "es" },
                { text: "Tu contribución es muy apreciada. ¡Muchas gracias!", language: "es" },
                { text: "¡Gracias por tu amabilidad! Tu apoyo significa el mundo.", language: "es" },
                { text: "¡Gracias! ¡Tu apoyo realmente anima la transmisión en vivo!", language: "es" },
                { text: "¡Todos estamos agradecidos por tu apoyo!", language: "es" },
                { text: "¡Eres increíble! Gracias por tu apoyo.", language: "es" },
                { text: "¡Hiciste mi día más brillante con tu amabilidad! ¡Gracias!", language: "es" },
                { text: "¡Envío un gran agradecimiento a ti por tu contribución!", language: "es" },
                { text: "Tu amabilidad fue una agradable sorpresa. ¡Gracias!", language: "es" },
                { text: "¡Qué maravillosa sorpresa! Gracias.", language: "es" },
                { text: "¡Tu apoyo marca toda la diferencia! Gracias.", language: "es" },
                { text: "¡Gracias por tu fantástica contribución! Eres impresionante.", language: "es" },
                { text: "¡Un gran agradecimiento a ti por tu generosidad!", language: "es" },
                { text: "¡Un enorme agradecimiento a ti por tu increíble contribución!", language: "es" },
                { text: "Tu amabilidad es apreciada más de lo que sabes. ¡Gracias!", language: "es" },
                { text: "Uau! Seu apoio é incrível!", language: "br" },
                { text: "Um grande obrigado a você pela sua generosidade!", language: "br" },
                { text: "Você é simplesmente incrível! Obrigado pelo seu apoio!", language: "br" },
                { text: "Continue com o amor! Sua contribuição é apreciada!", language: "br" },
                { text: "Obrigado pela sua generosidade!", language: "br" },
                { text: "Que surpresa fantástica!", language: "br" },
                { text: "Sua contribuição fez o meu dia!", language: "br" },
                { text: "Sentindo-me grato pelo seu apoio!", language: "br" },
                { text: "Uau! Obrigado por apoiar a transmissão.", language: "br" },
                { text: "Seu apoio é muito apreciado!", language: "br" },
                { text: "Que surpresa! Obrigado pela sua gentileza.", language: "br" },
                { text: "Obrigado pelo seu incrível apoio. Você é demais!", language: "br" },
                { text: "Obrigado pelo seu apoio! Significa muito.", language: "br" },
                { text: "Obrigado por tornar a transmissão ao vivo mais divertida com o seu apoio!", language: "br" },
                { text: "Um agradecimento a você pela sua incrível contribuição!", language: "br" },
                { text: "Você está fazendo a diferença. Obrigado pelo seu apoio!", language: "br" },
                { text: "Sua contribuição é muito apreciada. Muito obrigado!", language: "br" },
                { text: "Obrigado pela sua gentileza! Seu apoio significa o mundo.", language: "br" },
                { text: "Obrigado! Seu apoio realmente anima a transmissão ao vivo!", language: "br" },
                { text: "Todos nós somos gratos pelo seu apoio!", language: "br" },
                { text: "Você é incrível! Obrigado pelo seu apoio.", language: "br" },
                { text: "Você fez o meu dia mais brilhante com a sua gentileza! Obrigado!", language: "br" },
                { text: "Enviando um grande obrigado a você pela sua contribuição!", language: "br" },
                { text: "Sua gentileza foi uma agradável surpresa. Obrigado!", language: "br" },
                { text: "Que surpresa maravilhosa! Obrigado.", language: "br" },
                { text: "Seu apoio faz toda a diferença! Obrigado.", language: "br" },
                { text: "Obrigado pela sua fantástica contribuição! Você é demais.", language: "br" },
                { text: "Um grande obrigado a você pela sua generosidade!", language: "br" },
                { text: "Um enorme obrigado a você pela sua incrível contribuição!", language: "br" },
                { text: "Sua gentileza é mais apreciada do que você imagina. Obrigado!", language: "br" },
                { text: "واو! دعمك لا يصدق!", language: "ar" },
                { text: "شكرا كبيرا لك على كرمك!", language: "ar" },
                { text: "أنت ببساطة رائع! شكرا على دعمك!", language: "ar" },
                { text: "استمر في الحب! تُقدر مساهمتك!", language: "ar" },
                { text: "شكرا على سخائك!", language: "ar" },
                { text: "ما أروع المفاجأة!", language: "ar" },
                { text: "مساهمتك جعلت يومي!", language: "ar" },
                { text: "أشعر بالامتنان لدعمك!", language: "ar" },
                { text: "واو! شكرا على دعم البث.", language: "ar" },
                { text: "تُقدر كثيرا دعمك!", language: "ar" },
                { text: "ما أجمل المفاجأة! شكرا على لطفك.", language: "ar" },
                { text: "شكرا على دعمك المدهش. أنت رائع!", language: "ar" },
                { text: "شكرا على دعمك! يعني الكثير.", language: "ar" },
                { text: "شكرا لجعل البث المباشر أكثر متعة بدعمك!", language: "ar" },
                { text: "تحية لك على مساهمتك المدهشة!", language: "ar" },
                { text: "أنت تحدث الفرق. شكرا على دعمك!", language: "ar" },
                { text: "تُقدر كثيرا مساهمتك. شكرا جزيلا!", language: "ar" },
                { text: "شكرا على لطفك! يعني دعمك العالم.", language: "ar" },
                { text: "شكرا! دعمك يحفز بالفعل البث المباشر!", language: "ar" },
                { text: "نحن جميعا ممتنون لدعمك!", language: "ar" },
                { text: "أنت رائع! شكرا على دعمك.", language: "ar" },
                { text: "أضفت السعادة ليومي بلطفك! شكرا!", language: "ar" },
                { text: "أرسل شكرا كبيرا لك على مساهمتك!", language: "ar" },
                { text: "كان لطفك مفاجأة ممتعة. شكرا!", language: "ar" },
                { text: "ما أروع المفاجأة! شكرا.", language: "ar" },
                { text: "دعمك يحدث كل الفرق! شكرا.", language: "ar" },
                { text: "شكرا على مساهمتك الرائعة! أنت رائع.", language: "ar" },
                { text: "شكرا كبيرا لك على كرمك!", language: "ar" },
                { text: "شكرا كبيرا لك على مساهمتك الرائعة!", language: "ar" },
                { text: "تُقدر كثيرا لطفك أكثر مما تعلم. شكرا!", language: "ar" }
            ]

                ;

            messagesQueue = messagesQueue.filter(item => item.type !== 'random')

            function getRandomMessage(messages) {
                const randomIndex = Math.floor(Math.random() * messages.length);
                return messages[randomIndex];
            }
            const randomMessage = getRandomMessage(messages);

            let end = { text: data.nickname + randomMessage.text, language: randomMessage.language, type: 'gift' };

            if (!usernames.has(userName)) {
                messagesQueue.push(end);
                processQueue();
            }

            lakaka1(userName);
        }, 2000); // 2 saniye sonrası için belirlenen süre

    }





})

connection.on('social', (data) => {



});


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
let previousLikeCount = 0;

connection.on('like', (data) => {

    let userName = data.uniqueId;
    let likeCount = data.likeCount;
    let profilePictureUrl = data.profilePictureUrl;
    let totalLikeCount = data.totalLikeCount;

})


function addRandomMessage() {
    const messages = [
        { text: "Gracias por ser parte de esta increíble comunidad.", language: "es" },
        { text: "¡Juntos, somos imparables!", language: "es" },
        { text: "Cada uno de ustedes está ayudando a hacer crecer esta comunidad.", language: "es" },
        { text: "No olviden dar me gusta, comentar y compartir.", language: "es" },
        { text: "Cada acción cuenta para hacer crecer esta comunidad.", language: "es" },
        { text: "¡Estoy tan agradecido por todo el apoyo!", language: "es" },
        { text: "Nunca dejemos de crecer y apoyarnos mutuamente.", language: "es" },

        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },


        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Beğeni bırak, takipçi kazan", language: "tr" },
        { text: "Harika işler çıkarmaya devam edin, teşekkürler", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },

        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },
        { text: "Shoutout to everyone sending gifts! You're the real MVPs!", language: "en" },
        { text: "Let's get this live to as many people as we can, keep sharing!", language: "en" },
        { text: "Remember, every follow counts! Let's build this community!", language: "en" },
        { text: "I see a lot of new faces, welcome! Don't forget to follow for more.", language: "en" },
        { text: "Let's give a big thanks to everyone who's been gifting! Don't forget to follow them.", language: "en" },
        { text: "If you're enjoying the live, make sure you tap the screen!", language: "en" },
        { text: "Just a reminder to share this live with your friends! Let's grow this community.", language: "en" },
        { text: "Every like, every comment, every share helps! Keep it up, everyone!", language: "en" },
        { text: "Let's aim for a new record of followers today! We can do it!", language: "en" },
        { text: "Karşılıklı destek için beğen ve yorum yap", language: "tr" },
        { text: "Pozitif bir topluluk oluştur, takip et ve etkileşime gir", language: "tr" },
        { text: "Desteğiniz için teşekkür ederiz", language: "tr" },
        { text: "Lütfen yayımı beyenin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Sandık koy daha çok takipçi kazan", language: "tr" },
        { text: "Burada herkes takipçi kazanacak", language: "tr" },
        { text: "Mesaj yazanları takip edin", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Thanks for tuning in, everyone! Let's make this live amazing!", language: "en" },
        { text: "Don't forget to share the live! Let's get more people in here!", language: "en" },
        { text: "Remember, the more followers we get, the bigger this community grows!", language: "en" },
        { text: "Tap the screen, let's get this live trending!", language: "en" },
        { text: "Who's going to be the top follower of the day? Let's find out!", language: "en" },
        { text: "Keep the comments coming, love reading what you have to say!", language: "en" },
        { text: "Let's show some love to our top gifters! Make sure you follow them!", language: "en" },
        { text: "We're all here to grow together, so don't forget to follow each other.", language: "en" },
        { text: "If you're enjoying the live, don't forget to drop a like!", language: "en" },
        { text: "Everyone who's just joined, welcome! Don't forget to follow for more great lives.", language: "en" },

        { text: "A big welcome to everyone who's just joined! Remember to follow for more lives.", language: "en" },
        { text: "If you're having fun, don't forget to tap the screen! Let's get trending!", language: "en" },
        { text: "Appreciating all the love and support, everyone. Keep the follows coming!", language: "en" },
        { text: "We're all in this together! Let's keep sharing and following!", language: "en" },
        { text: "Thanks to everyone who's shared the live! You're helping us grow!", language: "en" },
        { text: "Who will be the top follower today? Let's wait and see!", language: "en" },
        { text: "If you like what you see, don't forget to follow and share!", language: "en" },
        { text: "Thanks for all the likes, everyone! Keep tapping that screen!", language: "en" },
        { text: "Shoutout to our top gifters! Don't forget to follow them.", language: "en" },
        { text: "Every follow counts! Thanks for being a part of this community.", language: "en" },
        { text: "Just a reminder - the more shares, the more followers we get! Keep sharing!", language: "en" },
        { text: "Let's keep the momentum going, everyone! Tap that screen!", language: "en" },
        { text: "Welcome to all the newcomers! Remember to follow and share.", language: "en" },
        { text: "Grateful for all the follows and shares, everyone! Keep it up!", language: "en" },
        { text: "Canlını paylaş", language: "tr" },
        { text: "Yorum yaz, karşılığında takip ederim", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Harikasınız", language: "tr" },
        { text: "Birlikte büyüyelim, beğen ve takip et", language: "tr" },
        { text: "Topluluğa katıl, takip et ve etkileşime gir", language: "tr" },
        { text: "Beğen ve yorum yap, karşılığında takip ederim", language: "tr" },
        { text: "Who's going to be the top follower today? Could it be you?", language: "en" },
        { text: "Just a reminder, everyone - keep following and sharing! Let's grow together.", language: "en" },
        { text: "Thanks to everyone who's sent gifts! Remember to follow them.", language: "en" },
        { text: "If you're enjoying the live, tap the screen! Let's get this trending!", language: "en" },
        { text: "Remember, every follow helps! Let's make this community bigger and better!", language: "en" },
        { text: "A big thanks to everyone who's sharing this live! You're helping us grow.", language: "en" },
        { text: "Who will be our top follower today? Only time will tell!", language: "en" },
        { text: "If you're having fun, tap that screen! Let's get this live seen by more people!", language: "en" },
        { text: "Thanks for all the shares, everyone! Keep them coming!", language: "en" },
        { text: "Let's get the follower count up! Keep sharing and following, everyone!", language: "en" },
        { text: "Who's going to be the top follower today? The competition is on!", language: "en" },
        { text: "Shoutout to all our gifters! Remember to follow them, everyone.", language: "en" },
        { text: "Keep the follows coming, everyone! We're growing every second!", language: "en" },
        { text: "Appreciating all the shares, everyone! Let's keep this live growing!", language: "en" },
        { text: "Who's going to be the top follower today? Stay tuned to find out!", language: "en" },
        { text: "Keep those follows coming! We're building something great here!", language: "en" },
        { text: "Shoutout to all the gifters! Don't forget to follow them.", language: "en" },
        { text: "Remember, every tap on the screen helps! Keep it up, everyone!", language: "en" },
        { text: "Recuerda compartir esta transmisión con tus amigos.", language: "es" },
        { text: "¡Cuanto más crezcamos, mejor será para todos nosotros!", language: "es" },
        { text: "No olvides dar me gusta y comentar. ¡Esto nos ayuda a llegar a más gente!", language: "es" },
        { text: "¡Vamos, sigamos creciendo juntos!", language: "es" },
        { text: "Gracias por todos los me gusta y comentarios. ¡Sigamos así!", language: "es" },
        { text: "¡Nunca subestimes el poder de un simple me gusta o compartir!", language: "es" },
        { text: "Thanks for all the shares and follows, everyone! You're the best!", language: "en" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Sohbete katıl, yorum yap ve takip et", language: "tr" },
        { text: "Yeni fikirler keşfet, takip et ve paylaş", language: "tr" },
        { text: "Güncel kal, takip et ve bildirimleri aç", language: "tr" },
        { text: "Takip et ve düşüncelerini paylaş", language: "tr" },
        { text: "Keep those shares coming! The more we share, the more we grow!", language: "en" },
        { text: "Who's going to be our top follower today? Keep following to find out!", language: "en" },
        { text: "لا تتوقفوا أبدا عن دعم وتطوير مجتمعنا!", language: "ar" },
        { text: "شكرا لكم جميعا على الدعم الرائع والحب.", language: "ar" },
        { text: "لنستمر في النمو والدعم معا.", language: "ar" },
        { text: "لنجعل هذا البث المباشر الأكبر!", language: "ar" },
        { text: "كل واحد منكم يحدث فرقا!", language: "ar" },
        { text: "شكرا لكم جميعا على أنكم جزء من هذا المجتمع المدهش!", language: "ar" },
        { text: "لنستمر في النمو ودعم بعضنا البعض!", language: "ar" },
        { text: "لا يوجد شيء لا يمكننا تحقيقه معا!", language: "ar" },
        { text: "أنا ممتن للغاية لكم جميعا!", language: "ar" },
        { text: "Keep tapping that screen, everyone! Let's get this live to the top!", language: "en" },
        { text: "Remember, every follow helps! Let's make this the biggest live yet!", language: "en" },
        { text: "Appreciating all the follows and shares, everyone! Keep them coming!", language: "en" },
        { text: "Keep the comments coming! They really liven up the stream!", language: "en" },
        { text: "Who will be the top gifter today? Stay tuned to find out!", language: "en" },
        { text: "Remember, every share brings us one step closer to our goal! Let's keep sharing!", language: "en" },
        { text: "Let's aim for a new record of followers today! We can do it!", language: "en" },
        { text: "If you're enjoying the live, don't forget to tap the screen!", language: "en" },
        { text: "Thanks to everyone who's been following and sharing! You're making a difference!", language: "en" },
        { text: "Shoutout to all the gifters! Don't forget to follow them.", language: "en" },
        { text: "Keep tapping the screen if you're having fun! Let's keep the energy up!", language: "en" },
        { text: "If you're enjoying the live, don't forget to share with your friends!", language: "en" },
        { text: "Remember, the more shares we get, the more followers we'll gain! Keep sharing!", language: "en" },
        { text: "Who will be the top follower today? Stay tuned to find out!", language: "en" },
        { text: "Keep the shares coming! Let's get this live out to as many people as possible!", language: "en" },
        { text: "Remember, every follow counts! Let's keep the momentum going!", language: "en" },
        { text: "A big shoutout to everyone who's been gifting! You're the real MVPs!", language: "en" },
        { text: "Keep tapping the screen, everyone! Let's get this live to the top!", language: "en" },
        { text: "Don't forget to follow if you're enjoying the live! Let's grow this community together.", language: "en" },
        { text: "If you're having fun, don't forget to share the live with your friends!", language: "en" },
        { text: "Keep the comments coming! They make the live so much more fun!", language: "en" },
        { text: "A big thanks to everyone who's been following and sharing! You're helping us grow!", language: "en" },
        { text: "Who will be the top follower today? Keep following to find out!", language: "en" },
        { text: "Keep those shares coming! The more we share, the more we grow!", language: "en" },
        { text: "Don't forget to tap the screen if you're enjoying the live! Let's get this to the top!", language: "en" },
        { text: "Keep the follows coming, everyone! Let's build this community together!", language: "en" },
        { text: "Remember, every follow counts! Let's keep growing this amazing community.", language: "en" },
        { text: "Shoutout to everyone who's been gifting! Make sure you follow them.", language: "en" },
        { text: "If you're having fun, don't forget to tap the screen! Let's get this live to the top!", language: "en" },
        { text: "Don't forget to share the live! Let's make this community even bigger!", language: "en" },
        { text: "Keep those follows coming! Every new follower helps us grow!", language: "en" },
        { text: "Topluluğa katıl, takip et ve etkileşime gir", language: "tr" },
        { text: "Beğen ve yorum yap, karşılığında takip ederim", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },

        { text: "Müthişsiniz, teşekkürler", language: "tr" },
        { text: "Thanks to everyone who's been following and sharing! You're making a difference!", language: "en" },
        { text: "Keep the shares coming! Let's get this live out to as many people as possible!", language: "en" },
        { text: "Who will be the top follower today? Keep following to find out!", language: "en" },
        { text: "Don't forget to tap the screen if you're enjoying the live! Let's get this to the top!", language: "en" },
        { text: "If you're having fun, don't forget to share the live with your friends!", language: "en" },
        { text: "Keep the comments coming! They make the live so much more fun!", language: "en" },
        { text: "A big thanks to everyone who's been following and sharing! You're helping us grow!", language: "en" },
        { text: "Who will be the top follower today? Keep following to find out!", language: "en" },
        { text: "Keep those shares coming! The more we share, the more we grow!", language: "en" },
        { text: "Don't forget to tap the screen if you're enjoying the live! Let's get this to the top!", language: "en" },
        { text: "Keep the follows coming, everyone! Let's build this community together!", language: "en" },

        { text: "¡Gracias por sintonizar a todos! ¡Vamos a hacer este directo increíble!", language: "es" },
        { text: "¡No olvides compartir el directo! ¡Vamos a traer a más personas aquí!", language: "es" },
        { text: "¡Recuerda, cuantos más seguidores obtengamos, más crecerá esta comunidad!", language: "es" },
        { text: "¡Toca la pantalla, vamos a hacer tendencia este directo!", language: "es" },
        { text: "¿Quién será el seguidor más destacado del día? ¡Vamos a averiguarlo!", language: "es" },
        { text: "¡Todos, continuemos apoyando! Vamos a subir más!", language: "es" },
        { text: "¡Es hora de crecer juntos! ¡Vamos a seguir a más personas!", language: "es" },
        { text: "¡Gracias por todo el apoyo! ¡Sigamos creciendo!", language: "es" },
        { text: "¡Cada uno de ustedes cuenta! ¡Sigamos apoyándonos mutuamente!", language: "es" },
        { text: "¡Continúa siguiendo, todos! ¡Estamos creciendo cada segundo!", language: "es" },
        { text: "¡Gracias por sintonizar a todos! ¡Vamos a hacer este directo increíble!", language: "es" },
        { text: "¡No olvides compartir el directo! ¡Vamos a traer a más personas aquí!", language: "es" },
        { text: "¡Recuerda, cuantos más seguidores obtengamos, más crecerá esta comunidad!", language: "es" },
        { text: "¡Toca la pantalla, vamos a hacer tendencia este directo!", language: "es" },
        { text: "¿Quién será el seguidor más destacado del día? ¡Vamos a averiguarlo!", language: "es" },
        { text: "¡Hola a todos! Gracias por unirse a la transmisión en vivo.", language: "es" },
        { text: "Recuerda compartir esta transmisión con tus amigos.", language: "es" },
        { text: "¡Cuanto más crezcamos, mejor será para todos nosotros!", language: "es" },
        { text: "No olvides dar me gusta y comentar. ¡Esto nos ayuda a llegar a más gente!", language: "es" },
        { text: "¡Vamos, sigamos creciendo juntos!", language: "es" },
        { text: "Gracias por todos los me gusta y comentarios. ¡Sigamos así!", language: "es" },
        { text: "¡Nunca subestimes el poder de un simple me gusta o compartir!", language: "es" },
        { text: "¡Recuerda, cuanto más interactúes, más creceremos!", language: "es" },
        { text: "¡Agradezco a todos los que están compartiendo y comentando!", language: "es" },
        { text: "Vamos, ¡no dejes de interactuar! ¡Eso nos ayuda a crecer!", language: "es" },
        { text: "¡Vamos a romperla en esta transmisión en vivo!", language: "es" },
        { text: "Me encanta ver a tanta gente apoyándonos.", language: "es" },
        { text: "¡Juntos podemos hacer que esta comunidad sea enorme!", language: "es" },
        { text: "¡Más likes, más comentarios, más crecimiento!", language: "es" },
        { text: "Sigue compartiendo, sigamos creciendo.", language: "es" },
        { text: "Juntos, somos imparáveis!", language: "br" },
        { text: "Cada um de vocês está ajudando a fazer essa comunidade crescer.", language: "br" },
        { text: "Não se esqueça de curtir, comentar e compartilhar.", language: "br" },
        { text: "Cada ação conta para fazer essa comunidade crescer.", language: "br" },
        { text: "Estou tão grato por todo o apoio!", language: "br" },
        { text: "Cada like, cada comentario, cada compartida cuenta.", language: "es" },
        { text: "¡No hay nada que no podamos lograr juntos!", language: "es" },
        { text: "¡Gracias por todo el amor y apoyo!", language: "es" },
        { text: "Vamos a hacer que este sea el directo más grande de TikTok.", language: "es" },
        { text: "¡Cada uno de ustedes hace la diferencia!", language: "es" },

        { text: "Cada seguidor nuevo nos acerca a nuestro objetivo.", language: "es" },
        { text: "No subestimen el poder de un solo like o comentario.", language: "es" },
        { text: "¡Esto no sería posible sin todos ustedes!", language: "es" },
        { text: "Sigamos apoyándonos y creciendo juntos.", language: "es" },
        { text: "Gracias por hacer de este directo algo increíble.", language: "es" },
        { text: "Müthişsiniz, teşekkürler", language: "tr" },
        { text: "Pozitif enerjiyi sürdür, beğen ve takip et", language: "tr" },
        { text: "Birlikte daha güçlüyüz, destekle ve takip et", language: "tr" },
        { text: "Hesabımı takip eden son on kişiyi takip et", language: "tr" },
        { text: "Birlikte güçlüyüz", language: "tr" },
        { text: "Yayımı paylaşanlara takip gönderin", language: "tr" },
        { text: "¡Vamos a llegar a más personas con cada acción!", language: "es" },
        { text: "¡Vamos a hacer que este sea el directo más grande que TikTok haya visto!", language: "es" },
        { text: "Gracias por ser parte de este viaje increíble.", language: "es" },
        { text: "¡Juntos, estamos creando algo especial aquí!", language: "es" },
        { text: "Cada nuevo seguidor nos acerca más a nuestros objetivos.", language: "es" },
        { text: "¡Nunca dejen de apoyar y hacer crecer esta comunidad!", language: "es" },
        { text: "Gracias a todos por su increíble apoyo y amor.", language: "es" },
        { text: "Sigamos haciendo ruido y creciendo juntos.", language: "es" },
        { text: "¡Vamos a hacer de este el directo más grande!", language: "es" },
        { text: "¡Cada uno de ustedes está haciendo la diferencia!", language: "es" },

        { text: "¡Estoy emocionado de ver cuánto más podemos crecer juntos!", language: "es" },
        { text: "¡Esto es solo el comienzo, vamos a hacer grandes cosas juntos!", language: "es" },
        { text: "¡Cada uno de ustedes es increíble, gracias por estar aquí!", language: "es" },
        { text: "Vamos arrebentar nesta transmissão ao vivo!", language: "br" },
        { text: "Adoro ver tantas pessoas nos apoiando.", language: "br" },
        { text: "Juntos, podemos fazer essa comunidade crescer enormemente!", language: "br" },
        { text: "Mais curtidas, mais comentários, mais crescimento!", language: "br" },
        { text: "Continue compartilhando, vamos continuar crescendo.", language: "br" },
        { text: "Cada curtida, cada comentário, cada compartilhamento conta.", language: "br" },
        { text: "Não há nada que não possamos alcançar juntos!", language: "br" },
        { text: "Obrigado por todo o amor e apoio!", language: "br" },
        { text: "Vamos fazer dessa a maior live do TikTok.", language: "br" },
        { text: "Cada um de vocês faz a diferença!", language: "br" },
        { text: "Obrigado por fazer parte desta incrível comunidade.", language: "br" },

        { text: "Nunca pare de crescer e se apoiar.", language: "br" },
        { text: "Cada novo seguidor nos aproxima do nosso objetivo.", language: "br" },
        { text: "Nunca subestime o poder de uma única curtida ou comentário.", language: "br" },
        { text: "Isso não seria possível sem todos vocês!", language: "br" },
        { text: "Vamos continuar a apoiar e crescer juntos.", language: "br" },
        { text: "Obrigado por tornar esta live incrível.", language: "br" },
        { text: "لا تتوقفوا أبدا عن النمو ودعم بعضكم البعض.", language: "ar" },
        { text: "كل متابع جديد يقربنا من هدفنا.", language: "ar" },
        { text: "لا تقللوا أبدا من قوة إعجاب أو تعليق.", language: "ar" },
        { text: "لم يكن هذا كله ممكنا بدونكم!", language: "ar" },
        { text: "لنواصل الدعم والنمو معا.", language: "ar" },
        { text: "شكرا لكم على جعل هذا البث رائع.", language: "ar" },
        { text: "Vamos alcançar mais pessoas com cada ação!", language: "br" },
        { text: "Vamos fazer desta a maior live que o TikTok já viu!", language: "br" },
        { text: "Obrigado por fazer parte desta incrível jornada.", language: "br" },
        { text: "Juntos, estamos criando algo especial aqui!", language: "br" },
        { text: "Cada novo seguidor nos aproxima mais dos nossos objetivos.", language: "br" },
        { text: "Nunca pare de apoiar e fazer esta comunidade crescer!", language: "br" },
        { text: "Obrigado a todos pelo incrível apoio e amor.", language: "br" },
        { text: "Vamos continuar fazendo barulho e crescendo juntos.", language: "br" },
        { text: "Vamos fazer desta a maior live!", language: "br" },
        { text: "İlk üçe gir ve takip al", language: "tr" },
        { text: "Hepinize Teşekkür ederim", language: "tr" },
        { text: "Bir birinize takip gönderin", language: "tr" },
        { text: "Canlını beğenen her kese takip gönderin", language: "tr" },
        { text: "Arkadaşlarını davet eden her kese takip gönderin", language: "tr" },


        { text: "Cada um de vocês está fazendo a diferença!", language: "br" },
        { text: "Obrigado a todos por fazerem parte desta incrível comunidade!", language: "br" },
        { text: "Vamos continuar a crescer e a apoiar uns aos outros!", language: "br" },
        { text: "Não há nada que não possamos alcançar juntos!", language: "br" },
        { text: "Estou tão grato a todos vocês!", language: "br" },
        { text: "Vamos fazer desta live uma lenda!", language: "br" },
        { text: "Cada curtida, cada comentário, cada compartilhamento conta.", language: "br" },
        { text: "Estou animado para ver o quanto mais podemos crescer juntos!", language: "br" },
        { text: "Isto é apenas o começo, vamos fazer grandes coisas juntos!", language: "br" },
        { text: "Cada um de vocês é incrível, obrigado por estarem aqui!", language: "br" },
        { text: "لنجعل هذا البث مباشر مذهلاً!", language: "ar" },
        { text: "أنا أحب أن أرى العديد من الأشخاص الذين يدعموننا.", language: "ar" },
        { text: "معا يمكننا جعل مجتمعنا كبيرا بشكل لا يصدق!", language: "ar" },
        { text: "المزيد من الإعجابات، المزيد من التعليقات، المزيد من النمو!", language: "ar" },
        { text: "واصلوا المشاركة، سنستمر في النمو.", language: "ar" },
        { text: "كل إعجاب، كل تعليق، كل مشاركة تحسب.", language: "ar" },
        { text: "لا يوجد شيء لا يمكننا تحقيقه معا!", language: "ar" },
        { text: "شكرا لكم على كل الحب والدعم!", language: "ar" },
        { text: "لنجعل هذا البث المباشر الأكبر في تيك توك.", language: "ar" },
        { text: "¡Gracias a todos por ser parte de esta increíble comunidad!", language: "es" },
        { text: "¡Sigamos creciendo y apoyándonos mutuamente!", language: "es" },
        { text: "¡No hay nada que no podamos lograr juntos!", language: "es" },
        { text: "¡Estoy tan agradecido por todos ustedes!", language: "es" },
        { text: "¡Vamos a hacer que este directo sea legendario!", language: "es" },
        { text: "Cada me gusta, cada comentario, cada compartida cuenta.", language: "es" },
        { text: "كل واحد منكم يحدث فرقا!", language: "ar" },
        { text: "شكرا لكم على أنكم جزء من هذا المجتمع المدهش.", language: "ar" },
        { text: "معا نحن لا يمكن إيقافنا!", language: "ar" },
        { text: "كل واحد منكم يساعد مجتمعنا على النمو.", language: "ar" },
        { text: "لا تنسوا أن تضغطوا على الإعجاب، وتعليق، والمشاركة.", language: "ar" },
        { text: "كل عمل يساهم في نمو مجتمعنا.", language: "ar" },
        { text: "أنا ممتن للغاية لكل الدعم!", language: "ar" },

        { text: "لنجذب المزيد من الناس بكل عمل!", language: "ar" },
        { text: "لنجعل هذا البث المباشر الأكبر الذي شهده تيك توك!", language: "ar" },
        { text: "شكرا لكم على أنكم جزء من هذه الرحلة المدهشة.", language: "ar" },
        { text: "معا نحن نخلق شيئا خاصا هنا!", language: "ar" },
        { text: "كل متابع جديد يقربنا من أهدافنا.", language: "ar" },

        { text: "لنجعل هذه البث أسطوريا!", language: "ar" },
        { text: "كل إعجاب، كل تعليق، كل مشاركة مهم.", language: "ar" },
        { text: "أنا متحمس لرؤية كيف يمكننا النمو معا بعد!", language: "ar" },
        { text: "هذه هي البداية فقط، دعونا نحقق الأشياء الكبيرة معا!", language: "ar" },
        { text: "كل واحد منكم مدهش!", language: "ar" },



    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    messagesQueue.push({ ...randomMessage, type: 'random' }); // type ekle
    processQueue();
}

setInterval(addRandomMessage, 10000);


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
                case 'br':
                    // İngilizce seslendirme
                    responsiveVoice.speak(message, "Portuguese Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
                    break;
                case 'es':
                    // İngilizce seslendirme
                    responsiveVoice.speak(message, "Spanish Latin American Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
                    break;
                case 'ar':
                    // İngilizce seslendirme
                    responsiveVoice.speak(message, "Arabic Male", { rate: defaultRate, volume: volumeLevel, onend: onEnd });
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
