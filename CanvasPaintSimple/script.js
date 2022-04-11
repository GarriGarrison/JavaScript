const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')
const RADIUS = 5
let isMouseDown = false
let coords = []

canv.width = window.innerWidth
canv.height = window.innerHeight

canv.addEventListener('mousedown', () => {
  isMouseDown = true
})

canv.addEventListener('mouseup', () => {
  isMouseDown = false
  ctx.beginPath()
  coords.push('mouseup')
})

ctx.lineWidth = RADIUS * 2
canv.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    coords.push([e.clientX, e.clientY])
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(e.clientX, e.clientY, RADIUS, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
  }
})

const save = () => {
  localStorage.setItem('coords', JSON.stringify(coords))
}

const clear = () => {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canv.width, canv.height)
  ctx.beginPath()
  ctx.fillStyle = 'black'
}

const replay = () => {
  timer = setInterval(() => {
    if (!coords.length) {
      clearInterval('timer')
      ctx.beginPath()
      return
    }

    const crd = coords.shift()
    const position = {
      clientX: crd['0'],
      clientY: crd['1'],
    }

    ctx.lineTo(position.clientX, position.clientY)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(position.clientX, position.clientY, RADIUS, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(position.clientX, position.clientY)
  }, 10) //? or 30
}

document.addEventListener('keydown', (e) => {
  //* down key --> s  (сохранить)
  if (e.key === 's') {
    save()
    console.log('Saved')
  }

  //* down key --> r (возпроизвести)
  if (e.key === 'r') {
    coords = JSON.parse(localStorage.getItem('coords'))
    clear()
    replay()
    console.log('Replaying...')
  }

  //* down key --> c (очистка)
  if (e.key === 'c') {
    clear()
    console.log('Cleared')
  }
})
