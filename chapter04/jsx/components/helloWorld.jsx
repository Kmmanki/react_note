
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}

class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime : (new Date()).toLocaleString('kr'),
      testState : 'testState'
   }
  }

  launchClock() {
    setInterval(() => {
      console.log('updating time...')
      this.setState({
        currentTime: (new Date()).toLocaleString('kr') 
      })
    }, 1000)
  }

  render () {
    return <div className="block">
      // setState를 통해 상태변경
      <span className="block">{this.state.testState}</span>
      <span className="block">Current Time is : {this.state.currentTime}... </span>  
    </div>
    }
}

class NameComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {inputName : ''}
  }
  updateValue () {
    this.setState({inputName : '김만기'})
  }
  render () {
    return <div className="block">
      <input type="text" value={this.state.inputName}></input>
      <input type="submit" onClick={this.updateValue.bind(this)}></input>
    </div>
  }
} 


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld></HelloWorld>
    <Clock></Clock>
    <NameComponent></NameComponent>
  </div>
)