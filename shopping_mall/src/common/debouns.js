export default function debouns (fun, delay = 100) {
  let timeId = null
  return function (...args) {
    if(timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}