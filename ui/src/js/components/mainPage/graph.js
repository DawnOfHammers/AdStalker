import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Sheet from 'js/components/mainPage/sheet';

export default class Graph extends Component {

  displayName: 'Graph';
  props: any;

  constructor(){
    super();
  }

  render () {
    return (
      <div className = 'graph'>
      	<div className = 'container'>
      		<div className = 'floor isometric'>
<<<<<<< HEAD
            <div className = 'sheetOne'> 
            </div>
            <div className = 'sheetTwo'>
            </div>
            <div className = 'sheetThree'>
            </div>
				  </div>
=======
            <Sheet color='#A7DBD8' index='1' /> 

				</div>
>>>>>>> 898f80ad93bf1fd92f933d83c4d5d075ee796253
			 </div>
      </div>
    );
  }

}
