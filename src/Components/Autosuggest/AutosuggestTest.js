/** @jsxImportSource @emotion/react */

import {useState, useEffect, useRef} from "react";
import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import {theme} from "../../Styles/theme";
import Button from "../Button/Button";
import {options} from "./Options";
import Icon from "../Icon/Icon";


export default function AutosuggestStyleTest(props) {
  // dynamic user input values
  const [userInput, setUserInput] = useState('');
  
  // boolean based on 2 params (userInput, filter options includes(userInput))
  const [showOptions, setShowOptions] = useState(false);

  // array list when options includes(userInput)
  const [filteredOptions, setFilteredOptions] = useState();
  
  // boolean state of delete button
  const [showDelete, setShowDelete] = useState(false);

  // refs 
  const defaultDropdownRef = useRef(null);
  const suggestionDropdownRef = useRef(null);

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // event listener 
  useEffect(() => {
    document.addEventListener("click", handleClick, false);

    return () => {
      document.removeEventListener("click", handleClick, false)
    }
  }, [])

  // document click handler
  const handleClick = (e) => {
    if (suggestionDropdownRef.current && !suggestionDropdownRef.current.contains(e.target)) {
      setShowDelete(false);
      setShowOptions(false);
      setFilteredOptions();
    }
  }

  // input change handler
  const handleInputChange = (e) => {
    // Set current input value
    setUserInput(e.currentTarget.value);

    if (userInput) {
      // Filter dataset with user input match
      let filter = options.filter(option => {
        return option.toLowerCase().includes(userInput.toLowerCase())
      });
      if (filter.length > 0) {
        setShowDelete(true);
        setShowOptions(true);
        setFilteredOptions(filter);
      } else {
        setShowOptions(false);
        setFilteredOptions();
      }
    }  
  }

  // maps key event 1:1 with click event 
  const handleInputKeyDown = (e) => {
    // handles return key
    if (e.keyCode === 13) {
      e.preventDefault();
      setUserInput(e.currentTarget.value);
      setShowDelete(false);
      setShowOptions(false);
    }
    // Backspace delete
    if (e.keyCode === 8 && userInput.length === 1) {
      setUserInput('');
      setShowDelete(false);
      setShowOptions(false);
    }
  }

  // input delete handler
  const handleDeleteClick = (e) => {
    e.preventDefault();
    setUserInput('');
    setShowDelete(false);
    setShowOptions(false);
    setFilteredOptions();
  }

  // dropdown selection handler
  const handleOptionClick = (e) => {
    setUserInput(e.currentTarget.innerText);
    setShowDelete(false);
    setShowOptions(false);
    setFilteredOptions();
  }

  return (
    <div css={{position: "relative"}}>
      {/* Input wrapper */}
      <div>
        {/* Input */}
        <input css={{height: 48}} type="text" placeholder="Search" value={userInput} onChange={handleInputChange} onKeyDown={handleInputKeyDown} onFocus={onFocus} onBlur={onBlur}/>
        {/* Delete button */}
        {showDelete && <input css={{}} type="button" value="delete" onClick={handleDeleteClick} />}      
      </div>
      
      {/* default dropdown */}
      { focused && !userInput &&
        <div css={{    
          display: "block",
          position: "absolute",
          top: 68,
          left: 0,
          background: "yellow",
          padding: 16,
          // borderRadius: 4,
          // minWidth: 160,
          // boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
          }} 
          ref={defaultDropdownRef}
        >
          <Typography label="Default content: " h3Bold/>
          <Typography label="Curated buttons and links when user first engages input field" body1/>
        </div>
      }

      {/* suggestion dropdown */}
      {showOptions &&
        <div css={{    
          display: "block",
          position: "absolute",
          top: 68,
          left: 0,
          background: "yellow",
          padding: 16,
          // borderRadius: 4,
          // minWidth: 160,
          // boxShadow: "2px 4px 16px rgb(0 0 0 / 16%)",
          }} 
          ref={suggestionDropdownRef}
        >
          <ul>
            {filteredOptions.map(option => <li css={{cursor: "pointer"}} key={options.indexOf(option)} onClick={handleOptionClick}>{option}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}