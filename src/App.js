import { useEffect, useState } from "react";
import classes from "./App.module.css";
import MainContant from "./Layout/MainContent";
import SideBar from "./Layout/SideBar";

const data = [
  {
    img: "https://www.mrhost.com.tw/uploads/1/3/2/6/132694223/s522922251240482309_p503_i1_w800.jpeg",
    name: "台北西門町意舍酒店",
    location: "台北市",
    description:
      "台北西門町意舍酒店距離捷運西門站步行 7分鐘，設有餐廳、洗衣服務和全館免費 WiFi，提供現代化的環保住宿。台北西門町意舍酒店位於西門町商圈的中心地帶，交通便利，距離西門紅樓步行 7 分鐘；距離華西街觀光夜市 7分鐘車程；距離桃園國際機場約 45 分鐘車程。所有客房均裝潢典雅且空間寬敞，設有空調、平面有線電視、休息區、私人衛浴、吹風機、高級盥洗用品和室內拖鞋，提供舒適的住宿體驗。24小時接待櫃台可提供行李寄存服務、外幣兌換服務和觀光旅遊服務。館內會議設施可供舉辦會議和活動。Amba餐廳供應每日早餐，住客可在此享用西式料理。住客亦可於Amba Café咖啡廳享用輕食點心，並於酒吧小酌一杯。",
    rateNum: "4.5",
    rateDes: "好極了",
    price: "TWD$1,733起",
    service: ["停車場", "洗衣機"],
  },
  {
    img: "https://www.mrhost.com.tw/uploads/1/3/2/6/132694223/s522922251240482309_p524_i1_w800.jpeg?width=640",
    name: "德立莊昆明館",
    location: "台北市",
    description:
      "德立莊酒店位於台北，毗鄰捷運西門站，提供舒適的住宿環境。所有客房均提供免費 WiFi。 德立莊酒店緊鄰有各式各樣餐飲和娛樂選項的西門町購物商圈，距離台北車站為 1 站捷運車程，距離台北松山機場為 7 站捷運車程，距離二二八和平紀念公園和總統府步行皆為 7 分鐘。 每間客房均設有空調、50 吋平面電視、小冰箱和電熱水壺，並提供礦泉水。私人衛浴內配有淋浴設施。 24 小時櫃台親切的工作人員可協助客人免費寄存行李，也可提供在地旅遊資訊。",
    rateNum: "4.1",
    rateDes: "非常好",
    price: "TWD$1,040起",
    service: ["免費無線網路", "停車場"],
  },
  {
    img: "https://www.mrhost.com.tw/uploads/1/3/2/6/132694223/s522922251240482309_p525_i1_w800.jpeg?width=640",
    name: "鳳凰閣溫泉旅店",
    location: "台北市",
    description:
      "鳳凰閣温泉飯店坐落在北投，著名的溫泉區之一，並提供溫泉設施和住宿。此外，也提供免費停車場和免費的 WiFi。 鳳凰閣溫泉大酒店從台北火車站有 30 分鐘的車程，或 1 小時的捷運車程。從捷運新北投站抵達飯店需要步行 15 分鐘。附近的其他地標如北投溫泉區、北投圖書館和北投溫泉博物館均不到 10 分鐘的步行路程即可到達。 所有的客房設有空調，且以榻榻米和硬木地板營造出日式氛圍。另外還設有衣櫃和平面有線電視。私人浴室配有淋浴和浴缸設施、免費盥洗用品和吹風機。 24小時服務的前台可提供影印/傳真和行李寄存服務。在飯店大廳，歡迎住客免費使用咖啡機。",
    rateNum: "4.0",
    rateDes: "非常好",
    price: "TWD$2,682起",
    service: ["免費無線網路", "停車場"],
  },
  {
    img: "https://dkgzabag3frbh.cloudfront.net/attachments/property_photos/images/208349/800press-public-1.jpg",
    name: "北行旅",
    location: "台北市",
    description:
      "北行旅地理位置超棒，位於台北的中正區，距離臺北市中山堂 200 公尺，距離中華民國總統府 300 公尺，距離西門紅樓 700 公尺。這間住宿提供的設施與服務包括共用廚房、共用休息室以及全館 WiFi（免費）。住宿有旅遊諮詢台服務和行李寄放服務。 北行旅為住客提供空調客房。所有房型均有書桌、電熱水壺、冰箱、保險箱、平面電視以及附沖洗座的私人衛浴。這間住宿的每間客房都有寢具和毛巾。 北行旅附近的人氣景點包括剝皮寮老街、台北植物園和國立中正紀念堂。最近的機場是台北松山機場，距離 北行旅 5 公里。",
    rateNum: "5.0",
    rateDes: "好極了",
    price: "TWD$1,120起",
    service: ["免費無線網路"],
  },
  {
    img: "https://dkgzabag3frbh.cloudfront.net/attachments/property_photos/images/211007/800press-outlook-4.jpg",
    name: "甲山林湯旅",
    location: "台北市",
    description:
      "甲山林湯旅位在台北，距離遼寧街夜市不到 1 公里，有健身中心、免費私人停車位、花園和露台。這間住宿距離行天宮 1.5 公里，距離台北小巨蛋 2.2 公里，距離寧夏觀光夜市 2.7 公里。住宿提供 WiFi（免費）和 24 小時接待櫃檯。 甲山林湯旅的所有客房均備有電熱水壺。這間住宿的客房均提供平面電視、空調以及備有浴袍的私人衛浴。部分客房有陽台。 甲山林湯旅的每間客房都有寢具和毛巾。 甲山林湯旅距離大安森林公園 3.3 公里，距離迪化街 3.6 公里。最近的機場是台北松山機場，距離這間住宿 2.1 公里。住宿提供付費機場接駁服務。",
    rateNum: "4.3",
    rateDes: "非常好",
    price: "TWD$3,600起",
    service: ["免費無線網路", "停車場", "洗衣機"],
  },
];

