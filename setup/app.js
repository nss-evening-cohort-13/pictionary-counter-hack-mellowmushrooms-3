var score = 0
const init = ()=>{
    
    printToDom('score', score);
    buttonEvents();

}
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
const buttonEvents = ()=>{
    document.getElementById('increase').addEventListener('click', increaseFunc )
  
  document.getElementById('decrease').addEventListener('click', decreaseFunc)
  document.getElementById('reset').addEventListener('click', resetNum)
  }

const colorChanger = ()=> 

const increaseFunc = () =>{
    if (score >= 0) {
        document.getElementById("score").innerHTML = score++;
        document.getElementById('score').innerHTML.style.color = 'green'
      }
     
    }
const decreaseFunc = () =>{
    document.getElementById("score").innerHTML = score--;
}
const resetNum = () =>{
    score = 0
    document.getElementById("score").innerHTML = score;
}


init()