const canv = document.getElementById('canvas')
const ctx = canv.getContext('2d')

const canvWidth = canv.clientWidth
const canvHeight = canv.clientHeight

const SHIFT_NUMBER_NAMES = 5
const SHIFT_AXIS_NAMES = 20

let viewScale = 0
let viewGraph = 0

/**
 * Очистка canvas
 */
const clear = () => {
  ctx.fillStyle = '#ead9ce' //canv.style.background
  ctx.fillRect(0, 0, canv.width, canv.height)
  ctx.beginPath()
}

/**
 * Рисуем сетку
 * @param {number} scaleX - масшаб по оси X
 * @param {number} scaleY - маштаб по оси Y
 */
const grid = (scaleX = 50, scaleY = 50) => {
  ctx.beginPath()
  ctx.strokeStyle = '#f5f0e8'

  //* рисуем вертикальные линии
  for (let i = 0; i <= canvWidth; i += scaleX) {
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvHeight)
  }

  //* рисуем горизонтальные линии
  for (let i = 0; i <= canvHeight; i += scaleY) {
    ctx.moveTo(0, i)
    ctx.lineTo(canvWidth, i)
  }

  ctx.stroke()
  ctx.closePath()
}

/**
 * Рисуем главные оси
 * @param {number} scaleX - масшаб по оси X
 * @param {number} scaleY - маштаб по оси Y
 * @param {boolean} isSing - показывать подписи осей
 */
const axios = (scaleX = 50, scaleY = 50, isSing = true) => {
  const xAxis = Math.round(canvWidth / scaleX / 2) * scaleX
  const yAxis = Math.round(canvHeight / scaleY / 2) * scaleY

  ctx.beginPath()
  ctx.strokeStyle = '#000000'

  //* Рисуем вертикальную ось
  ctx.moveTo(xAxis, 0)
  ctx.lineTo(xAxis, canvHeight)

  //* Рисуем горизонтальную ось
  ctx.moveTo(0, yAxis)
  ctx.lineTo(canvWidth, yAxis)

  ctx.stroke()
  ctx.closePath()

  if (isSing) {
    ctx.fillStyle = 'black'
    ctx.font = `${Math.round(scaleX / 2)}px Arial`
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'

    // ctx.fillText('y', xAxis - SHIFT_AXIS_NAMES, 0)
    // ctx.fillText('x', canvWidth - SHIFT_AXIS_NAMES, yAxis - SHIFT_AXIS_NAMES)

    //* подписи координат оси Х
    for (let i = 0; i <= canvWidth; i += scaleX) {
      ctx.fillText((i - xAxis) / scaleX, i + SHIFT_NUMBER_NAMES, yAxis + SHIFT_NUMBER_NAMES)
    }

    //* подписи координат оси Y
    for (let i = 0; i <= canvHeight; i += scaleY) {
      ctx.fillText((yAxis - i) / scaleY, xAxis + SHIFT_NUMBER_NAMES, i + SHIFT_NUMBER_NAMES)
    }
  }
}

/**
 * График экспоненты
 * @param {number} scaleX - масшаб по оси X
 * @param {number} scaleY - масшаб по оси Y
 * @param {string} type - тип графика
 */
const graphPlot = (scaleX = 50, scaleY = 50, type = 'parabola') => {
  const xAxis = Math.round(canvWidth / scaleX / 2) * scaleX
  const yAxis = Math.round(canvHeight / scaleY / 2) * scaleY

  ctx.fillStyle = '#ff0000'

  switch (type) {
    case 'parabola':
      for (let i = 0; i <= canvWidth; i++) {
        const x = (i - xAxis) / scaleX
        const y = x ** 2 //-0.4 * Math.pow(x, 2) + 2 * x + 4 //* парабола со смещением
        ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
      }
      break

    case 'polynomial':
      for (let i = 0; i <= canvWidth; i++) {
        const x = (i - xAxis) / scaleX
        const y = Math.pow(x, 3) - 0.4 * Math.pow(x, 2) + 2 * x + 4
        ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
      }
      break

    case 'exhibitor':
      for (let i = 0; i <= canvWidth; i++) {
        const x = (i - xAxis) / scaleX
        const y = Math.exp(-Math.pow(x, 2))
        ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
      }
      break
  }
}

//---------------------------------------------------------------------------------------------------------------------

/**
 * Отрисовка графика с сеткой и осями на экране
 * @param {number} scaleX - масшаб по оси X
 * @param {number} scaleY - масшаб по оси Y
 * @param {string} typeGraph - тип графика
 */
const graphActive = (scaleX = 50, scaleY = 50, typeGraph = 'parabola') => {
  grid(scaleX, scaleY)
  axios(scaleX, scaleY)
  graphPlot(scaleX, scaleY, typeGraph)
}

//=====================================================================================================================

//* Кнопки переключения маштаба
const onScale50x50 = () => {
  viewScale = 1
  clear()
  grid(50, 50)
  axios(50, 50)

  switch (viewGraph) {
    case 1:
      graphPlot(50, 50, 'parabola')
      break

    case 2:
      graphPlot(50, 50, 'polynomial')
      break

    case 3:
      graphPlot(50, 50, 'exhibitor')
      break

    default:
      graphPlot(50, 50, 'parabola')
  }
}

const onScale30x30 = () => {
  viewScale = 2
  clear()
  grid(30, 30)
  axios(30, 30)

  switch (viewGraph) {
    case 1:
      graphPlot(30, 30, 'parabola')
      break

    case 2:
      graphPlot(30, 30, 'polynomial')
      break

    case 3:
      graphPlot(30, 30, 'exhibitor')
      break

    default:
      graphPlot(30, 30, 'parabola')
  }
}

const onScale150x80 = () => {
  viewScale = 3
  clear()
  grid(150, 80)
  axios(150, 80)

  switch (viewGraph) {
    case 1:
      graphPlot(150, 80, 'parabola')
      break

    case 2:
      graphPlot(150, 80, 'polynomial')
      break

    case 3:
      graphPlot(150, 80, 'exhibitor')
      break

    default:
      graphPlot(150, 80, 'parabola')
  }
}

//* Кнопки переключения графиков
const onGraphParabola = () => {
  viewGraph = 1
  clear()

  switch (viewScale) {
    case 1:
      graphActive(50, 50, 'parabola')
      break

    case 2:
      graphActive(30, 30, 'parabola')
      break

    case 3:
      graphActive(150, 80, 'parabola')
      break

    default:
      graphActive()
  }
}

const onGraphPolynomial = () => {
  viewGraph = 2
  clear()

  switch (viewScale) {
    case 1:
      graphActive(50, 50, 'polynomial')
      break

    case 2:
      graphActive(30, 30, 'polynomial')
      break

    case 3:
      graphActive(150, 80, 'polynomial')
      break

    default:
      graphActive('polynomial')
  }
}

const onGraphExhibitor = () => {
  viewGraph = 3
  clear()

  switch (viewScale) {
    case 1:
      graphActive(50, 50, 'exhibitor')
      break

    case 2:
      graphActive(30, 30, 'exhibitor')
      break

    case 3:
      graphActive(150, 80, 'exhibitor')
      break

    default:
      graphActive('exhibitor')
  }
}
