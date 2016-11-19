import Graph from 'js/components/mainPage/graph';
import Title from 'js/components/mainPage/title';
import RaisedButton from 'material-ui/RaisedButton';  
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

        <div className = 'background'> </div>  

          <Card className = 'mainCard'>

            <div className = 'logo'></div>

            <div className = 'header'><b>BEST APP</b></div>

            <div className = 'description'>A really cool app</div>

            <div className = 'select'>

              <RaisedButton label="PROFILE" className = 'buttonStyle' backgroundColor='#B1DDF3/>
              <RaisedButton label="GENERAL" className = 'buttonStyle' backgroundColor: #B1DDF3/>

            </div>

          </Card> 

      </div>
    );
  }

}
