import "./App.css"

const Cards = ({id, className}) => {
return(
  <div id={id} className={className}></div>
);
};

const mainObj = {

  App: () => {
    return(
      <div id="container">
        <Cards id="box1" className="box"/>
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
  },
};

export default mainObj.App;



