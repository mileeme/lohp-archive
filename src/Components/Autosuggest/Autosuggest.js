/** @jsxImportSource @emotion/react */

import {useState, useEffect} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import {theme} from "../../Styles/theme";
import Button from "../Button/Button";
import {options} from "./Options";
import SelectGoal from "../Select/SelectGoal";

// const options = [apple, able, addition, ample, address, anger, aloha]

export default function Autosuggest() {
  // user input values
  const [userInput, setUserInput] = useState();
  
  // boolean for whether there is user input + filtered options
  const [showOptions, setShowOptions] = useState(false);

  // array list that match with user input
  const [filteredOptions, setFilteredOptions] = useState();
  // selected dropdown item from filteredOptions using index number
  // const [activeOption, setActiveOption] = useState();
    // list of suggested options 
    const [optionList, setOptionList] = useState(false);
  // checks if input is in focus
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // State of options list dropdown
  useEffect(() => {
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        setOptionList(true);
      } else {
        setOptionList(false);
      }
    }
  }, [userInput])

  const handleInputChange = (e) => {
    setUserInput(e.currentTarget.value);
    if (userInput) {
      let filter = options.filter(option => {
        return option.toLowerCase().includes(userInput.toLowerCase())
      });

      setShowOptions(true);
      setFilteredOptions(filter)
    } else {
      setShowOptions(false);
      setFilteredOptions();
    }
  }
  const handleDeleteClick = (e) => {
    setUserInput('');
    setOptionList(false);
    setShowOptions(false);
    setFilteredOptions();
  }

  const handleOptionClick = (e) => {
    setUserInput(e.currentTarget.innerText);
    setOptionList(false);
    setShowOptions(false);
    setFilteredOptions();
  }

  return (
    <div css={{display: "flex", position: "relative", gap: 8, padding: 8}}>
      <input type="text" placeholder="Search" value={userInput} onChange={handleInputChange} onFocus={onFocus} onBlur={onBlur}/>
      {focused && userInput && <input type="button" value="delete" onClick={handleDeleteClick} />}


      {/* default dropdown */}
      { focused && !userInput &&
        <div css={{display: "block", position: "absolute", top: 50, left: 0, background: "green"}}>
        Hello world
      </div>
      }

      {/* suggestion dropdown */}
      {optionList && 
        <div css={{display: "block", position: "absolute", top: 50, left: 0, background: "yellow"}}>
          <ul>
            {filteredOptions.map(option => <li css={{cursor: "pointer"}} key={options.indexOf(option)} onClick={handleOptionClick}>{option}</li>)}
          </ul>
        </div>
        }

        {/* filter button */}
        {/* <Button variant="secondary" size="md" label="Goal" /> */}
        <SelectGoal />
        <Button variant="secondary" size="md" label="Duration" />
        <Button variant="secondary" size="md" label="Topic" />
        
        <Button variant="primary" size="md" label="Submit" type="submit" />
    </div>
  )
}