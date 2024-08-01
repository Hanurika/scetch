const root = document.querySelector('#scetch')
const countainer = document.createElement('div')
countainer.classList.add('countainer')


root.append(countainer)
const getRgbNum = () => Math.floor(Math.random() * 255)
const getRandomColor = () => `rgb(${getRgbNum()}, ${getRgbNum()}, ${getRgbNum()})`

const cellsAdd = (num) => {
    countainer.style.gridTemplateRows = `repeat(${num}, 1fr)`; 
    countainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for(let i = 0; i < num * num; i++){
        const cells = document.createElement('div')
        cells.style.border = '1px solid'
        
        cells.addEventListener('mouseenter', () => cells.style.backgroundColor = getRandomColor())
        
        countainer.append(cells)
    }


    
}
cellsAdd(16)