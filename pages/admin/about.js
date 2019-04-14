/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import AdminWrapper from "../../components/wrapper";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <AdminWrapper/>
    <Typography variant="h4" gutterBottom>
        Material-UI
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
        about page
    </Typography>
    <Typography gutterBottom>
        <Link href="/admin">
        <a>Admin / Start</a>
        </Link>
    </Typography>
    <Typography gutterBottom>
        <Link href="/admin/login">
        <a>Admin / Logout</a>
        </Link>
    </Typography>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
