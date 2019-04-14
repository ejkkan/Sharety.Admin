import Link from "next/link";
import Drawer from "../components/drawer";
import Appbar from "../components/appbar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  },
  childrenOffset: {
    backgroundColor: "red",
    display: "flex",
    // alignSelf: "stretch",
    flexDirection: "column",
    marginLeft: 250,
    marginRight: 10
  }
});

export default withStyles(styles)(props => (
  <div>
    <Appbar />
    <Drawer />
    <div className={props.classes.childrenOffset}>{props.children}</div>
  </div>
));
