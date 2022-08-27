
function populateBoard(size) {
    let board = document.querySelector('.board');
//reset the divs for the new input
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
//make a grid for the divs
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    
//create a loop to build all the divs    
    for(let i = 0; i < amount; i++){
//create the divs for the board grid
        let square = document.createElement('div');
//add a event listener that changes color on mouseover
        square.addEventListener('mouseover', colorSquare);
//give the divs color
        square.style.backgroundColor = 'white';
//add the divs to the grid
        board.insertAdjacentElement("beforeend", square);
    }   
}
populateBoard(16);

//make a function that takes the input and return a error if its over 100
function changeSize (input){
    if(input > 2 && input < 100 ){
        populateBoard(input)
    }else{
        console.log("To Manny Squares!")
    }
}

function colorSquare() {
    this.style.backgroundColor = "black"
}
