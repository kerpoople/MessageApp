/*class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Msg from './msg.js'
import Input from './input.js'
//var moment = require('moment');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstSubmit = this.handleFirstSubmit.bind(this);
    this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
    this.state = {
      items: JSON.parse(/*localStorage.getItem('messages') ||*/ '[]'), 
      firstInputValue: '',
      secondInputValue: ''
    };
  }

  handleFirstSubmit(message) {
    var newItem = {
      value: message.replace("<3","❤️").replace(":)","🙂").replace(":D","😄").replace(";)","😉").replace("(:", "🙃"),
      id: Date.now(),
      className: 'first',
      //times: moment().format("DD/MM/YY, HH:mm")
    };

    var newArray = this.state.items.slice();
      newArray.push(newItem);
        this.setState({
          items: newArray,
        });
    /*localStorage.setItem('messages', JSON.stringify(newArray));*/
  }

  handleSecondSubmit(message) {
    var newItem = {
      value: message.replace("<3","❤️").replace(":)","🙂").replace(":D","😄").replace(";)","😉").replace("(:", "🙃"),
      id: Date.now(),
      className: 'second',
      //times: moment().format("DD/MM/YY, HH:mm")
    };

    var newArray = this.state.items.slice();
      newArray.push(newItem);
        this.setState({
          items: newArray,
        });
      /*localStorage.setItem('messages', JSON.stringify(newArray));*/
    }
  render() {
    return (
      <div className="box">
      	  <div className="inputsss">
            <Input update={this.handleFirstSubmit} id="firstInput"/>
            <Input update={this.handleSecondSubmit} id="secondInput"/>
          </div>
          <p>Try writhing :), ;) or :D</p>
          <Msg ref="Msg" items={this.state.items} />
      </div>
    );
  }
}

export default App;