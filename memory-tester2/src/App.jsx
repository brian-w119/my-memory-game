import "./App.css"
import {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10} from "./Image.jsx" //images
import {init, storageArr} from "./random.js" //imports random value function and the images shuffled

//child component
const Cards = ({id, className, img}) => {
  return(
    <div id={id} className={className}>{img}</div>
    );
  };


//parent component
const App = () => {
  return(
    <div id="container">
        <Cards id="box1" img={Img10()} className="box"/>
        <Cards id="box2" className="box"/>
        <Cards id="box3" className="box"/>
        <Cards id="box4" className="box"/>
        <Cards id="box5" className="box"/>
        <Cards id="box6" className="box"/>
        <Cards id="box7" className="box"/>
        <Cards id="box8" className="box"/>
        <Cards id="box9" className="box"/>
        <Cards id="box10" className="box"/>
    </div>
  );
};

export default App;




