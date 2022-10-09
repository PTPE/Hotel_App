import classes from "./SideBar.module.css";
import SearchFilter from "../Components/SearchFilter";

const SideBar = (props) => {
  return (
    <div className={classes.side_bar}>
      <SearchFilter
        onSetFilterChoice={props.onSetFilterChoice}
        passClicked={props.passClicked}
      />
    </div>
  );
};

export default SideBar;
