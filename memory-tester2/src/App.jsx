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
  const imageFunction = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  let finalScore = 0;
  let boxArr = [];

  // invokes random function, and assigns images to repsecive boxes
  {window.onload = initiateRandom();
  console.log(initialImages);
  };
  const [boxState, setBoxState] = useState(initialImages);
  const [isClickable, SetIsClickable] = useState(true);
  //const [newGame, setNewgame] = useState(window.location.reload(false));
  const [display, setDisplay] = useState("The aim is to click on an image only once");

  const pageReload = () => {
    window.location.reload(false)
  };

  //reshuffles all images and updates state.
  const updateImgs = (e) => {
    reShuffle();
    console.log(boxState);
    setBoxState(reshuffledArr);
    console.log(`reshuffled Arr: ${reshuffledArr}`);
    console.log(boxState);
  };

  const updateDisplay = () => {
    /*let text;
    if(selectedImgs.length < 9){
      text = "The aim is to click on an image only once";
    }
    if(selectedImgs.length > 9){
      text = finalScore;
    }
    return text;
    */
    console.log(display);
    setDisplay(() => `${finalScore}`);
    console.log(display);
    
  };

  //reloads new images and saves clicked image to an array
  const captureClicked = (e, imgSrc) => {
    updateImgs(e);
    selectedImgs.push(e.target.id);
    selectedImgs.length === 11 ? selectedImgs.pop(): null;
    console.log(selectedImgs);
  };

  const calculateScore = () => {
    if(selectedImgs.length > 9 & selectedImgs.length < 11){
      SetIsClickable(false);
      console.log("10 clicks reached");
      console.log(selectedImgs);
    };
    if(selectedImgs.length === 10){
      const uniqueItems = new Set([...selectedImgs]);
      finalScore = uniqueItems.size * 10;
      finalScore = "Your score is "+ finalScore+"%";
      alert(finalScore);
     // updateDisplay();
      return finalScore;
    }
  };

  const renderImages = () => {
    for(let i = 0; i < 10; i++){
      const box =  <Cards img={imageFunction[i]()} onClick={(e) => {
        calculateScore();
        isClickable ? captureClicked(e, imageFunction[i]()) : null;
      }} className="box"/>
      boxArr.push(box);
    }
    return boxArr;
  };
  return(
   <>
     <h1>Test Your Memory</h1>
     <div id="container">
       {renderImages()}
     </div>
     <button className="reload" onClick={() => pageReload()}>Start New Game</button>
     <div className="scoreDisplay"></div>
   </>
  )
};

export default App;

//removed code
  /*
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

        {renderImages()}
     </div>
     
    <button id="score" onClick={() => {
        window.location.reload;
        initateRandom();
       }
      }>Start</button>
    </>
  );
  */



