let h1 = React.createElement('a', {href: 'http://naver.com'}, '네이버')

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', {id: 'test'}, h1)
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, null)
)