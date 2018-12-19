import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import LandingPage from './landingpage';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '230px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project</CardTitle>
            <CardText>
         This Portfolio is 100% done with the React library which allows flexibility when programming.
            </CardText>
            <CardActions border>
              <Button colored href="https://reactjs.org/">React Information</Button>
             
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
             
            </CardMenu>
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#00D7FF', height: '250px', background: 'url(https://openclipart.org/download/274103/altbluetooth.svg) center / cover'}} >BluList: Smart Attendance</CardTitle>
            <CardText>
            The attendance of students to a classroom is essential. To keep record, instructors take 
            daily attendance which is a tedious and slow process. 
            This work aims to facilitate the process to keep attendance records 
            by developing a mobile application that
             employs Bluetooth technology to automatically
              populate an attendance list and store it in a remote database.
            </CardText>
            <CardActions border>
              <Button colored href="https://drive.google.com/file/d/1-Ce8DQUZujjIW5eaCZO1OWGqkW7mCz76/view?usp=sharing">Prototype Video</Button>
             
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
             
            </CardMenu>
          </Card>

      )
    } 

    else if(this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#86C2B4', height: '250px', background: 'url(https://openclipart.org/download/191072/Blue-Robot.svg) center / cover'}} >Robot Avoid Obstacles</CardTitle>
            <CardText>
            This project was designed with the purpose of integrating the ultrasonic sensor
             and the DC motors in a system capable of moving independently. 
             The code designed can be modified on the basis of the need for any person,
              since he himself provides the elements of editing to be able to adjust
               the sweep speed of the ultrasonic sensor, the implementation of the engines of movement
                and displacement of the servo used to aid the analysis of
                 the data needed to achieve continue a system of uninterrupted movement.
                  We can develop a simple system where it can be used by large developers to continue 
                  improving the same, our intention is to learn from the base of the robotics using
                   the principles and simple sensors but capable of producing great results.

            </CardText>
            <CardActions border>
              <Button  colored href="https://drive.google.com/file/d/1Phuz7xOdCP3y9fAqDi-oc8Yo7eAaQIlA/view?usp=sharing">Images</Button>
              <Button  colored href="https://drive.google.com/file/d/16K-4qfdq35qq0PpjaLBp4XVn9XC2TxZ3/view?usp=sharing">Schematic</Button>
             
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
             
            </CardMenu>
          </Card>

      )
    } 



    else if(this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#D7C1A5', height: '250px', background: 'url(https://openclipart.org/download/167242/Road.svg) center / cover'}} >Line Follower Robot</CardTitle>
            <CardText>
            To carry out this project we use an HC-SR04 ultrasonic sensor, in addition to 3 infrared sensors,
             a led and a buzzer the main idea is to create a robot that can follow a black line on a track, 
             marked with a white background and that can move along the black line, 
             in addition to this you can also detect flat objects located vertically in your path, 
             which are at a distance of 10-12cm, 
            once you detect the object stops and when you remove it continue.

            </CardText>
            <CardActions border>
              <Button  colored href="https://drive.google.com/file/d/1VvhYD08yzMcIZM7FiMxr1dvWYeQVXCDb/view?usp=sharing">Video</Button>
              <Button  colored href="https://drive.google.com/file/d/1Uuob2XX6ro-MJJeG3_c8PGhwC3Nb7C8l/view?usp=sharing">Images</Button>
              <Button  colored href="https://drive.google.com/file/d/1m8xUKGx_mI0PBxHBjBiae-v48GYYKz3Z/view?usp=sharing">Schematic</Button>
             
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
             
            </CardMenu>
          </Card>

      )
    }
   

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Portfolio</Tab>
          <Tab>BluList: Smart Attendance</Tab>
          <Tab>Robot Avoid Obstacles</Tab>
          <Tab>Line Follower Robot</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
