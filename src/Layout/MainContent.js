import classes from "./MainContent.module.css";
import HotelList from "../Components/HotelList";
import CustomFilter from "../Components/CustomFilter";

const MainContant = (props) => {
  return (
    <div className={classes.main_content}>
      <div className={classes.custom_filter}>
        <CustomFilter passAscending={props.passAscending} />
      </div>
      <HotelList passData={props.passData} onSetFilter={props.onSetFilter} />
    </div>
  );
};

export default MainContant;
