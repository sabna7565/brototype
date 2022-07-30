import './Intro.scss'
import Header from '../header/Header'
import YouTube, { YouTubeProps } from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
    root: {
      width: '233px',
      marginLeft: '10px',

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  
const Intro = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '740',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        const bull = <span className={classes.bullet}>•</span>;
  return (
    <div><Header />
       <div className="videos">
        <div className="youtube">
         <div className="first cut">
         <YouTube videoId="ckub1RSlhic" opts={opts} onReady={onPlayerReady} />
         </div>
         <div className="secondcut">
         <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <GroupIcon />
        </Typography>
        <Typography variant="h5" component="h2">
            Win like an army
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
        We work as a team because we get paid only when you get paid.
          <br />
         
        </Typography>
      </CardContent>
      
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <CastForEducationIcon />
        </Typography>
        <Typography variant="h6" component="h2">
        You are the Student and the Teacher
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
        “We have learnt from others. You will learn from us. And someone else will learn from you”
       </Typography>
      </CardContent>
      
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <DescriptionIcon />
        </Typography>
        <Typography variant="h5" component="h2">
            No one size fit all classes
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
         Freely explore the different areas of programming. Find what you’re passionate about. And get after it.
          <br />
         
        </Typography>
      </CardContent>
      
    </Card>
    

         </div>
      </div>
      <div className="description"><p>Brocamp (former SPS) in Brief? </p>
      <p className='from'>Brocamp (former SPS) helps the young Indian generation who had benefited nothing from our country’s poor education system by providing an intensive industry relevant training on the leading software technologies.</p>
      <p className='from'>The Brocamp (former SPS) program is completely FREE upfront and our students pay zero tuition fee until they land a job. We believe everyone should get the right opportunities to learn, hence we do not charge any fees upfront.</p>
      <p className='from'>Brocamp (former SPS) is not just another training institute where you go learn something and leave forever. Brocamp (former SPS) is a community of high performance people who support each other and to win together. Each Brocamp (former SPS) grad will always be in touch with our community and help the new buddies as a way of giving back.</p>
      </div>
    </div>

    </div>
  )
}


export default Intro