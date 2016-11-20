import Graph from 'js/components/mainPage/graph';
import TwitterData from 'js/components/mainPage/twitterData';
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
    var appData1 = {cpm:2, twitterData: {politics: 0.4, sports: 0.2, economics:0.4, entertainment: 0.5, drake: 0.5, nba:0.5}}
    var appData2 = {cpm:1.8, twitterData: {politics: 1.0, sports: 0.3, economics:0.5, entertainment: 0.7, drake: 1.0, nba:0.4}}
    var appData3 = {cpm:1.1, twitterData: {politics: 0.6, sports: 0.4, economics:0.6, entertainment: 1.0, drake: 0.3, nba:0.6}}
    var appData4 = {cpm:0.1, twitterData: {politics: 0.7, sports: 0.5, economics:0.1, entertainment: 0.7, drake: 0.5, nba:0.8}}
    var appData5 = {cpm:1.0, twitterData: {politics: 0.8, sports: 0.4, economics:0.7, entertainment: 0.7, drake: 0.5, nba:0.8}}
    var appData6 = {cpm:0.2, twitterData: {politics: 0.7, sports: 0.5, economics:0.8, entertainment: 0.7, drake: 0.5, nba:0.1}}
    var appData7 = {cpm:0.5, twitterData: {politics: 1.0, sports: 0.3, economics:0.6, entertainment: 0.5, drake: 0.3, nba:0.5}}
    var appData8 = {cpm:3.0, twitterData: {politics: 0.7, sports: 1.0, economics:0.4, entertainment: 0.5, drake: 0.3, nba:0.5}}
    var appData9 = {cpm:1.7, twitterData: {politics: 0.2, sports: 1.0, economics:0.5, entertainment: 0.4, drake: 0.2, nba:0.4}}
    this.state = {index: 3, allData: [appData1 , appData2 , appData3 , appData4,
                 appData5, appData6, appData7, appData8, appData9]}
    this.handleClick = this.handleClick(this);


  }

  handleClick(index) {
    console.log(index)

    if(index === parseInt(index, 10)){
      this.state.index = index;
    }
    
  }


  render () {

    console.log(this.state)
    
    return (

      <div className = 'main'>


          <Card className = 'mainCard'  style={{backgroundColor: '#424242'}} >
            <div className = 'logo'></div>

            <div className = 'header'><b>AdStalker</b></div>

            <div className = 'description'>Linking real time sentiment to Ad Tech</div>




           <div className = 'displaySection'>
              <div className = 'vertContainer'><div className = 'vert'></div></div>
              <div className = 'circleContainer'><div className = 'circle'></div></div>
              <div className = 'wireContainer'><div className = 'wire'></div></div>
              <Display name = "Current States" background = "#E53935" 
                graph = {<div className = "stackGraph">
          <Graph data = {this.state}/>
        </div>}/>
                
              <Display name = "Twitter Data" background = "#4DD0E1" 
                graph = {<TwitterData data = {this.state}/>}/>
          </div>
          </Card> 
          
      </div>
    );
  }

}
