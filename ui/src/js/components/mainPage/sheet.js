import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Sheet extends Component {

  displayName: 'Sheet';
  props: any;

  constructor(props){
    super(props);
  }
  

  render () {
    var color = this.props.color;
    //shift factor
    var x = this.props.factor;
    const style = {
                  background : color,
                  borderBottom : "4px solid darken(" + color + ", 20%)",
                  borderRight : "4px solid darken("+ color+ ", 20%)",
                  WebkitTransform: "translate(-"+x+"px,-"+ x+"px)",
                  msTransform: "translate(-"+x+"px,-"+ x+"px)",
                  transform: "translate(-"+x+"px,-"+ x+"px)"
                  };

    return (
            <div className='sheet' style={style}> 
            </div>
    );
  }

}
