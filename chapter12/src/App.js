import React from 'react';
import ReactDOM from 'react-dom';
import Contents from './Contents'

const App = () => {
  return <div>
    <h1>Hello asdasda World!</h1>;
    <Contents></Contents>
  </div> 
};
ReactDOM.render(<App />, document.getElementById('root'));

export default App;