function App(props) {
  const [custom, setCustom] = useState("為您精選");
  const [searchChoice, setSearchChoice] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [sortedData, setSortedData] = useState(filteredData);
  const [clicked, setClicled] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const passClickedHandler = (click) => {
    setClicled(click);
  };

  const SetFilterChoiceHandler = (filter) => {
    setSearchChoice(filter);
  };

  const sortPrice = (custom) => {
    setCustom(custom);
  };

  useEffect(() => {
    //filter
    let filteredChoice = [];

    const testFilter = () => {
      return data.map((hotel) =>
        searchChoice.every((filter_data) =>
          hotel.service.some((service) => service === filter_data)
        )
      );
    };

    for (let i = 0; i < 5; i++) {
      testFilter()[i] && filteredChoice.push(data[i]);
    }

    setFilteredData(filteredChoice);
  }, [clicked]);

  useEffect(() => {
    //sort
    const priceAscending = [...filteredData].sort(
      (a, b) =>
        a.price.substring(4, a.price.length - 1).replaceAll(",", "") -
        b.price.substring(4, b.price.length - 1).replaceAll(",", "")
    );

    const priceDescending = [...filteredData].sort(
      (a, b) =>
        b.price.substring(4, a.price.length - 1).replaceAll(",", "") -
        a.price.substring(4, b.price.length - 1).replaceAll(",", "")
    );

    const rateSort = filteredData.filter((hotel) => hotel.rateNum >= 4.5);
    custom === "為您精選" && setSortedData(filteredData);
    custom === "價錢由低至高" && setSortedData(priceAscending);
    custom === "價錢由高至低" && setSortedData(priceDescending);
    custom === "星級最高" && setSortedData(rateSort);
  }, [custom, filteredData]);

  return (
    <div className={classes.app}>
      <SideBar
        onSetFilterChoice={SetFilterChoiceHandler}
        passClicked={passClickedHandler}
      />
      <MainContant passData={sortedData} passAscending={sortPrice} />
    </div>
  );
}

export default App;
