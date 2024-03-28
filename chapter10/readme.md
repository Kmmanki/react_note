# 리액트 교과서 Chapter10(툴팁 컴포넌트)

```
class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {opacity :false}
    this.toggle = this.toggle.bind(this)
  }
  // 토글 함수
  toggle() {
    const tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity
    })
  }
  render() {
    // 토글 여부에 따른 스타일 변경
    const style = {
      "zIndex": this.state.opacity ? 1000 : -1000,
      "opacity": +this.state.opacity,
      "top": (this.state.top || 0) + 20,
      "left": (this.state.left || 0) - 30
  };
    return (
    <div style={{display: "inline"}}  >
    // 마우스 오버, 아웃 시 토글 함수 동작
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
```