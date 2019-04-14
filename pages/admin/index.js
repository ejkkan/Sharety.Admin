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
  },
  childrenOffset: {
    backgroundColor:'red',
    marginLeft: 250,
    display: "flex",
    alignSelf: "stretch",
    flexDirection: "column"
},
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AdminWrapper>
          <div className={classes.childrenOffset}>
            <Typography variant="h4" gutterBottom>
                Material-UI
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                about page
            </Typography>
            <Typography gutterBottom>
                <Link href="/admin/about">
                <a>Admin / About</a>
                </Link>
            </Typography>
            <Button variant="contained" color="primary">
                Do nothing button
            </Button>
        </div>
    </AdminWrapper>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
