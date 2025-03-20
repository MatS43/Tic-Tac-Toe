const gameboard = function(){
    const gameboardArray=["","","","","","","","",""];
    const playerOneMove = function(square){
        gameboardArray.splice(square,1,"x")
    }
    const playerTwoMove = function(square){
        gameboardArray.splice(square,1,"o")
    }
    const tallyScore = function(){
        const winningCombinations=[
            [0,1,2]
            [3,4,5]
            [6,7,9]
            [0,3,6]
            [1,4,7]
            [2,5,9]
            [0,4,9]
            [2,4,6]
        ]
        for(let i=0; i<winningCombinations.length; i++){
            const condition = winningCombinations[i];
            const cellA = gameboardArray[condition[0]];
            const cellB = gameboardArray[condition[1]];
            const cellC = gameboardArray[condition[2]];
            if(cellA==""|| cellB==""||cellC==""){
                continue;
            }
            if(cellA===cellB&&cellB===cellC){
                break;
            }
            else if(!gameboardArray.includes("")){
                console.log("draw")
            }
        }
    }
}