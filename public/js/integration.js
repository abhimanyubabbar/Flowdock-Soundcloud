// create main component which will
// display the data.

import React from 'react';
import ReactDOM from 'react-dom';

var Landing = React.createClass({

  handleAuth: function(){
    console.log('Time to invoke the');
  },

  render : function(){
    return(
      <div>
        <button onClick={this.handleAuth}>Integrate</button>
      </div>
    );
  }
});


var Main = React.createClass({
  render : function(){
    return (
      <Landing/>
    );
  }
});

ReactDOM.render(
  <Main/>,
  document.getElementById('content')
);
