import React, { useState } from "react";
import "./slot-reel.css";
import { stratagems } from "../../data/stratagems";

export default function SlotReel() {
  const [display, setDisplay] = useState([0, 1, 2, 3]);
  const [isDisabled, setIsDisabled] = useState(false);

  function beginShuffle() {
    setIsDisabled(true);
    // loadoutController();
    const intervalID = setInterval(indexSelection, 120);
    setTimeout(() => {
      clearInterval(intervalID);
      setIsDisabled(false);
    }, 2000);
  }


  function indexSelection() {
    let randomArray = [];
    for(let i = 0; i < 4; i++) {
      let indexValue = Math.floor(Math.random() * stratagems.length);
      randomArray.push(indexValue);
    }
    setDisplay(randomArray)
    console.log("Index selection display", randomArray);
  }

  function loadoutController() {
    // Build loadout pools once per spin
    let backpacks = stratagems.filter((s) => s.isBackpack);
    console.log(backpacks);
    let nonBackpacks = stratagems.filter((s) => !s.isBackpack);
    console.log(nonBackpacks);

    function buildTargets() {
      let usedIds = [];
      let targets = [];

      function filterAndSelect() {
        let backpackIndex = Math.floor(Math.random() * backpacks.length);
        let selectedBackpack = backpacks[backpackIndex];
        usedIds.push(selectedBackpack.id);
        targets.push(selectedBackpack);
      }

      let reelTwoIndex = Math.floor(Math.random() * nonBackpacks.length);
      let selectedReelTwo = nonBackpacks[reelTwoIndex];
      usedIds.push(selectedReelTwo.id);

      let reelThreeIndex = Math.floor(Math.random() * nonBackpacks.length);
      let selectedReelThree = nonBackpacks[reelThreeIndex];
      usedIds.push(selectedReelThree.id);

      let reelFourIndex = Math.floor(Math.random() * nonBackpacks.length);
      let selectedReelFour = nonBackpacks[reelFourIndex];
      usedIds.push(selectedReelFour.id);

      console.log("Used Id results", usedIds);
      console.log("Targets", targets);
    }
    buildTargets();
  }

  return (
    <div>
      <div className="stratagem-icons-container">
        <img
          className="stratagem-icons"
          src={stratagems[display[0]].icon}
        ></img>
        <img
          className="stratagem-icons"
          src={stratagems[display[1]].icon}
        ></img>
        <img
          className="stratagem-icons"
          src={stratagems[display[2]].icon}
        ></img>
        <img
          className="stratagem-icons"
          src={stratagems[display[3]].icon}
        ></img>
      </div>
      <div className="stratagem-name-container">
        <p className="stratagem-name">{stratagems[display[0]].name}</p>
        <p className="stratagem-name">{stratagems[display[1]].name}</p>
        <p className="stratagem-name">{stratagems[display[2]].name}</p>
        <p className="stratagem-name">{stratagems[display[3]].name}</p>
      </div>
      <button
        className="shuffle-btn"
        onClick={beginShuffle}
        disabled={isDisabled}
      >
        Shuffle
      </button>
    </div>
  );
}
