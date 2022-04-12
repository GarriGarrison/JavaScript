//* Прямоугольник
ctx.fillRect(0, 0, 100, 100)
ctx.fillStyle = '#0000ff'
ctx.fillRect(100, 100, 200, 200)

//* Линия
ctx.beginPath()
ctx.moveTo(300, 300)
ctx.lineTo(400, 400)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = '#ff0000'
ctx.moveTo(320, 300)
ctx.lineTo(400, 400)
ctx.stroke()
ctx.closePath()

//* Текст
ctx.font = '30px Arial'
ctx.textAlign = 'left'
ctx.textBaseline = 'top'
ctx.fillText('Hello JavaScript', 300, 400)
ctx.fillRect(300, 400, 2, 2)
