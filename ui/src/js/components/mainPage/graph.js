import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
            <div className = 'sheetOne'> 
            </div>
            <div className = 'sheetTwo'>
            </div>
				</div>
			 </div>
      </div>
    );
  }

}
