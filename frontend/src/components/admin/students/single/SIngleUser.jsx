import './SIngleUser.scss'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { reset, } from '../../../../features/admin/users/single/singleUserSlice'
import Spinner from '../../../Spinner'
import nopic from '../../../../images/staff/nppic.jpg'
import noproof from '../../../../images/staff/adharshutter.jpg'
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "black",
    borderWidth: "3px",
    border: "box",
    webkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
    //boxShadow: '2px 4px 10px 1px rgba(52, 57, 57, 0.47)',
  },
  accordi: {
    marginTop: "2px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
function SingleUser () {
  const classes = useStyles();

  // const label = { inputProps: { 'aria-label': '' }};
  const [User, setUser] = useState([])

  const dispatch = useDispatch()
  
  const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.fetchUser);
  console.log("singleuser", user);

  useEffect(() => {

    if (isError) {
      toast.error(message || "Not Found");
      return
    }

    if (isSuccess && user) {
      setUser(user.user)
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

    if (isLoading) {
      return <Spinner />
    }

console.log("Second Singleuser", User);
    const mystudents = User ? User : '';

    
  return (
    <div  className='single'>
      <div className="usersingleContainer">
      <div className="ucenter">
          <div className={classes.root}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    {mystudents.name ? (
                      <span className="details">
                        {" "}
                        Name : &nbsp; {mystudents.name}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.batch ? (
                      <span className="details">
                        {" "}
                        Batch : &nbsp; {mystudents.batch}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.domain ? (
                      <span className="details">
                        {" "}
                        Domain : &nbsp;{mystudents.domain}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.week ? (
                      <span className="details">
                        {" "}
                        week : &nbsp;{mystudents.week}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>
                  Personal Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    {mystudents.email ? (
                      <span className="details">
                        {" "}
                        Email : &nbsp; {mystudents.email}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.mobile ? (
                      <span className="details">
                        {" "}
                        Mobile : &nbsp;{mystudents.mobile}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.dob ? (
                      <span className="details">
                        {" "}
                        Date of Birth : &nbsp;{mystudents.dob}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.age ? (
                      <span className="details"> Age : &nbsp;{mystudents.age} </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.gender ? (
                      <span className="details">
                        {" "}
                        Gender : &nbsp;{mystudents.gender}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.address ? (
                      <span className="details">
                        {" "}
                        Address : &nbsp;{mystudents.address}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.village ? (
                      <span className="details">
                        {" "}
                        Village : &nbsp;{mystudents.village}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.taluk ? (
                      <span className="details">
                        {" "}
                        Taluk : &nbsp;{mystudents.taluk}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>
                  Educational details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    {mystudents.qualification ? (
                      <span className="details">
                        {" "}
                        Qualification : &nbsp;{mystudents.qualification}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.college ? (
                      <span className="details">
                        {" "}
                        College Name : &nbsp;{mystudents.college}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>
                  Family Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    {mystudents.father ? (
                      <span className="details">
                        {" "}
                        Father Name : &nbsp;{mystudents.father}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.fcontact ? (
                      <span className="details">
                        {" "}
                        Father's Contact : &nbsp;{mystudents.fcontact}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.mother ? (
                      <span className="details">
                        {" "}
                        Mother Name : &nbsp;{mystudents.mother}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.guardian ? (
                      <span className="details">
                        {" "}
                        Name of Guardian : &nbsp;{mystudents.guardian}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.relationship ? (
                      <span className="details">
                        {" "}
                        Relation of guardian : &nbsp;{mystudents.relationship}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>
                  Career Informations
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>
                    {mystudents.experience ? (
                      <span className="details">
                        {" "}
                        Experience : &nbsp;{mystudents.experience}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.company ? (
                      <span className="details">
                        {" "}
                        Company Name : &nbsp;{mystudents.company}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {mystudents.designation ? (
                      <span className="details">
                        {" "}
                        Designation : &nbsp;{mystudents.designation}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>Profile Image</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <img style={{width: '200px', height: '200px'}}
                    src={mystudents.profile_image ? mystudents.profile_image : nopic}
                    alt=""
                    className="useradImg"
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.accordi}
              >
                <Typography className={classes.heading}>Proof Image</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <img 
                    src={mystudents.proof_image ? mystudents.proof_image : noproof}
                    alt=""
                    className="useradImg"
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

      </div>
      
         
    </div>
  )
}
 
export default SingleUser