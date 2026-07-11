

const typing = document.querySelector(".typing");

const text = "Hai Sayangku";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 90);

    }

}

typeEffect();


/*====================================

          Open Website

====================================*/

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.querySelector(".letter").classList.remove("hidden");

    document.querySelector(".gallery").classList.remove("hidden");

    document.querySelector(".reasons").classList.remove("hidden");

    document.querySelector(".secret").classList.remove("hidden");

    document.querySelector(".question").classList.remove("hidden");

    document.querySelector(".ending").classList.remove("hidden");

    startBtn.style.display = "none";

    document.querySelector(".letter").scrollIntoView({

        behavior: "smooth"

    });

});


/*====================================

          Secret Button

====================================*/

const secretBtn = document.getElementById("openSecret");

const secretText = document.getElementById("secretText");

secretBtn.addEventListener("click", () => {

    secretText.classList.remove("hidden");

    secretBtn.style.display = "none";

});


/*====================================

          Mood Button

====================================*/

const happy = document.getElementById("happy");

const sad = document.getElementById("sad");

const answer = document.getElementById("answer");

happy.onclick = () => {

    answer.innerHTML = "🥹 Yeayyy... berarti website kecil ini berhasil.";

}

sad.onclick = () => {

    answer.innerHTML = "🥺 Gapapa... aku bakal terus berusaha bikin kamu senyum lagi.";

}


/*====================================

          Replay

====================================*/

const replay = document.getElementById("replay");

replay.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/*====================================

       Floating Hearts

====================================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = Math.random() * 18 + 12 + "px";

    heart.style.opacity = .7;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const speed = Math.random() * 1 + .5;

    function animate() {

        pos -= speed;

        heart.style.top = pos + "px";

        heart.style.opacity -= .002;

        if (pos < -50) {

            heart.remove();

        } else {

            requestAnimationFrame(animate);

        }

    }

    animate();

}

setInterval(createHeart, 900);


/*====================================

      Reveal Animation

====================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(sec => {

    sec.style.opacity = 0;

    sec.style.transform = "translateY(80px)";

    sec.style.transition = ".8s";

    observer.observe(sec);

});


/*====================================

        Aurora Movement

====================================*/

const aurora = document.querySelector(".aurora");

let angle = 0;

function moveAurora() {

    angle += .2;

    aurora.style.transform = `translateY(${Math.sin(angle * 0.05) * 30}px) rotate(${angle * .08}deg)`;

    requestAnimationFrame(moveAurora);

}

moveAurora();


/*====================================

        Mouse Glow

====================================*/

document.addEventListener("mousemove", e => {

    document.documentElement.style.setProperty("--mouseX", e.clientX + "px");

    document.documentElement.style.setProperty("--mouseY", e.clientY + "px");

});

