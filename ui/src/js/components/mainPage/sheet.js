import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Sheet extends Component {

  displayName: 'Graph';
  props: any;

  constructor(){
    super();
  }

  render () {
    return (
            <div className = 'sheetOne isometric'> 
            </div>
    );
  }

}
