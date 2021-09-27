function maskify(cc) {
  if (cc.length > 4) {

    let shifr = ''
    for (let i = 0; i < cc.length-4; i++) {
      shifr += '#'
    }
    for (let i = cc.length-4; i < cc.length; i++) {
      shifr += cc[i]
    }
    return shifr
  } else
    return cc
}
