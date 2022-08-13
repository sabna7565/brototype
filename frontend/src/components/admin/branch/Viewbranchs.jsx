import React from "react";
import "./Viewbranchs.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  allBranch,
  reset,
} from "../../../features/admin/branch/addBranchSlice";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    color: "white",
    height: "aut0",
    width: "260px",
    lineHeight: "28px",
    gap: "10px",
    backgroundColor: "rgb(245, 237, 237)",
    WebkitBoxShadow: "2px 4px 10px 1px rgba(2, 2, 2, 4.47) ",
    boxShadow: "2px 4px 10px 1px rgb(7, 7, 7)",
  },
  viewimg: {
    width: "240px",
    height: "150px",
  },
  headnames: {
    color: "black",
    fontSize: "40px",
    marginTop: "10px",

  },
  location: {
    color: "black",
    fontSize: "20px",
    marginTop: "3px",
  },
  second: {
    color: "black",
    fontSize: "15px",
    marginTop: "-14px",
  },
}));

const Viewbranchs = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [Branch, setBranch] = useState();
  const { branch, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.allBranchs
  );

  useEffect(() => {
    if (isError) {
      toast.error(message || "Not Found");
    }

    if (isSuccess && branch) {
      setBranch(branch);
    }

    dispatch(reset());
  }, [branch, isSuccess, isError, message, dispatch]);

  const rows = Branch ? Branch?.branch : [];
  console.log("all branch", rows);
  function FormRow() {
    return (
      <React.Fragment>
        {rows.map((item) => (
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <img src={item.branch_image} className={classes.viewimg} />
              <h1 className={classes.headnames}>{item.branch_name}</h1>
              <h1 className={classes.location}>{item.location}</h1>
              <h1 className={classes.second}>{item.address}</h1>
            </Paper>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <>
      <h2 style={{marginTop: '50px'}}><u>Office Spaces</u></h2>
      <div className="branchs">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={1}>
              <FormRow></FormRow>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Viewbranchs;
