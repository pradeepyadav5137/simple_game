const startButton = document.querySelector("#screen1 button");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");
const characters = document.querySelectorAll("#screen2 img");
const mainDiv = document.querySelector(".main");
let timer = document.querySelectorAll(".top span")

startButton.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";
};

for (let i = 0; i < characters.length; i++) {
  characters[i].onclick = (e) => {
    e.preventDefault();
    console.log(e);
    startTheGame(e);
  };
}

function startTheGame(event) {
  screen2.style.display = "none";
  screen3.style.display = "flex";
  const screenWidth = window.innerWidth ;
  const screenHeight = window.innerHeight ;

  let xPosition; 
  let yPosition;

  let interval = setInterval(() => {


    const thumbnail = document.createElement("img");
    thumbnail.src = event.target.src;

  


    let xPosition =   checkx();
    let yPosition =   checky();

    //     if(xPosition<0){
    //       return Math.random()
    //     }
    //     else
    //    { return xPosition;
    // }
    //     if(yPosition<0){
    //       return Math.random()
    //     }
    //     else
    //    { return yPosition;}



    thumbnail.style.top = yPosition + "px"
    thumbnail.style.left = xPosition + "px"

    mainDiv.append(thumbnail);

    timer[0].innerHTML = appendZero(Number(timer[0].innerHTML) + 1);

    if (timer[0].innerHTML === "05") {
      clearInterval(interval);
      showFinalScore(timer[1].innerHTML);
    }

    function appendZero(Zero) {
      if (Zero < 10)
        return "0" + Zero;
      if (Zero >= 60) {
        return "00";
      }
      else
        return Zero;
    }

    thumbnail.onclick = () => {
      removeImage(thumbnail);
      timer[1].innerHTML = appendZero(Number(timer[1].innerHTML) + 1);
    };

    function removeImage(image) {
      image.style.display = "none";
    }
  }, 1000);
  function checkx() {

    let x = Math.random() * screenWidth;
  
    if (x < 0  || x> 1000 ) {
      return checkx();
    }
    else {
      return x;
    }
  }
  
  function checky() {
  
   let y = Math.random() * screenHeight;
  
  
    if (y < 0 || y> 500) {
      return checky();
    }
    else {
      return y;
    }
  }
  
}


function showFinalScore(score) {
  screen3.style.display = "flex";
  screen3.style.Position = "relative";

  // screen3.style = ba
  
  screen4.style.display = "flex";
  const finalScoreSpan = document.getElementById("final-score");
  finalScoreSpan.textContent = score;
}


