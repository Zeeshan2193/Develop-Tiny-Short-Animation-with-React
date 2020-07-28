import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import intro_p1 from '../images/Intro_Featured_Image_Empty.svg';
import intro_p2 from '../images/Intro_Front_Layer.svg';
import intro_p3 from '../images/Intro_Brain.svg';
import useWebAnimations, { flash, pulse, bounce,backInDown, backInLeft, backInRight, backInUp} from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  p2:{
    width: "50%",
    position: "absolute",
    right: "0.1%",
    top: "12%",
    zIndex :2,
  },
  p3:{
    width: "50%",
    position: "absolute",
    right: "0.1%",
    top: "1%",
    zIndex :2,
  },
  btn : {
    width: "200px",
height: "50px",
borderRadius: "25px",
padding: "10px",
//background: var(--gradient_5);
backgroundColor:"#ff3e96",
color:"white",
fontSize:"18px",
display: "flex",
justifyContent: "center",
alignItems: "center",
cursor: "pointer",
transition: "0.2s",
marginTop:"20%",

}
}));



export default function Part1() {


    //const text1= useWebAnimations({...backInDown});
    const animateText1 = backInDown;
    const keyfrmText1 = animateText1.keyframes;
    const tmgText1 = animateText1.timing;
    const text1ref = useWebAnimations( {
        keyframes: keyfrmText1,
        timing: {
          ...tmgText1,
          delay: 0, // Delay 1s
          duration: 3000, // Speed up the animation
          iterations : 1,
          easing: "ease-in-out",
        },
      });

    //const text2= useWebAnimations({...backInLeft});

    const animateText2 = backInLeft;
    const keyfrmText2 = animateText2.keyframes;
    const tmgText2 = animateText2.timing;
    const text2ref = useWebAnimations( {
        keyframes: keyfrmText2,
        timing: {
          ...tmgText2,
          delay: 100, // Delay 1s
          duration: 4000, // Speed up the animation
          iterations : 1,
          easing: "ease-in-out",
        },
      });
  //  const text3= useWebAnimations({...backInRight});
  const animateText3 = backInRight;
  const keyfrmText3 = animateText3.keyframes;
  const tmgText3 = animateText3.timing;
  const text3ref = useWebAnimations( {
      keyframes: keyfrmText3,
      timing: {
        ...tmgText3,
        delay: 400, // Delay 1s
        duration: 5000, // Speed up the animation
        iterations : 1,
        easing: "ease-in-out",
      },
    });

   // const aniBtn= useWebAnimations({...backInUp});
   const animatebtn = backInUp;
   const keyfrmbtn = animatebtn.keyframes;
   const tmgbtn = animatebtn.timing;
   const btnref = useWebAnimations( {
       keyframes: keyfrmbtn,
       timing: {
         ...tmgbtn,
         delay: 600, // Delay 1s
         duration: 6000, // Speed up the animation
         iterations : 1,
         easing: "ease-in-out",
       },
     });



    const mainImg = useWebAnimations({... bounce});
    const brainImg = useWebAnimations({
        keyframes: {
          transform: ["translateY(10px)" , "translateY(-70px)", "scale(0.5)"," scale(0.7)"], // Move by 500px
          //background: ["red", "blue", "green"], // Go through three colors
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 2500, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
        
      });


  /////////////////////////////////////////////////////////////////////////
   const { keyframes, timing } = flash;
const headImg = useWebAnimations( {
  keyframes,
  timing: {
    ...timing,
    delay: 1500, // Delay 1s
    //duration: , // Speed up the animation
    iterations : Infinity,
    easing: "ease-in-out",
  },
});
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className="header">
        <Grid item xs={12} sm={6} className="main">
        
          <Typography variant="h1" component="h2" ref={text1ref.ref}>
          CORTEX
          </Typography>
          <Typography variant="h2" ref={text2ref.ref}>
          COPYWRITER 
          </Typography>
          <Typography variant="h6" ref={text3ref.ref}>
          Enhance your communications with psychology-based copywriting and UX writing
          </Typography>
          <button className={classes.btn} ref={btnref.ref}>Send Me Massage</button>
        </Grid>
        <Grid item xs={12} sm={6}>
              <img src={intro_p1} alt=" "  ref={mainImg.ref}></img>
              <img src={intro_p2} alt=" " className={classes.p2} ref={headImg.ref} ></img>
              <img src={intro_p3} alt=" " className={classes.p3} ref={brainImg.ref}  ></img>
          
        </Grid>
        
      </Grid>
     
    </div>
  );
}