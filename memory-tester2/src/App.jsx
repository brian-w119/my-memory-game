import "./App.css"
import {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10} from "./Image.jsx" //images
import initiateRandom, {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10} from "./random.js" //imports random value function and the images shuffled

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
        <Cards id="box1" img={img1()} className="box"/>
        <Cards id="box2" img={img2()} className="box"/>
        <Cards id="box3" img={img3()} className="box"/>
        <Cards id="box4" img={img4()} className="box"/>
        <Cards id="box5" img={img5()} className="box"/>
        <Cards id="box6" img={img6()} className="box"/>
        <Cards id="box7" img={img7()} className="box"/>
        <Cards id="box8" img={img8()} className="box"/>
        <Cards id="box9" img={img9()} className="box"/>
        <Cards id="box10" img={img10()} className="box"/>
    </div>
  );
  
};
initiateRandom();


export default App;




