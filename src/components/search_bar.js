import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
      super(props);

      this.state = {term: ''};
  }

  render() {
    //ES syntax: arrow function
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  //on/handle + element + event
  // onInputChange(event){ //event object describe the context of the event
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
