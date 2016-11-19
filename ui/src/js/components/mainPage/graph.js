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
            <Sheet color='#A7DBD8' index='1' /> 

				</div>
			 </div>
      </div>
    );
  }

}
