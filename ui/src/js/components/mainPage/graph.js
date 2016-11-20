import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Sheet from 'js/components/mainPage/sheet';

export default class Graph extends Component {

  props: any;

  constructor(props){
    super(props);

  }
  makeSheets(list) {
    var increment = Math.floor(255/list.length);
    var sheets = []
    var maxHeight = list.length*50
    var maxVal = Math.max(...list)

    console.log(maxHeight)

    console.log(maxVal)
    //sets the color of each sheet to make gradient
    for (let i=0; i<list.length; i++) {
      var transFactor = (list[i]/maxVal)*maxHeight;
      var sheet = <Sheet 
              color = {"rgb(" + increment*(i+1) + ", 167," + (255-increment*(i+1)) + ")"}
              factor = {transFactor}/>
      sheets.push(sheet)
    }

    return sheets

    
  }
  render() {
    return (
      <div className = 'graph'>
      	<div className = 'container'>
      		<div className = 'floor isometric'>
            {this.makeSheets(this.props.data)}

            </div>
			 </div>
      </div>
    );
  }




}
