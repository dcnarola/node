import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './check';
import Comp from './comp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
function tick(){
ReactDOM.render(<Test />, document.getElementById('content'));
}
const coms={text:'this is the comment',author:{name:'dddddd',url:'http.com'}};
ReactDOM.render(<Comp text={coms.text} author={coms.author}/>,document.getElementById('comps'));

class Welcome extends React.Component {
  
  render() {
  return(
	<div><h1>hello : {this.props.name}</h1></div>
  );
  }
}
ReactDOM.render(<div><Welcome name="dd"/><Welcome name="ee"/><Welcome name="vv"/></div>,document.getElementById('dd'));
setInterval(tick,5000);
registerServiceWorker();
