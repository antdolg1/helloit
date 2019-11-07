let fields = [];
let isXMove = true;
let counter = null;
let possibleVictoryPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
/*checks if there is a winner*/
function checkWin() {
    for (let position of possibleVictoryPositions) {
        let pos1 = position[0], pos2 = position[1], pos3 = position[2];
        let f1 = fields[pos1], f2 = fields[pos2],  f3 = fields[pos3];

        if (f1 == f2 && f2 == f3 && f1 != undefined) {
            alert(f1 == true ? 'BLACK WON' : 'RED WON');
            resetGame();

        }
       
    }
}

function checkDraw(){
    for (let position of possibleVictoryPositions) {
        let pos1 = position[0], pos2 = position[1], pos3 = position[2];
        let f1 = fields[pos1], f2 = fields[pos2],  f3 = fields[pos3];

        if (f1!=f2 && f2!=f3) {
            alert('DRAW');
            return true;
        }    
    }
    return false;        
}

function makeMove(fieldNumber) {
    if (fields[fieldNumber] === undefined) {
        fields[fieldNumber] = isXMove;
    } else {
        console.log('Please make move in empty slot');
        return;
    }
    color(fieldNumber);

    isXMove = !isXMove;
    counter++;
    if(checkWin()) {
        return;
    };
    if (counter == 9){
    	checkDraw();
    }

}


function color(fieldNumber) {
    let field = document.getElementById('d' + fieldNumber);

    if (isXMove) {
        field.style.background = 'black';
    } else {
        field.style.background = 'red';
    }
}

function resetGame() {
   location.reload();
}
