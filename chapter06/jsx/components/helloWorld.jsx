
class HelloWorld extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      count : 0
    }
    this.minusBtn = this.minusBtn.bind(this)
  }
  plusBtn (event) {
    this.setState({
      count: ++this.state.count
    })
  }
  minusBtn (event) {
    this.setState({
      count: --this.state.count
    })
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.plusBtn.bind(this)} >+</button>
        <button onClick={this.minusBtn} >-</button>
        <button onClick={(event) => {
          this.setState({
            count: 0
          })
          }} >clear</button>
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      counter: 0
    }
  }
  updateCounter(e) {
    console.log('wow')
    this.setState({counter : ++this.state.counter})
  }
  render() {
    return <div>
      <ChildContent counter={this.state.counter}></ChildContent>
      <ChildBtn updateCounter={this.updateCounter.bind(this)}></ChildBtn>
    </div>
  }
}
class ChildContent extends React.Component {
  
  render() {
    return <span>{this.props.counter}</span>
  }
}
class ChildBtn extends React.Component {
  render() {
    console.log(this.props)
    return <button onClick={this.props.updateCounter}>+</button>
  }
}

class Radio extends React.Component {
  constructor(prop) {
    super(prop)
    this.handleResize = this.handleResize.bind(this)
    let i = 1
    this.state = {
      outerStyle: this.getStyle(4, i),
      innerStyle: this.getStyle(1, i),
      selectedStyle: this.getStyle(2, i),
      taggerStyle: {top: 20, width: 25, height: 25}
    }
  }
  getStyle (i, m){
    let value = i * m
    return { top: value, bottom: value, left: value, right: value}
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize() {
    let w = 1+ Math.round(window.innerWidth / 300)
    this.setState({
      taggerStyle: {top: w*10, width : w*10, height: w*10 },
      textStyle: {left: w*13, fontSize: 7*w}
    })
  }

  render() {
    return <div>
      <div className="radio-tagger" style={this.state.taggerStyle}>
        <input type="radio" name={this.props.name} id={this.props.id} />
        <label htmlFor={this.props.id}>
            <div className="radio-text" style={this.state.textStyle}>{this.props.label}</div>
            <div className="radio-outer" style={this.state.outerStyle}>
              <div className="radio-inner" style={this.state.innerStyle}>
                <div className="radio-selected" style={this.state.selectedStyle}></div>
              </div>
            </div>
        </label>
      </div>
    </div>
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld></HelloWorld>
    <br/>
    <Parent></Parent>
    <br/>
    <Radio label="Ract" id="Ract" name="Ract"></Radio>
    <Radio label="vue" id="vue" name="vue"></Radio>
  </div>
)