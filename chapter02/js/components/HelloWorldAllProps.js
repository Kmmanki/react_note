class HelloWorld extends React.Component {
  render() {
    //h1의 속성을 prop 받은 모든 속성.
    return React.createElement('h1', this.props, 'hello '+ this.props.title + ' world')
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  // 하위의 다른 HelloWorld를 감싸기 위한 div 를 구성
  React.createElement('div', null, 
    React.createElement(HelloWorld, {title:'React Framework', id: 'react'}),
    React.createElement(HelloWorld, {title:'Vue Framework', id: 'vue'})
  )
)
