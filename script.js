const Btnelement = document.querySelectorAll('[data-selection]');
const results = document.getElementById("results");
const you = document.getElementById("yourSelection");
const computer = document.getElementById("computerSeletion");
let YW =0;
let CW =0;
const SELECTION = [
    {
        name: 'Rock',
        beats: 'Scissor'
    },
    {
        name:'Paper',
        beats:'Rock'
    },
    {
        name:'Scissor',
        beats:'Paper'
    }
]
Btnelement.forEach(selectionButton => {
    selectionButton.addEventListener('click',e =>{
        const BtnName = selectionButton.dataset.selection
        const selection = SELECTION.find(selection => selection.name === BtnName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    
    if(isWinner(selection,computerSelection)){
        YW++;
        console.log(YW)
      results.textContent =   "You Won"
      you.textContent ="Your Selection :"+ selection.name
      computer.textContent="Computer Selection :"+computerSelection.name;
    }
    if(isWinner(computerSelection,selection)){
        CW++;
        console.log(CW);

        results.textContent = "Computer Won "
        you.textContent ="Your Selection :"+ selection.name;
        computer.textContent = "Computer Selection :"+computerSelection.name
    }
    if(isTie(selection,computerSelection)){
        results.textContent = "Tie";
        you.textContent = "Your Selection :"+ selection.name;
        computer.textContent = "Computer Selection :"+computerSelection.name
    }

}

function randomSelection() {
    randomSelect = Math.floor(Math.random()*SELECTION.length)
    return SELECTION[randomSelect]
}
function isWinner(selection,opponentSelection){
    return selection.beats ===opponentSelection.name
}
function isTie(selection,opponentSelection){
    return selection.name ===opponentSelection.name;
}