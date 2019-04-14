import Link from "next/link";
import Drawer from "../components/drawer";
import Appbar from "../components/appbar";

export default props => (
  <div>
    <Appbar />
    <Drawer />
    {props.children}
  </div>
);
