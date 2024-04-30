# 리액트 교과서 Chapter11(타이머)

```
// 시간 정보 timer 정보를 가지고 있는 wrapper 
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {timeLeft : null, timer: null}
    this.startTimer = this.startTimer.bind(this)
  }

  // 타이머 시작, 타이머가 존재한다면 기존 타이머 제거
  // setInterval로 1초마다 시간이 줄어들도록
  startTimer(timeLeft){
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft <= 0) {
        clearInterval(this.state.timer)
      }
      this.setState({
        timeLeft :timeLeft
      })
      console.log("running")
    }, 1000);
    console.log("start")
    return this.setState({timeLeft: timeLeft , timer: timer})
  }

  // button에 startTimer와 각각 할당된 time 제공
  render() {
    return (
      <div>
        <h2>Timer</h2>
        <Button time="5" startTimer={this.startTimer}></Button>
        <Button time="10" startTimer={this.startTimer}></Button>
        <Button time="15" startTimer={this.startTimer}></Button>
        <Timer timeLeft={this.state.timeLeft}></Timer>
      </div>
    )
  }

}

// 제공된 time과 startTimer 사용
class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => {this.props.startTimer(this.props.time)}}>{this.props.time}</button>
      </div>
    )
  }
}

// 상위로 wrapper로 부터 받은 시간을 표기 
class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>'
        <h2>{this.props.timeLeft}</h2>
      </div>
    )
  }
  
}


let timer = document.getElementById('timer')
let root = ReactDOM.createRoot(timer)

root.render(
  <TimerWrapper></TimerWrapper>
)
```