import "./App.css"
import {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10} from "./Image.jsx" //images
import initiateRandom, {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, reShuffle, initialImages, reshuffledArr} from "./random.js"
import {useState, useEffect} from "react"

let selectedImgs = [];

//child component
const Cards = ({id, className, img, boxclicked, onClick}) => {
  return(
    <div id={id} className={className} boxclicked={boxclicked} onClick={onClick}>{img}</div>
    );
};

/*
//pushes the i.d. of image that has been clicked on to selectedImgs array
const saveSelectedImgs = (e) => {
  if(!selectedImgs.includes(e.target.id)){
    selectedImgs.push(e.target.id);
    localStorage.setItem("selectedImages", JSON.stringify(selectedImgs));
  };
   
   console.log(selectedImgs);
   //location.reload();
   const retrievedData = JSON.parse(localStorage.getItem("selectedImages"));
   console.log(`retrievedData: ${retrievedData}`);
   reShuffle();
};
*/

//parent component
const App = () => {
  // invokes random function, and assigns images to repsecive boxes
  {window.onload = initiateRandom();
    console.log(initialImages);
  };
  const [boxState, setBoxState] = useState([...initialImages]);

  //reshuffles all images and updates state.
  const updateImgs = (e) => {
    reShuffle();
    console.log({boxState});
    setBoxState([...reshuffledArr]);
    console.log({boxState});
  };

  return(
   <>
    <div id="container">
        <Cards id="box1" img={img1()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box2" img={img2()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box3" img={img3()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box4" img={img4()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box5" img={img5()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box6" img={img6()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box7" img={img7()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box8" img={img8()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box9" img={img9()} onClick={(e) => updateImgs(e)} className="box"/>
        <Cards id="box10" img={img10()} onClick={(e) => updateImgs(e)} className="box"/>
     </div>
    <div id="score"></div>
    </>
  );
};

export default App;



