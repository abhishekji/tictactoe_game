const elemObj = {};
const gameElem = Array.from(document.getElementsByClassName('gameElem'));
gameElem.forEach((elem, index) => {
  elem.addEventListener('click', function(event) {
        this.innerHTML = 'X';
        const index = event.target.dataset.index;
        console.log(index);
        elemObj[index] = true;
        gameElem[index].disabled = true;
        systemTurn(index);
        if (winningCombinations()) {
            for(let i=0; i< gameElem.length; i++) {
              gameElem[i].disabled = true;
            }
        } else {
          if (Object.keys(elemObj).length  > 4) {
            document.getElementById('result').innerHTML = 'Match Draw';
            }
        }
    });
});
function systemTurn(index) {
  if (Object.keys(elemObj).length === 1) {
        let i = ((parseInt(10 * Math.random())) % 9);
        if (i === index) {
          i = i + 1;
        }
        gameElem[i].innerHTML = '0';
        gameElem[i].disabled = true;
    } else {
      if (elemObj[0] && elemObj[1]) {
           if (newEntryWithCheck(2)) {
               return;
           }
        } 
        if (elemObj[0] && elemObj[2]) {
            if (newEntryWithCheck(1)) {
               return;
           }
        }
        if (elemObj[1] && elemObj[2]) {
            if (newEntryWithCheck(0)) {
               return;
            }
        }
        if (elemObj[0] && elemObj[3]) {
            if (newEntryWithCheck(6)) {
               return;
            }
        }
        if (elemObj[0] && elemObj[6]) {
            if (newEntryWithCheck(3)) {
               return;
            }
        }
        if (elemObj[3] && elemObj[6]) {
            if (newEntryWithCheck(0)) {
               return;
            }
        }
        if (elemObj[0] && elemObj[4]) {
            if (newEntryWithCheck(8)) {
               return;
            }
        }
        if (elemObj[0] && elemObj[8]) {
            if (newEntryWithCheck(4)) {
               return;
            }
        }
        if (elemObj[4] && elemObj[8]) {
            if (newEntryWithCheck(0)) {
               return;
            }
        }
        if (elemObj[3] && elemObj[4]) {
            if (newEntryWithCheck(5)) {
               return;
            }
        }
        if (elemObj[3] && elemObj[5]) {
            if (newEntryWithCheck(4)) {
               return;
            }
        }
        if (elemObj[4] && elemObj[5]) {
            if (newEntryWithCheck(3)) {
               return;
            }
        }
        if (elemObj[6] && elemObj[7]) {
            if (newEntryWithCheck(8)) {
               return;
            }
        }
        if (elemObj[6] && elemObj[8]) {
            if (newEntryWithCheck(7)) {
               return;
           }(7)
        }
        if (elemObj[7] && elemObj[8]) {
            if (newEntryWithCheck(6)) {
               return;
           }(6)
        }
        if (elemObj[1] && elemObj[4]) {
            if (newEntryWithCheck(7)) {
               return;
           }
        }
        if (elemObj[1] && elemObj[7]) {
            if (newEntryWithCheck(4)) {
               return;
           }
        }
        if (elemObj[4] && elemObj[7]) {
            if (newEntryWithCheck(1)) {
               return;
           }
        }
        if (elemObj[2] && elemObj[5]) {
            if (newEntryWithCheck(8)) {
               return;
           }
        }
        if (elemObj[2] && elemObj[8]) {
            if (newEntryWithCheck(5)) {
               return;
           }
        }
        if (elemObj[5] && elemObj[8]) {
            if (newEntryWithCheck(2)) {
               return;
           }
        }
        if (elemObj[2] && elemObj[4]) {
            if (newEntryWithCheck(6)) {
               return;
           }
        }
        if (elemObj[2] && elemObj[6]) {
            if (newEntryWithCheck(4)) {
               return;
           }
        }
        if (elemObj[4] && elemObj[6]) {
            if (newEntryWithCheck(2)) {
               return;
           }
        }
        for(let i=0; i< gameElem.length; i++) {
          if (gameElem[i].disabled === true) {
              continue;
            }
            newEntryWithCheck(i);
            break;
        }      
    }
}

function newEntryWithCheck(index) {
    if (!gameElem[index].disabled) {
        gameElem[index].innerHTML = '0';
        gameElem[index].disabled = true;
        return true;
    }
    return false;
}

function winningCombinations () {
    const winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i=0; i < winCombo.length; i++) {
        const [first, second, third] = winCombo[i];
        if ((gameElem[first].innerHTML === gameElem[second].innerHTML) && (gameElem[first].innerHTML=== gameElem[third].innerHTML)) {
            if (gameElem[first].innerHTML === '0') {
                document.getElementById('result').innerHTML = 'Match won by - Player B';
                return true;
            } else if (gameElem[first].innerHTML === 'X') {
                document.getElementById('result').innerHTML = 'Match won by - Player A';
                return true;
            }
        }   
    }
}

function reset() {
  for(let i=0; i< gameElem.length; i++) {
      gameElem[i].disabled = false;
        gameElem[i].innerHTML = '-';
    }
}
