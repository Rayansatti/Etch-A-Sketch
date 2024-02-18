//create grid divs

const container = document.querySelector('.container');
let sideCount = 16;

const input = document.getElementById('side');

document.getElementById('sideNumber').addEventListener("submit", function (event) {
    event.preventDefault();

    let sideCount2 = document.getElementById('side').value;
    sideCount = sideCount2;

    for(let i = 0; i < sideCount; i++){
        for(let j = 0; j < sideCount; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }

    //return sideCount;

} )



const cell = document.createElement('div');

container.addEventListener(
    "mouseover", (event) => {
        event.target.style.backgroundColor = 'blue';
    }
)