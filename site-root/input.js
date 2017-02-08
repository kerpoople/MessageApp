import React from 'react';
import {render} from 'react-dom';

export default class Input extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

  	handleClick(event){
  		//event.preventDefault();
      if (this.refs.message.value == '')
        return false; //If you have not written a message, this will return false
      this.props.update(this.refs.message.value);
      this.refs.message.value = '';
      return true; //if there was a message, return true
  	}

    handleKeyPress(event) {
        if(event.charCode===13 && event.shiftKey === false) {
          console.log('enter clickeddd');
          if (this.refs.message != null)
      		  this.handleClick(event)
          return true; //Return true if enter was pressed while not holding down shift
      }
      return false; //There enter key was not pressed or shift was held
    }

  	render() {
    	return (
		  	<div className="hej">
		    	<textarea onKeyPress={this.handleKeyPress} ref="message" id={this.props.id} />
		    	<button onClick={this.handleClick}>Send</button>      
		  	</div>
    	)
  	}
}