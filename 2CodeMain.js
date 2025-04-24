//NEW CODE
let secondCode22 = document.getElementById("secondCode22"); //This ID is not in the HTML; you'll need to add it.
let buttonCode22 = document.getElementById("buttonCode22");
let inputCode22 = document.getElementById("inputCode22");
let loading22 = document.getElementById("loading22");
let pleaseWait22 = document.getElementById("pleaseWait22");
let stage22 = document.getElementById("stage22");
let go22 = document.getElementById("go22");
let respectButton22 = document.getElementById("respectButton22");
let achievement22 = document.getElementById("achievement22");
let showStage22 = document.getElementById("showStage22");
let achievementPic22 = document.getElementById("achievementPic22");
let achievementDiv22 = document.getElementById("achievementDiv22");
let respectPic22 = document.getElementById("respectPic22");
let daisy22 = document.getElementById("daisy22");
let jumpscare22 = document.getElementById("jumpscare22");
let audioPlayer22 = document.getElementById("audioPlayer22"); // Added

let attempts22 = 10;

let t22 = 0;
go22.addEventListener("click", function() {
  t22++;
  setTimeout(() => {
    terrifying22.style.display = "block";
    jumpscare22.play();
    setTimeout(() => {
      terrifying22.style.display = "none";
    }, 1000);
  }, 1);
  if (t22 >= 3) {
    setTimeout(() => {
      terrifying22.style.display = "block";
      setTimeout(() => {
        alert("why?");
        alert("why why???");
        setTimeout(() => {
          alert(":)");
          alert(":,)");
          setTimeout(() => {
            alert(":,(");
            setTimeout(() => {
              alert("System alert: Unknown.");
              alert("repeat: GPS detected");
              alert("watch out on your flashlight");
              setTimeout(() => {
                navigator.mediaDevices.getUserMedia({
                  video: {
                    facingMode: "environment",
                    torch: true,
                  },
                });
              }, 1);
              setTimeout(() => {
                window.location.href = "credits.html";
              }, 6500);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2500);
    }, 2500);
    daisy22.play();
  }
});

respectButton22.addEventListener("click", function() {
  showStage22.style.display = "block";
  respect22.play();
  achievement22.play();
  console.log("ffdd");
  respectButton22.style.display = "none";
  setTimeout(() => {
    achievementDiv22.style.opacity = "1";
    respectPic22.classList.add("show");
    setTimeout(() => {
      respectPic22.classList.add("hide");
    }, 7000);
  }, 1800);
});

buttonCode22.addEventListener("click", function() {
  if (inputCode22.value != "8080") {
    attempts22--;
    alert("attempts remaining: ???");
  }
});

setTimeout(() => {
  secondCode22.classList.add("show");
}, 1000);

setTimeout(() => {
  loading22.classList.add("show");
  setTimeout(() => {
    loading22.style.display = "none";
    pleaseWait22.classList.add("show");
    setTimeout(() => {
      pleaseWait22.style.display = "none";
      stage22.classList.add("show");
      go22.classList.add("show");
    }, 4000);
  }, 4000);
}, 1);

const buttons22 = document.querySelectorAll('button');
buttons22.forEach(button => {
  button.addEventListener('click', () => {
    audioPlayer22.play();
  });
});
