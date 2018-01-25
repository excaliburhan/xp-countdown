/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-26 03:53:38
 * @modify date 2017-10-26 03:53:38
 * @desc [倒计时类]
*/

class Countdown {
  constructor (countdown, onTick, onEnd) {
    this.countdown = countdown // 倒计时
    this.timeLeft = countdown
    this.timer = null // 初始化timer
    this.onTick = onTick
    this.onEnd = onEnd
  }
  get leftTime () {
    return this.timeLeft
  }
  set leftTime (newTime) {
    this.timeLeft = newTime
  }
  start (immediate = true) {
    if (immediate) { // 立即执行
      this.onTick(this.timeLeft, this)
      this.timeLeft--
    }
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.onTick(this.timeLeft, this)
        this.timeLeft--
      } else {
        this.timeLeft--
        clearInterval(this.timer)
        this.onEnd(this)
      }
    }, 1000)
  }
  stop () {
    clearInterval(this.timer)
  }
  restart (newTime, immediate = true) {
    this.timeLeft = newTime || this.countdown
    this.start(immediate)
  }
  destory () {
    clearInterval(this.timer)
    delete this
  }
}

export default Countdown
