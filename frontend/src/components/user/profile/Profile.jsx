import React from "react";
import "./Profile.scss";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import nopic from "../../../images/user/noprofile.png";
import Adhar from "../../../images/user/adgar2.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
const Profile = () => {
  const classes = useStyles();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const {token}=user?user:"";
  const config = {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  };
  
  console.log("userhome", user);
  return (
    <div className="usersingle">
      <span className="profile">PROFILE - {user.name}</span>
      <Link to="/user/more">
        <button className="addman">Update Details</button>
      </Link>

      <div className="usersingleCntainer">
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
                    {user.name ? (
                      <span className="details">
                        {" "}
                        Name : &nbsp; {user.name}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.batch ? (
                      <span className="details">
                        {" "}
                        Batch : &nbsp; {user.batch}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.domain ? (
                      <span className="details">
                        {" "}
                        Domain : &nbsp;{user.domain}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.week ? (
                      <span className="details">
                        {" "}
                        week : &nbsp;{user.week}{" "}
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
                    {user.email ? (
                      <span className="details">
                        {" "}
                        Email : &nbsp; {user.email}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.mobile ? (
                      <span className="details">
                        {" "}
                        Mobile : &nbsp;{user.mobile}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.dob ? (
                      <span className="details">
                        {" "}
                        Date of Birth : &nbsp;{user.dob}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.age ? (
                      <span className="details"> Age : &nbsp;{user.age} </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.gender ? (
                      <span className="details">
                        {" "}
                        Gender : &nbsp;{user.gender}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.address ? (
                      <span className="details">
                        {" "}
                        Address : &nbsp;{user.address}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.village ? (
                      <span className="details">
                        {" "}
                        Village : &nbsp;{user.village}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.taluk ? (
                      <span className="details">
                        {" "}
                        Taluk : &nbsp;{user.taluk}{" "}
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
                    {user.qualification ? (
                      <span className="details">
                        {" "}
                        Qualification : &nbsp;{user.qualification}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.college ? (
                      <span className="details">
                        {" "}
                        College Name : &nbsp;{user.college}{" "}
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
                    {user.father ? (
                      <span className="details">
                        {" "}
                        Father Name : &nbsp;{user.father}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.fcontact ? (
                      <span className="details">
                        {" "}
                        Father's Contact : &nbsp;{user.fcontact}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.mother ? (
                      <span className="details">
                        {" "}
                        Mother Name : &nbsp;{user.mother}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.guardian ? (
                      <span className="details">
                        {" "}
                        Name of Guardian : &nbsp;{user.guardian}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.relationship ? (
                      <span className="details">
                        {" "}
                        Relation of guardian : &nbsp;{user.relationship}{" "}
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
                    {user.experience ? (
                      <span className="details">
                        {" "}
                        Experience : &nbsp;{user.experience}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.company ? (
                      <span className="details">
                        {" "}
                        Company Name : &nbsp;{user.company}{" "}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                  <div>
                    {user.designation ? (
                      <span className="details">
                        {" "}
                        Designation : &nbsp;{user.designation}{" "}
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
                <Typography className={classes.heading}>Proof Image</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <img
                    src={user.proof_image ? user.proof_image : Adhar}
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
  );
};

export default Profile;
