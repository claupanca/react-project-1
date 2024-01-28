import logo from "./logo.svg";
import "./App.css";
import ImageSlider from "./ImageSlider";
import car_1 from "./assets/car_1.jpg";
import car_2 from "./assets/car_2.jpg";
import car_3 from "./assets/car_3.jpg";
import car_4 from "./assets/car_4.jpg";
import car_5 from "./assets/car_5.jpg";
import car_6 from "./assets/car_6.jpg";

function App() {
  // console.log(images[0]);
  return (
    <div>
      <ImageSlider images={images} />
      <a href="/" style={{ fontSize: "3rem" }}>
        LINK
      </a>
    </div>
  );
}
// const image = require("./assets/car_1.jpg");
const images = [car_1, car_2, car_3, car_4, car_5, car_6];

export default App;
