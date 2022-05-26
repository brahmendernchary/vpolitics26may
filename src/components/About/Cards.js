import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import img1 from '../../assets/images/profile2.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: { height: 150, width: '90%' },
  qualification: {
    fontFamily: 'Lucida Console',
    fontSize: 16,
    background: '#FF0039',
    padding: 5,
    textAlign: 'center',
  },
  designation: {
    fontFamily: 'Lucida Console',
    fontSize: 10,
    background: '#FF0000',
    padding: 5,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <img className={classes.image} src={img1} />
          <p className={classes.qualification}>
            Qualification : MTech in Computer Science & Engineering , IIT
            Kharagpur [ Indian Institute of Technology]
          </p>
          <p className={classes.designation}>
            Designation: Political Strategist & Analyst , Motivational Speaker ,
            Experience: I have worked into the MNC's like IBM India Pvt Ltd and
            Capgemini Technology Services India Ltd. for a couple of years. I
            have broad understanding and knowledge about the latest technologies
            like Artificial Intelligence and Machine Learning. Have knowledge on
            Data Analytics with latest technological tools emerging in the
            present day. I have even worked @ National Institute of Technology ,
            Tadepalligudem, Andhra Pradesh , one of the prestigious educational
            institutions of the country. Achievements: I have been to the UPSC
            Interview for the Civil Services Examination [ IAS, IPS & IFoS] of
            the country and I am working as a mentor, guide for many UPSC
            Aspirants and the Coaching Institutions. I am guiding the serious
            UPSC aspirants throughout the country for a better civil servants
            for a better tomorrow. I am a staunch follower of Gautama Buddha,
            Socrates, Aristotle , Dr. B.R. Ambedkar.
          </p>
        </Grid>
        <Grid item xs={4}>
          <img className={classes.image} src={img1} />
          <p className={classes.qualification}>
            Qualification : MTech in Computer Science & Engineering , IIT
            Kharagpur [ Indian Institute of Technology]
          </p>
          <p className={classes.designation}>
            Designation: Political Strategist & Analyst , Motivational Speaker ,
            Experience: I have worked into the MNC's like IBM India Pvt Ltd and
            Capgemini Technology Services India Ltd. for a couple of years. I
            have broad understanding and knowledge about the latest technologies
            like Artificial Intelligence and Machine Learning. Have knowledge on
            Data Analytics with latest technological tools emerging in the
            present day. I have even worked @ National Institute of Technology ,
            Tadepalligudem, Andhra Pradesh , one of the prestigious educational
            institutions of the country. Achievements: I have been to the UPSC
            Interview for the Civil Services Examination [ IAS, IPS & IFoS] of
            the country and I am working as a mentor, guide for many UPSC
            Aspirants and the Coaching Institutions. I am guiding the serious
            UPSC aspirants throughout the country for a better civil servants
            for a better tomorrow. I am a staunch follower of Gautama Buddha,
            Socrates, Aristotle , Dr. B.R. Ambedkar.
          </p>
        </Grid>
        <Grid item xs={4}>
          <img className={classes.image} src={img1} />
          <p className={classes.qualification}>
            Qualification : MTech in Computer Science & Engineering , IIT
            Kharagpur [ Indian Institute of Technology]
          </p>
          <p className={classes.designation}>
            Designation: Political Strategist & Analyst , Motivational Speaker ,
            Experience: I have worked into the MNC's like IBM India Pvt Ltd and
            Capgemini Technology Services India Ltd. for a couple of years. I
            have broad understanding and knowledge about the latest technologies
            like Artificial Intelligence and Machine Learning. Have knowledge on
            Data Analytics with latest technological tools emerging in the
            present day. I have even worked @ National Institute of Technology ,
            Tadepalligudem, Andhra Pradesh , one of the prestigious educational
            institutions of the country. Achievements: I have been to the UPSC
            Interview for the Civil Services Examination [ IAS, IPS & IFoS] of
            the country and I am working as a mentor, guide for many UPSC
            Aspirants and the Coaching Institutions. I am guiding the serious
            UPSC aspirants throughout the country for a better civil servants
            for a better tomorrow. I am a staunch follower of Gautama Buddha,
            Socrates, Aristotle , Dr. B.R. Ambedkar.
          </p>
        </Grid>
      </Grid>
    </div>
  )
}
