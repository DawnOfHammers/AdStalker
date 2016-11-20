import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Sheet from 'js/components/mainPage/sheet';

export default class Graph extends Component {

  props: any;
  constructor(){
    super();
    var data = [1,2,3,4,5]

  }
  makeSheets(data) {
    var length = data.length;
    var increment = Math.floor(255/length);
    var sheets = []

    for (let i=1; i<length+1; i++) {
      var sheet = <Sheet 
              color = {"rgb(" + increment*i + ", 167," + (255-increment*i) + ")"}
              index = {i} />

      sheets.push(sheet)
    }
    return sheets

    
  }
  render() {
    return (
      <div className = 'graph'>
      	<div className = 'container'>
      		<div className = 'floor isometric'>
            {this.makeSheets(this.data)}

            </div>
			 </div>
      </div>
    );
  }




}
