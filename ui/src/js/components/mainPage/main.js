import Graph from 'js/components/mainPage/graph';
import Display from 'js/components/mainPage/display';
import Background from 'js/components/mainPage/background';
import Title from 'js/components/mainPage/title';
import FlatButton from 'material-ui/FlatButton';
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class Main extends Component {

  displayName: 'Main';
  props: any;
  constructor(props){
    super(props);
  }

  render () {
    return (

      <div className = 'main'>


          <Card className = 'mainCard'  style={{backgroundColor: '#424242'}} >
            <div className = 'logo'></div>

            <div className = 'header'><b>BEST APP</b></div>

            <div className = 'description'>A really cool app</div>




           <div className = 'displaySection'>
              <Display name = "Current State" background = "#E53935"/>
              <Display  name = "Twitter Data" background = "#4DD0E1"/>
          </div>
          </Card> 
          
      </div>
    );
  }

}
