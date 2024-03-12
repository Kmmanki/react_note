
class HelloWorld extends React.Component {
  constructor(prop) {
    super(prop)
  }
  
  render() {
    return (
      <div>
        <p >{this.props.title}</p>
      </div>
    )
  }
}

HelloWorld.defaultProps = {
  title: 'Hello World'
}

// 자식 엘리먼트 렌더링
class Content extends React.Component {
  render() {
    return (
      <div>
        <p >{this.props.title}</p>
        {this.props.children}
      </div>
    )
  }
}

Content.defaultProps = {
  title: 'Content!!'
}
//

class LinkSpread extends React.Component{
  render() {
    return (
      <a {...this.props} {...this.state}>네이버</a>
    )
  }
}


const el2 =document.getElementById('content')
var root = ReactDOM.createRoot(el2)

root.render(
  <div>
    <HelloWorld title="Hello"></HelloWorld>
    <HelloWorld></HelloWorld>

    <Content>
      <h1>Content Hi</h1>
    </Content>

    <LinkSpread href="www.naver.com"></LinkSpread>
  </div>
)