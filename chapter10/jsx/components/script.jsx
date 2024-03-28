class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opacity :false}
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity
    })
  }
  render() {
    const style = {
      "zIndex": this.state.opacity ? 1000 : -1000,
      "opacity": +this.state.opacity,
      "top": (this.state.top || 0) + 20,
      "left": (this.state.left || 0) - 30
  };
    return (
    <div style={{display: "inline"}}  >
      <span onMouseOver={this.toggle} onMouseOut={this.toggle} style={{color: 'blue'}}>{this.props.children}</span>
      <div style={style} >{this.props.text}</div>
    </div>
    )
  } 
}



let tooltip = document.getElementById('tooltip')
let root = ReactDOM.createRoot(tooltip)

root.render(
  <Tooltip text="The Book you're reading now">"React Quickly" </Tooltip>
)