
let computerNum = 0;
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let userInput = document.getElementById("user-input");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver = false;
let history=[]

playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor (Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요."
        return;
    }
    
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chance--;
    chanceArea.textContent = `남은 찬스 : ${chance}번`;

    if (userValue < computerNum){
        resultArea.textContent = "UP!"
    } else if (userValue > computerNum){
        resultArea.textContent = "DOWN!"
    } else {
        resultArea.textContent = "맞추셨습니다!"
        gameOver = true;
    }

    history.push(userValue)
    console.log(history);

    if (chance < 1){
        gameOver = true;
        resultArea.textContent = "다음 기회에.."
    }

    if(gameOver == true){
        playButton.disabled = true;
    }

}

function reset(){
    userInput.value = "";
    chance = 5;
    history = [];
    pickRandomNum();
    playButton.disabled = false;
    chanceArea.textContent="남은 찬스 : 5번"
    resultArea.textContent = "이번엔 꼭 맞출 수 있기를!!"
}

pickRandomNum();

