const board = document.querySelector('#board')
const SQUARE_NUMBER = 400
const colors = ['#FF69B4', '#DA70D6', '#DC143C', '#FF4500', '#FFFF00', '#00FA9A', '#7FFFD4', '#1E90FF', '	#DAA520', '	#FFF0F5', '	#708090']

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

const setColor = (element) => {
    const color = getRandmColor()
    element.style.backgroundColor = (color)
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = (element) => {
    element.style.backgroundColor = ('rgb(140, 140, 140)')
    element.style.boxShadow = `0 0 2px #111`
}

const getRandmColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}