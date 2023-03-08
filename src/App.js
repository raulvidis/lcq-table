import logo from "./images/apex-logo.png"
import table from "./images/table.png"
import teamA from "./images/team_one.png"
import teamB from "./images/team_two.png"
import './App.css';
import { useState } from "react";

function App() {

  let jsonData = require('./mockup-data/mockup-data-bracket.json');

  const formatDate = (dateString) => {
    const dateParts = dateString.split("/");
    const month = getMonthName(dateParts[1]);
    const day = dateParts[0];
    const year = dateParts[2];
    return `${month} ${day}, ${year}`;
  }

  const getMonthName = (monthNumber) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[parseInt(monthNumber) - 1];
  }

  const [btnStateAnims, setBtnStateAnims] = useState(false);

  const [btnStateContent, setBtnStateContent] = useState(false);

  const [btnStateHide, setBtnStateHide] = useState(false);
  const [btnStateShow, setBtnStateShow] = useState(false);

  const [btnStateGamesShow, setBtnStateGamesShow] = useState(false);
  const [btnStateGamesHide, setBtnStateGamesHide] = useState(false);

  let toggleClassCheckAnims = btnStateAnims ? " animate popUp animate--infinite animate--slow" : "";

  let toggleClassCheckContent = btnStateContent ? " animate bounce animate--infinite animate--medium" : "";

  let toggleClassCheckHide = btnStateHide ? " animate hide-element" : "";
  let toggleClassCheckShow = btnStateShow ? " animate show-element" : "";

  let toggleClassCheckGamesShow = btnStateGamesShow ? " is-visible animate show-element" : "";
  let toggleClassCheckGamesHide = btnStateGamesHide ? " is-visible animate hide-element" : "";

  function triggerAnimsHeader() {
    setBtnStateAnims(btnStateAnims => !btnStateAnims);
  }
  function triggerAnimsContent() {
    setBtnStateContent(btnStateContent => !btnStateContent);
  }

  function triggerAnimsHide() {
    setBtnStateHide(btnStateHide => !btnStateHide);
    if (btnStateHide) {
      setBtnStateShow(btnStateShow => !btnStateShow);
    }
    if (btnStateShow) {
      setBtnStateHide(btnStateHide => !btnStateHide);
      setBtnStateShow(btnStateShow => !btnStateShow);
      setBtnStateHide(btnStateHide => !btnStateHide);
    }
  }

  function triggerClassCheckGamesShow() {
    setBtnStateGamesShow(btnStateGamesShow => !btnStateGamesShow);
    console.log("show - " + btnStateGamesShow)
    console.log("hide - " + btnStateGamesHide)
    if (btnStateGamesShow){
      setBtnStateGamesHide(btnStateGamesHide => !btnStateGamesHide);
    }
    if (btnStateGamesHide){
      setBtnStateGamesShow(btnStateGamesShow => !btnStateGamesShow);
      setBtnStateGamesHide(btnStateGamesHide => !btnStateGamesHide);
      setBtnStateGamesShow(btnStateGamesShow => !btnStateGamesShow);
    }
  }


  return (
    <div className="App" >
      <div className="background">
        <div className="button-container" >
          <button onClick={triggerAnimsHeader}>Animate Headers</button>
          <button onClick={triggerAnimsContent}>Animate Content</button>
          <button onClick={triggerAnimsHide}>Hide/Show Table</button>
          <button onClick={triggerClassCheckGamesShow}>Hide/Show Games</button>
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="header">
          <p>LAST CHANCE QUALIFIERS</p>
        </div>
        <div className="date-holder">
          <p id="p-date">{formatDate(jsonData.data)}</p>
        </div>
        <div className="game-table">
          <div className={`team-a${toggleClassCheckGamesShow}${toggleClassCheckGamesHide}`}>
            <img src={teamA}></img>
          </div>
          <p className={`team-vs${toggleClassCheckGamesShow}${toggleClassCheckGamesHide}`}>VS</p>
          <div className={`team-b${toggleClassCheckGamesShow}${toggleClassCheckGamesHide}`}>
            <img src={teamB}></img>
          </div>
        </div>
        <div className={`table${toggleClassCheckHide}${toggleClassCheckShow}`}>
          <img src={table}></img>
          <div className={`region-header-emea${toggleClassCheckAnims}`}>
            <p>EMEA FINALS</p>
          </div>

          <div className={`emea-city${toggleClassCheckContent}`}>
            <p>LOS ANGELES</p>
            <p>NEW YORK</p>
            <p>LONDON</p>
            <p>STOCKHOLM</p>
          </div>

          <div class={`emea-date${toggleClassCheckContent}`}>
            <p>{jsonData.emea_finals.los_angeles}</p>
            <p>{jsonData.emea_finals.new_york_city}</p>
            <p>{jsonData.emea_finals.london}</p>
            <p>{jsonData.emea_finals.stockholm}</p>
          </div>

          <div class={`region-header-na${toggleClassCheckAnims}`}>
            <p>NA FINALS</p>
          </div>
          <div class={`na-city${toggleClassCheckContent}`}>
            <p>LOS ANGELES</p>
            <p>NEW YORK</p>
            <p>LONDON</p>
            <p>STOCKHOLM</p>
          </div>
          <div class={`na-date${toggleClassCheckContent}`}>
            <p>{jsonData.na_finals.los_angeles}</p>
            <p>{jsonData.na_finals.new_york_city}</p>
            <p>{jsonData.na_finals.london}</p>
            <p>{jsonData.na_finals.stockholm}</p>
          </div>
          <div class="tune-button">
            <p>TUNE IN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
