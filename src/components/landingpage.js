import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
             <font color="white" size="4">Felix E. Gonzalez</font><br></br>
             <font color="white" size="4">Computer Engineering</font>
             
            
            <hr/>

          <p>HTML/CSS | MySQL | JavaScript | React | PostgreSQL | Linux |  Bash</p>
          <p> Java | Python | C++ | React | MATLAB | Visual Basic | Swift | Android Studio</p>
          <p>Networks/Security | Arduino | Assembly | PHP | Firebase </p>

        <div className="social-links">

          {/* Termibal */
          /*<a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">*/}
          
          <i class="fa fa-terminal "/>
          
          <i class="fa fa-microchip" aria-hidden="true"></i>
          
          <i class="fa fa-linux" aria-hidden="true"></i>
          <i class="fa fa-android" aria-hidden="true"></i>

<i class="fa fa-cog fa-spin fa-5x fa-fw"></i>



         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
