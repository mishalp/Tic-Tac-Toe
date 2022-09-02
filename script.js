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
    var wins = false

    var gameBorad = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    var blocks = document.querySelectorAll('.block');
    var display = document.getElementById('gameBoard')
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

    const gameController = (sign)=>{;
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
        }
        if(clicks >= 9 && !wins){
            draw()
        }else return
    }

    const win = (sign)=>{
        wins = true
        const myTimeout = setTimeout(()=>{
            alert(`${sign} is the winner`);
            display.innerHTML = "";
            displayWinner();
        }, 100)
    }

    const displayWinner = ()=>{
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('inp');
        input.setAttribute('id', 'inp')
        input.required = true
        const name = document.createElement('p');
        name.classList.add('name')
        name.innerHTML = "Enter your Name:"
        display.classList.add('display-winner')
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = "Submit"
        btn.addEventListener('click', submit)

        display.appendChild(name)
        display.appendChild(input);
        display.appendChild(btn)
    }

    const submit = ()=>{
        var name = document.getElementById('inp').value;
        gameBorad.innerHTML = "";
        const txt = document.createElement('p');
        txt.classList.add('great');
        txt.innerHTML = `Congratulations ${name}`
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = "Restart"
        btn.addEventListener('click', restart)

        display.innerHTML = ""
        display.appendChild(txt)
        display.appendChild(btn)
    }

    const restart = ()=>{
        location.reload()
    }

    const draw = ()=>{
        display.innerHTML = "";
        display.classList.add('display-winner')
        const txt = document.createElement('p');
        txt.classList.add('great');
        txt.innerHTML = 'The game is Draw';
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = "Restart"
        btn.addEventListener('click', restart)
        display.appendChild(txt)
        display.appendChild(btn)
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


