# xp-countdown
一个倒计时的库，更精准地-1s

## 使用

```
import Countdown from 'xp-countdown'

const tickFn = (c) => { console.log(c) }
const endFn = () => { console.log('done') }

const cd = new Countdown(60, tickFn, endFn)
cd.start()
```
