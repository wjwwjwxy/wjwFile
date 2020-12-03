/*
大数相加 2020.12.02
 */
function addBigNUm(a,b) {
  const resArr = [] // 加完的字符串用数组暂存
  let goOne = 0
  for (let i = 1 ; i<= Math.max(a.length,b.length);i++) {
    let addOne = (i > a.length ? 0 : Number(a[a.length - i])) + (i > b.length ? 0 : Number(b[b.length - i])) + goOne
    if (addOne < 10 ) {
      resArr.unshift(addOne)
    } else {
      resArr.unshift(addOne % 10)
      goOne = 1
      if (i === Math.max(a.length,b.length)) { //最后一位还进位则在数组头部再加一个1
        resArr.unshift(1)
      }
    }
  }
  return resArr.join('')
}

/*
求最大公约数 2020.12.02
定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数（欧几里得算法即辗转相除法）
最大公约数（Greatest Common Divisor）缩写为GCD
 */
function getGCD(a=16,b=4){
  if (b === 0) {
    return a
  }
  return getGCD(b,a % b)
}
