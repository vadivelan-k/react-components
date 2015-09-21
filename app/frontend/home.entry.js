
import React from 'react';

console.log('home js');
import Timer from './components/Timer';
console.log('timer: ', Timer);


Window.Home = {
  init: function () {
    React.render(<Timer time={new Date()}/>, document.getElementById("react-components"));
  }
};

