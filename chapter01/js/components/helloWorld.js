const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)
var h1 = React.createElement('h1', null, null, 'Hello World')
root.render(h1)