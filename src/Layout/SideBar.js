import classes from "./SideBar.module.css";
import SearchFilter from "../Components/SearchFilter";

const SideBar = (props) => {
  return (
    <div className={classes.side_bar}>
      <SearchFilter
        onSetFilter={props.onSetFilter}
        passClicked={props.passClicked}
      />
    </div>
  );
};

export default SideBar;
