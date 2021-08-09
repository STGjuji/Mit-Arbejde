const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    }

    draw() {
     c.begingPath()
     c.arc(this.x, this,y, this.radius, 0, Math.PI * 2, false)
     c.fill()
    }
}

const player = new Player(100, 100, 30, 30, 'blue')
player.draw()

console.log(Player)

console.log(canvas)