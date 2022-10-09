import classes from "./HotelList.module.css";
import HotelCard from "./HotelCard";

const HotelList = (props) => {
  return (
    <div className={classes.hotel_list}>
      <div className={classes.title}>共找到{props.passData.length}間房</div>
      {props.passData.map((hotel, i) => {
        return <HotelCard passData={hotel} key={i} />;
      })}
    </div>
  );
};

export default HotelList;
