let h1 = React.createElement('h1', null, null, 'Hello World')

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', null, h1, h1)
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, null)
)