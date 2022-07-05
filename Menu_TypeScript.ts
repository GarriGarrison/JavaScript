const menu = {
  analytics: {
    bussines: 'Для бизнеса',
    data: 'Big data'
  },
  desing: {
    graphical: 'Графический'
  }
}

//const res = menu.desing.graphical  --> статический метод когда точно извесно меню

// function getMenu(obj: any, level1: string, level2: string) {
function getMenu<T, L1 extends keyof T, L2 extends keyof T[L1]>(obj: T, level1: L1, level2: L2) {
  return obj[level1][level2]
}
  
/*  динамически подсказывает что подставлять по структуре menu */
const res1 = getMenu(menu, 'analytics', 'data') 
const res2 = getMenu(menu, 'desing', 'graphical')
