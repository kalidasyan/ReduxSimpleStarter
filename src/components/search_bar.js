import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
      super(props);

      this.state = {term: ''};
  }

  render() {
    //ES syntax: arrow function
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          />
      </div>
    )
    ;
  }

  //on/handle + element + event
  // onInputChange(event){ //event object describe the context of the event
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
