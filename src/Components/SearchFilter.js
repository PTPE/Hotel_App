import { useState, useEffect } from "react";
import classes from "./SearchFilter.module.css";

const choice = [
  "免費無線網路",
  "禁煙客房",
  "廚房",
  "洗衣機",
  "停車場",
  "寵物友善",
];

const initialState = [false, false, false, false, false, false];

const SearchFilter = (props) => {
  const [clicked, setClicked] = useState(initialState);
  const [searchChoice, setChoice] = useState();

  const clickedHandler = (checked, i) => {
    setClicked((prev) => {
      const state = [...prev];
      state[i] = checked;
      return state;
    });
  };

  useEffect(() => {
    let chosen = [];
    for (let i = 0; i < choice.length; i++) {
      clicked[i] && chosen.push(choice[i]);
      // console.log(chosen);
      props.onSetFilter(chosen);
    }
    props.passClicked(clicked);
  }, [clicked]);

  return (
    <div className={classes.search_filter}>
      <div className={classes.header}>透過以下分類搜尋：</div>
      <div className={classes.border}></div>
      <div className={classes.choice_type}>
        <button type="button">飯店設施</button>
        <img
          className={classes.arrow_img}
          src="https://cdn-icons-png.flaticon.com/512/0/589.png"
        />
      </div>
      <div className={classes.content}>
        {choice.map((item, i) => {
          return [
            <div key={i} className={classes.choice}>
              <input
                className={classes.checkbox}
                id={item}
                type="checkbox"
                value={item}
                onClick={(event) => {
                  // filterHandler(event);
                  clickedHandler(event.target.checked, i);
                }}
              ></input>
              <label htmlFor={item}>{item}</label>
            </div>,
          ];
        })}
      </div>
    </div>
  );
};

export default SearchFilter;
