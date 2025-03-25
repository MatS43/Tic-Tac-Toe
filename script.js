const game = (function(){
    const cells= document.querySelectorAll(".cell");
    const text = document.querySelector("p");
    const button = document.querySelector("#restart");
    const winningCombinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    let options=["","","","","","","","","",];
    let currentPlayer="X";
    let running=false;

    initializeGame();
    function initializeGame(){
        cells.forEach(cell => cell.addEventListener("click", cellClicked));
        button.addEventListener("click", restartGame);
        text.textContent = `${currentPlayer}'s turn`;
        running = true;
    }
    function cellClicked(){
        const cellIndex = this.getAttribute("cellIndex");

        if (options[cellIndex] !="" || !running){
            return;
        }
        updateCell(this, cellIndex);
        checkWinner();
    }    
    function updateCell(cell, Index){
        options[Index] = currentPlayer;
        cell.textContent = currentPlayer;

    }
    function changePlayer(){
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        text.textContent = `${currentPlayer}'s turn`;
    }
    function checkWinner(){
        let roundWon = false;

        for (let i = 0; i < winningCombinations.length;i++){
            const condition = winningCombinations[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];

            if(cellA==""||cellB==""||cellC==""){
                continue;
            }
            if(cellA==cellB&&cellB==cellC){
                roundWon=true;
                break
            }

        }
        if(roundWon){
            text.textContent=`${currentPlayer} wins!`
            running=false;
        }
        else if(!options.includes("")){
            text.textContent="Draw";
            running=false;
        }
        else{
            changePlayer();
        }
    }
    function restartGame(){
        currentPlayer = "X"
        options=["","","","","","","","","",];
        text.textContent=`${currentPlayer}'s turn`;
        cells.forEach(cell => cell.textContent="");
        running=true;
    }
})();