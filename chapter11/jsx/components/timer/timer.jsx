class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {timeLeft : null, timer: null}
    this.startTimer = this.startTimer.bind(this)
  }

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

class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => {this.props.startTimer(this.props.time)}}>{this.props.time}</button>
      </div>
    )
  }
}

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