import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDNMX_opt3Vv5giG4dduZHWj96Y71vEFbE';


// Create a new component
const App = () => {
  //JSX syntax;
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML and put it on the page.
ReactDOM.render(<App />, document.querySelector('.container'));
