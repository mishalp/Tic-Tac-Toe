

const GameBoard = (()=>{
    const Players = () => {
        let sign = ""
        const dis = ()=> console.log(sign);
        return {sign, dis}
    };
    
    const playerOne = Players();
    const playerTwo = Players();
    
    playerOne.sign = 'X';
    playerTwo.sign = 'O';
    
    var playerOneTrue = true;

    var gameBorad = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    var blocks = document.querySelectorAll('.block');
    var clicks = 0;
    const init = ()=>{
        render();
        clickListener();
    }

    const render = ()=>{
        blocks.forEach((block, i) =>{
            block.innerHTML = gameBorad[i];
        })
    } 

    const clickListener = ()=>{
        blocks.forEach(block =>{
            block.addEventListener("click", clicker)
        })
    }

    const gameController = (sign)=>{
        if(gameBorad[0] == sign){
            if(gameBorad[1] == sign && gameBorad[2] == sign){
                win(sign);
            }else if(gameBorad[4] == sign && gameBorad[8] == sign){
                win(sign);
            }else if(gameBorad[3] == sign && gameBorad[6] == sign){
                win(sign);
            }
        }
        if(gameBorad[1] == sign){
            if(gameBorad[4] == sign && gameBorad[7] == sign){
                win(sign);
            }
        }
        if(gameBorad[2] == sign){
            if(gameBorad[5] == sign && gameBorad[8] == sign){
                win(sign);
            }else if(gameBorad[4] == sign && gameBorad[6] == sign){
                win(sign);
            }
        }
        if(gameBorad[3] == sign){
            if(gameBorad[4] == sign && gameBorad[5] == sign){
                win(sign);
            }
        }
        if(gameBorad[6] == sign){
            if(gameBorad[7] == sign && gameBorad[8] == sign){
            win(sign);
            }
        }else return
    }

    const win = (sign)=>{
        console.log(`${sign} is the winner`);
    }

    const clicker = (e)=>{
        clicks++;
        var sign = playerOneTrue ? playerOne.sign  : playerTwo.sign;
        var index = e.composedPath()[0].dataset.index;
        if(gameBorad[index] != ' '){
            return
        }
        gameBorad.splice(index, 1, sign)
        render()
        if(clicks >= 5){
            playerOneTrue? gameController(playerOne.sign) : gameController(playerTwo.sign);  
            }
        playerOneTrue = playerOneTrue? false : true;
    }
    return {init};
})();

GameBoard.init()


