import "./App.css"
import {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10} from "./Image.jsx" //images
import initateRandom from "./random.js";
import initiateRandom, {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, reShuffle, initialImages, reshuffledArr} from "./random.js"
import {useState, useEffect} from "react"

let selectedImgs = [];

//child component
const Cards = ({id, className, img, boxclicked, onClick}) => {
  return(
    <div id={id} className={className} boxclicked={boxclicked} onClick={onClick}>{img}</div>
    );
};

//parent component
const App = () => {
  let finalScore = 0;

  // invokes random function, and assigns images to repsecive boxes
  {window.onload = initiateRandom();
  console.log(initialImages);
  };
  const [boxState, setBoxState] = useState(initialImages);
  const [isClickable, SetIsClickable] = useState(true);

  //reshuffles all images and updates state.
  const updateImgs = (e) => {
    reShuffle();
    console.log(boxState);
    setBoxState(reshuffledArr);
    console.log(`reshuffled Arr: ${reshuffledArr}`);
    console.log(boxState);
  };

  //reloads new images and saves clicked image to an array
  const captureClicked = (e, imgSrc) => {
    updateImgs(e);
    selectedImgs.push(e.target.id);
    console.log(selectedImgs);
  };

  const calculateScore = () => {
    if(selectedImgs.length > 9){
      SetIsClickable(false);
      console.log("10 clicks reached");
      console.log(selectedImgs);
    };
    if(selectedImgs.length === 10){
      const uniqueItems = new Set([...selectedImgs]);
      finalScore = uniqueItems.size * 10;
      finalScore = "Your score is "+ finalScore+"%";
      alert(finalScore);
      return finalScore;
    }
  };
  return(
   <>
    <div id="container">
        <Cards id="box1" img={img1()} onClick={(e) => {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box2" img={img2()} onClick={(e) =>  {
          calculateScore();
          isClickable ? captureClicked(e, img2()) : null;
        }} className="box"/>

       <Cards id="box3" img={img3()} onClick={(e) => {
          calculateScore();
          isClickable ? captureClicked(e, img3()) : null;
        }} className="box"/>

        <Cards id="box4" img={img4()} onClick={(e) =>  {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box5" img={img5()} onClick={(e) => {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box6" img={img6()} onClick={(e) =>  {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box7" img={img7()} onClick={(e) => {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box8" img={img8()} onClick={(e) =>  {
          calculateScore();
          isClickable ? captureClicked(e, img1()) : null;
        }} className="box"/>

        <Cards id="box1" img={img9()} onClick={(e) => {
          calculateScore();
          isClickable ? captureClicked(e, img9()) : null;
        }} className="box"/>

        <Cards id="box10" img={img10()} onClick={(e) =>  {
          calculateScore();
          isClickable ? captureClicked(e, img10()) : null;
        }} className="box"/>
     </div>
    <button id="score" onClick={() => {
      window.location.reload;
      initateRandom();
     }
    }>Start</button>
    </>
  );
};

export default App;



