import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Const from './constructor';
import Test from './check';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Const />,document.getElementById('dd'));
function tick(){
ReactDOM.render(<Test />, document.getElementById('content'));
}

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props){
	return(
		<img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
	)
}
function Userinfo(props){
	return(
		<div className="UserInfo">
		<Avatar author={props.user.author} />
				<div className="UserInfo-name">
					{props.user.author.name}
				</div>
		</div>
	)
}
function Comment(props) {
  return (
    <div className="Comment">
        <Userinfo user={props} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};
/*ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);*/


//setInterval(tick,5000);
registerServiceWorker();