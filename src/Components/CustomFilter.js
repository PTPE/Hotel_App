import classes from "./CustomFilter.module.css";

const CustomFilter = (props) => {
  const ascendingHandler = (event) => {
    props.passAscending(event.target.value);
  };
  return (
    <div className={classes.custom_filter}>
      <select onChange={ascendingHandler} className={classes.custom_choice}>
        <option value="為您精選">為您精選</option>
        <option value="價錢由低至高">價錢由低至高</option>
        <option value="價錢由高至低">價錢由高至低</option>
        <option value="星級最高">星級最高</option>
      </select>
    </div>
  );
};

export default CustomFilter;
