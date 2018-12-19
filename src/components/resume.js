import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Felix E. Gonzalez</h2>
            <h4 style={{color: 'grey'}}>Computer Engineering</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Obtain a position where I can apply my skills, 
              knowledge and develop myself in the professional
              field allowing me to achieve the goals and objectives of the company.</p>

           <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           <h5>Address</h5>
            <p>PO BOX 901 Caguas PR 00726-0901</p>
            <h5>Phone</h5>
            <p>(787) 595-9660</p>
            <h5>Email</h5>
            <p>f.emmanuel.g@gmail.com</p>
           
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2018}
              schoolName="University of Turabo"
              schoolDescription="Present/Actual B.S Computer Engineering, University of Turabo, Gurabo, Expected Graduation: December,2018"
               />

               <Education
                 startYear={2008}
                 endYear={2010}
                 schoolName="Interamerican University"
                 schoolDescription="B.S Computer Science, Interamerican University"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2011}
              endYear={2012}
              jobName="Ultra Body Fitness (UBF), Caguas P.R"
              jobDescription="Physical Trainer
              ▪ Perform aptitude assessments and design personalized exercise program
              ▪ Supervise and teach clients the appropriate
              techniques to minimize the risks of possible injuries and obtain greater results"
              />

              <Experience
                startYear={2011}
                endYear={2011}
                jobName="Lady of America Bayamon, P.R"
                jobDescription="▪ Customer service and membership sales
                ▪ Maintain knowledge of current sales and
                promotions"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={75}
                />
                 <Skills
                skill="C++"
                progress={80}
                />
                 <Skills
                skill="Java"
                progress={88}
                />
                 <Skills
                skill="Python"
                progress={73}
                />

                 <Skills
                skill="PHP"
                progress={50}
                />

              <Skills
                skill="Firebase"
                progress={80}
                />

                 <Skills
                skill="MySQL"
                progress={80}
                />
                 <Skills
                skill="PostgreSQL"
                progress={69}
                />
                 <Skills
                skill="MATLAB"
                progress={70}
                />

                 <Skills
                skill="Android Studio"
                progress={80}
                />

                <Skills
                skill="Visual Basic"
                progress={75}
                />

                <Skills
                skill="Assembly"
                progress={63}
                />

              <Skills
                skill="Swift"
                progress={70}
                />

                <Skills
                skill="Bash"
                progress={66}
                />

                <Skills
                skill="Linux"
                progress={90}
                />

                <Skills
                skill="Netwoks/Security"
                progress={85}
                />

                <Skills
                skill="Arduino"
                progress={85}
                />

                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={30}
                    />
                    <Skills
                      skill="React"
                      progress={35}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
