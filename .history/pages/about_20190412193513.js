/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import drawer from "../components/drawer";

const styles = theme => ({
  root: {
    display: "flex",
    background
  }
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <drawer />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
