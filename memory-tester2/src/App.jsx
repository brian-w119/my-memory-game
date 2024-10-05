import "./App.css"

const Cards = ({id, className, img}) => {
  return(
    <div id={id} className={className}>{img}</div>
    );
  };

const Img1 = () => {
    return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img1.png?raw=true" />
};

const Img2 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img2.png?raw=true" />
}

const Img3 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img3.png?raw=true" />
}

const Img4 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img4.png?raw=true" />
}

const Img5 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img5.png?raw=true" />
}

const Img6 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img6.png?raw=true" />
}

const Img7 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img7.png?raw=true" />
}

const Img8 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img8.png?raw=true" />
}

const Img9 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img9.png?raw=true" />
}

const Img10 = () => {
  return <img className="images" src="https://github.com/brian-w119/memory-game-images/blob/main/img10.png?raw=true" />
}

const imgArr = [Img1(), Img2(), Img3(), Img4(), Img5(), Img6(), Img7(), Img8(), Img9(), Img10()];

const shuffleImgs = () => {

};

const App = () => {
  return(
    <div id="container">
        <Cards id="box1" img={Img4()} className="box"/>
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




