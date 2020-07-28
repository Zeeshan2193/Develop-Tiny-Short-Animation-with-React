import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UxImg from "../images/services-6.svg";
import UxImg1 from "../images/services-7.svg"
import UxImg2 from "../images/services-5.svg";
import { Typography } from '@material-ui/core';
import useWebAnimations, { tada, flash, pulse, bounce, backInRight, backInLeft} from "@wellyshen/use-web-animations";

 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  blk2 :{
      padding: "4%",
  },
  blk1 :{
    padding: "4%",
}
}));

export default function Part2() {
  const classes = useStyles();

  const animateText1 = bounce;
  const keyfrmText1 = animateText1.keyframes;
  const tmgText1 = animateText1.timing;
  const tref = useWebAnimations( {
      keyframes: keyfrmText1,
      timing: {
        ...tmgText1,
        delay: 1000, // Delay 1s
        duration: 3000, // Speed up the animation
        iterations : Infinity,
        easing: "ease-in-out",
      },
    });
    ///////////////////////////////////////////////
    const animateText2 = bounce;
  const keyfrmText2 = animateText2.keyframes;
  const tmgText2 = animateText2.timing;
  const tref2 = useWebAnimations( {
      keyframes: keyfrmText2,
      timing: {
        ...tmgText2,
        delay: 1000, // Delay 1s
        duration: 3000, // Speed up the animation
        iterations : Infinity,
        easing: "ease-in-out",
      },
    });
    ////////////////////////for image 3 ////////////////////
    const animateText3 = pulse;
    const keyfrmText3 = animateText3.keyframes;
    const tmgText3 = animateText3.timing;
    const tref3 = useWebAnimations( {
        keyframes: keyfrmText3,
        timing: {
          ...tmgText3,
          delay: 1000, // Delay 1s
          duration: 3000, // Speed up the animation
          iterations : Infinity,
          easing: "ease-in-out",
        },
      });
      /////////////////////////list 1////////////////////////////
      const animateText4 = pulse;
      const keyfrmText4 = animateText4.keyframes;
      const tmgText4 = animateText4.timing;
      const tref4 = useWebAnimations( {
          keyframes: keyfrmText4,
          timing: {
            ...tmgText4,
            delay: 1000, // Delay 1s
            duration: 3000, // Speed up the animation
            iterations : Infinity,
            easing: "ease-in-out",
          },
        });
///////////////////////////List 2/////////////////////////////
const animateText5 = pulse;
const keyfrmText5 = animateText5.keyframes;
const tmgText5 = animateText5.timing;
const tref5 = useWebAnimations( {
    keyframes: keyfrmText5,
    timing: {
      ...tmgText5,
      delay: 1000, // Delay 1s
      duration: 3000, // Speed up the animation
      iterations : Infinity,
      easing: "ease-in-out",
    },
  });
  ///////////////////////////List 3/////////////////////////////
const animateText6 = tada;
const keyfrmText6 = animateText6.keyframes;
const tmgText6 = animateText6.timing;
const tref6 = useWebAnimations( {
    keyframes: keyfrmText6,
    timing: {
      ...tmgText6,
      delay: 1000, // Delay 1s
      duration: 9000, // Speed up the animation
      iterations : Infinity,
      easing: "ease-in-out",
    },
  });
    ///////////////////////////1st paragraph/////////////////////////////
const animateText7 = backInRight;
const keyfrmText7 = animateText7.keyframes;
const tmgText7 = animateText7.timing;
const tref7 = useWebAnimations( {
    keyframes: keyfrmText7,
    timing: {
      ...tmgText7,
     // delay: 1000, // Delay 1s
      duration: 4000, // Speed up the animation
      iterations : Infinity,
      easing: "ease-in-out",
    },
  });
     ///////////////////////////1st paragraph/////////////////////////////
const animateText8 = backInLeft;
const keyfrmText8 = animateText8.keyframes;
const tmgText8 = animateText8.timing;
const tref8 = useWebAnimations( {
    keyframes: keyfrmText8,
    timing: {
      ...tmgText8,
     // delay: 1000, // Delay 1s
      duration: 4000, // Speed up the animation
      iterations : Infinity,
      easing: "ease-in-out",
    },
  });
     ///////////////////////////1st paragraph/////////////////////////////
const animateText9 = backInRight;
const keyfrmText9 = animateText9.keyframes;
const tmgText9 = animateText9.timing;
const tref9 = useWebAnimations( {
    keyframes: keyfrmText9,
    timing: {
      ...tmgText9,
     // delay: 1000, // Delay 1s
      duration: 4000, // Speed up the animation
      iterations : Infinity,
      easing: "ease-in-out",
    },
  });

 
  return (
    <div className={classes.root} id="prt2Root">
      <Grid container spacing={0}><Grid item xs={12} sm={6} className={classes.blk1} >
           <img src={UxImg} alt="" ref={tref2.ref}></img> </Grid>
        <Grid item xs={12} sm={6} className={classes.blk2}>
          <Typography variant="h2" ref={tref7.ref}>UX Writing</Typography>
          <Typography variant="subtitle1" >
          I develop clear and useful text in product interfaces to help users reach a specific goal,
           whether that's completing a form or tapping a button. This includes every type of content
            from on-screen help systems,
           user onboarding and in-app messages to push notifications and tooltips.
           <div class="taglist" ref={tref4.ref}><div class="tag"> Microcopy</div><div class="tag">Taxonomy &amp; Labeling</div><div class="tag">Chatbots</div><div class="tag">User Research</div><div class="tag">Content Style Guide</div><div class="tag">User Testing</div><div class="tag">Design Principles</div><div class="tag">Prototype</div></div>
          </Typography></Grid>
      </Grid>

      <Grid container spacing={0}><Grid item xs={12} sm={6} className={classes.blk1}>
        <Typography variant="h2" ref ={tref8.ref}> Website Copywriting</Typography>
          <Typography variant="subtitle1">
          <p>Your website is a dialogue with your audience. 
              I capture the essence of your business and communicate it clearly. 
              Carefully considered writing and SEO best practices allow me to craft the perfect
               user journey online. Let me draw the map that guides users every step of the way 
               from discovery, to consideration, to conversion.</p>
          <div class="taglist" ref={tref5.ref}>
              <div class="tag">Information Architecture</div><div class="tag">Wireframes</div><div class="tag">Competitor Analysis</div><div class="tag">On-page SEO</div><div class="tag">Off-page SEO</div><div class="tag">USP/UVP</div><div class="tag">Landing Page</div><div class="tag">Sales Letter</div></div>
           </Typography></Grid>
        <Grid item xs={12} sm={6} className={classes.blk1}><img src={UxImg1} alt="" ref={tref.ref}></img> 
        </Grid></Grid>

        <Grid container spacing={0}>
        <Grid item xs={12} sm={6} className={classes.blk1}>
        <img src={UxImg2} alt="" ref ={tref3.ref}></img> 
        </Grid>
        <Grid item xs={12} sm={6} className={classes.blk1}>
           
           <Typography variant="h2" ref={tref9.ref}>
           Content Writing
          </Typography>

          <Typography variant="subtitle1">
          <p>Give your business a competitive edge with powerful content that can be targeted to any segment
               of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
               <div class="taglist" ref={tref6.ref}><div class="tag">Headlines &amp; Taglines</div><div class="tag">Content Strategy</div><div class="tag">Blogs &amp; Articles</div><div class="tag">Social Media Content</div><div class="tag">Video Scripts</div><div class="tag">eDMs &amp; Newsletters</div><div class="tag">Case Studies</div><div class="tag">Whitepapers</div></div>
           </Typography>
        </Grid>
        </Grid>



    </div>
  );
}