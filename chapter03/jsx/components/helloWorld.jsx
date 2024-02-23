
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, null)
)