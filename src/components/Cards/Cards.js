import React, { useState, useEffect } from "react";
import "./Cards.css"
import antimage from "../../assets/img/antimage_lg.png";
import emberSpirit from "../../assets/img/ember_spirit_lg.png";
import furion from "../../assets/img/furion_lg.png";
import invoker from "../../assets/img/invoker_lg.png";
import leshrac from "../../assets/img/leshrac_lg.png";
import nevermore from "../../assets/img/nevermore_lg.png";
import nightStalker from "../../assets/img/night_stalker_lg.png";
import queenOfPain from "../../assets/img/queenofpain_lg.png";
import rubick from "../../assets/img/rubick_lg.png";
import stormSpirit from "../../assets/img/storm_spirit_lg.png";
import windrunner from "../../assets/img/windrunner_lg.png";
import wisp from "../../assets/img/wisp_lg.png";
function Cards(props) {
  const initialCards = [
    {
      url: antimage,
      clicked: false,
      id: 0
    },
    {
      url: emberSpirit,
      clicked: false,
      id: 1
    },
    {
      url: furion,
      clicked: false,
      id: 2
    },
    {
      url: invoker,
      clicked: false,
      id: 3
    },
    {
      url: leshrac,
      clicked: false,
      id: 4
    },
    {
      url: nevermore,
      clicked: false,
      id: 5
    },
    {
      url: nightStalker,
      clicked: false,
      id: 6
    },
    {
      url: queenOfPain,
      clicked: false,
      id: 7
    },
    {
      url: rubick,
      clicked: false,
      id: 8
    },
    {
      url: stormSpirit,
      clicked: false,
      id: 9
    },
    {
      url: windrunner,
      clicked: false,
      id: 10
    },
    {
      url: wisp,
      clicked: false,
      id: 11
    },
  ]
  const [cards, changeCards] = useState(initialCards);

  const shuffleFunction = (cards) => {
    let tempArray = [...cards];
    //fisher-yates shuffle
    let currentIndex = tempArray.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = tempArray[currentIndex];
      tempArray[currentIndex] = tempArray[randomIndex];
      tempArray[randomIndex] = temporaryValue;
    }
    return tempArray;
  };
  //if a card has not been clicked, it flags it as clicked and updates score
  //otherwise resets the game
  const handleClick = (id) => {
    let tempArray = [...cards];
    let index = tempArray.findIndex(x => x.id === id);
    if (!tempArray[index].clicked) {
      tempArray[index].clicked = true;
      changeCards(tempArray);
      changeCards(card => shuffleFunction(cards));
      //update score here
    }
    else {
      changeCards(initialCards);
      //reset score here (maybe own function?)
    }
  } 
  useEffect(() => {
    changeCards(cards => shuffleFunction(cards));
  }, [])

  return (
    <div id="cards-wrap">
      <button onClick={() => changeCards(cards => shuffleFunction(cards))}>Shuffle!</button>
      <ul id="cardList">
        {cards.map((card) => (
          <li className="card" key={card.id}>
            <img src={card.url} alt="" onClick={() => handleClick(card.id)}></img>
            {card.clicked.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cards;
