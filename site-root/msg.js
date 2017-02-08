import React from 'react';

class Msg extends React.Component {
	render () {
		return (
			<div className="wrapper">
				<ul id="myDiv">
					<li className="first"><span className="first1">Hi!</span><br /><div className="date">29/11/16, 16:34</div></li>
					<li className="second"><span className="second1">Hey ! 😉 </span><br /><div className="date">29/11/16, 16:37</div></li>
					<li className="first"><span className="first1">Whats up? 🙃</span><br /><div className="date">29/11/16, 16:38</div></li>
					{this.props.items.map(item => (
	          			<li key={item.id} className={item.className}>
	          				<span className={item.className+1}>
	          					{item.value}
	          				</span>
	          				<br /><div className="date">
	          				{item.times}
	          				</div>
	          			</li>
	          		))}
				</ul>
			</div>
		);
	}
}

export default Msg;
