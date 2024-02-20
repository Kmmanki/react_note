
class HelloWorld extends React.Component {
  render() {
    return React.createElement('a', {href: this.props.href}, '네이버')
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, {href: 'https://naver.com'})
)