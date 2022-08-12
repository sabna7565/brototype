import "./Procard.scss";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import * as api from "../../../api/home";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  ssnip1344: {
    fontFamily: 'Times New Roman',
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
    minWidth: '230px',
    maxWidth: '315px',
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '1.4em',
    backgroundColor: '#141414',
    webkitBoxSizing: 'border-box',
    boxSizing: 'border-box',
    webkitTransition: 'all 0.25s ease',
    transition: 'all 0.25s ease',
    height: '270px',
    textTransform: 'capitalize',

  },
  background: {
    width: '100%',
    verticalAlign: 'top',
    opacity: '0.2',
    WwebkitFilter: 'grayscale(100%) blur(10px)',
    filter: 'grayscale(100%) blur(10px)',
    webkitTransition: 'all 2s ease',
    transition: 'all 2s ease',
  },
  figcaption: {
    width: '100%',
    padding: '15px 25px',
    position: 'absolute',
    left: '0',
    top: '60%',
  },
  profile: {
    borderRadius: '50%',
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    maxWidth: '100px',
    minWidth: '100px',
    minHeight: '100px',
    maxHeight: '100px',
    opacity: '1',
    marginTop: '50px',
    boxShadow: '3px 3px 20px rgba(0, 0, 0, 0.5)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    webkitTransform: 'translate(-50%, 0%)',
    transform: 'translate(-50%, 0%)',
  },
  h3figcaption: {
    margin: '0 0 5px',
    fontWeight: '600',
    fontSize: '1.4em',
  },
  spanfigcaption: {
    display: 'block',
    fontSize: '1.2em',
    color: '#f39c12',
    opacity: '0.75',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Procard = () => {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.item));
  };

  const [Fulldata, setFulldata] = useState({ loading: false, done: false });

  useEffect(() => {
    !Fulldata.done && fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    setFulldata((prev) => ({ ...prev, loading: true }));
    try {
      const { data } = await api.viewPlacement();
      if (data?.placement) {
        setFulldata((prev) => ({
          ...prev,
          placement: data["placement"],
          loading: false,
          done: true,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("important....", Fulldata.placement);
  let placements = Fulldata.placement ? Fulldata.placement : [];

  return (
    <>
      <Header />
      <div className="wsingleplacement">
      <div>
      <h1 className="placehead">Placements</h1>
      </div>
      <div>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {placements?.map(item => (
            <Grid key={item} item>
              {/* <Paper className={classes.paper} /> */}
              <figure className={classes.ssnip1344}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="profile-sample1" className={classes.background} />
              <img src={item.photo} alt="profile-sample1" className={classes.profile} />
                <figcaption className={classes.figcaption}>
                  <h3 className={classes.h3figcaption}>{item.name}</h3>
                  <span className={classes.spanfigcaption}>{item.company}</span>
                  <h4>{item.designation}</h4>
                  <span >{item.lpa}</span>
                </figcaption>
              </figure>
              {/* </Paper> */}
            </Grid>

          ))}
        </Grid>
      </Grid>
      
    </Grid>
    </div>
      </div>
    </>
  );
};

export default Procard;
