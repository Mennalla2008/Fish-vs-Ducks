document.addEventListener("DOMContentLoaded", function () {
    let quackSound = document.getElementById("quack-sound");
    let fishSong = document.getElementById("fish-song");
    let escapeBtn = document.getElementById("escape-btn");
    let stopAttackBtn = document.getElementById("stop-attack");
    let callSupportBtn = document.getElementById("call-support");
        let duckCount = 0;

    function createDuck() {
        let duck = document.createElement("img");
        duck.src = "duck.png";
        duck.classList.add("duck");
        document.body.appendChild(duck);

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        duck.style.left = x + "px";
        duck.style.top = y + "px";

        duck.addEventListener("click", function () {
            quackSound.play();
            duck.remove();
            duckCount--;
        });

        setTimeout(() => {
            duck.remove();
            duckCount--;
        }, 7000);

        duckCount = duckCount + 2;
        if (duckCount >= 10) {
            callSupportBtn.style.display = "block";
        }

        shakeScreen();
    }

    function startDuckAttack() {
        setInterval(createDuck, 500);
    }

    function shakeScreen() {
        if (duckCount >= 10) {
            document.body.style.animation = "shake 0.2s infinite";
        }
    }

    function callSupport() {
        document.body.style.animation = "";
        document.body.innerHTML = "";

        let fish = document.createElement("img");
        fish.src = "download-removebg-preview.png";
        fish.classList.add("fish");
        document.body.appendChild(fish);
        fish.style.display = "block";
        setTimeout(() => {
            fishSong.play();
            for (let i = 0; i < 20; i++) {
                let dancingFish = document.createElement("img");
                dancingFish.src = "small_fish.png";
                dancingFish.classList.add("dancing-fish");
                dancingFish.style.left = Math.random() * window.innerWidth + "px";
                dancingFish.style.top = Math.random() * window.innerHeight + "px";
                document.body.appendChild(dancingFish);
            }
            changeBackgroundColors();
        }, 2000);
    }

    function changeBackgroundColors() {
        setInterval(() => {
            let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }, 500);
    }

    escapeBtn.addEventListener("click", function () {
        alert("لا مفر! البط قادم!");
    });

    stopAttackBtn.addEventListener("click", function () {
        alert("بدل ما توقف الهجوم، زاد البط! 😱");
        startDuckAttack();
    });

    callSupportBtn.addEventListener("click", callSupport);

    startDuckAttack();
});