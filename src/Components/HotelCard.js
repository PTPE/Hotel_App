import classes from "./HotelCard.module.css";

const HotelCard = (props) => {
  return [
    <div className={classes.hotel_card}>
      <img className={classes.hotel_img} src={props.passData.img}></img>
      <div className={classes.context}>
        <div className={classes.name}>{props.passData.name}</div>
        <div className={classes.location}>
          <img
            className={classes.map_marker}
            src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
          />
          {props.passData.location}
        </div>
        <div className={classes.description}>
          {props.passData.description.length > 120 &&
            props.passData.description.substring(0, 113).padEnd(116, ".")}
        </div>
        <div className={classes.rate}>
          <div className={classes.rate_des}>{props.passData.rateDes}</div>
          <div className={classes.rate_num}>{props.passData.rateNum}</div>
        </div>
        <div className={classes.price}>
          {props.passData.price.substring(0, props.passData.price.length - 1)}
          <span className={classes.price_des}>
            {props.passData.price.substring(
              props.passData.price.length - 1,
              props.passData.price.length
            )}
          </span>
        </div>
      </div>
    </div>,
  ];
};

export default HotelCard;
