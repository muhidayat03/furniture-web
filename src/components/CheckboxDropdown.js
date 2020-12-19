import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const CheckboxDropdown = ({ title, onChange, list, }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState({ a: true, b: false, c: false })
  const toggleList = () => {
    setIsOpen(!isOpen);
  }

  const selected = list.filter(({ selected }) => selected === true).length;
  const handleChange = (event) => {
    onChange(event);
    setItem({ ...item, [event.target.name]: event.target.checked })
  }

  useEffect(() => {
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', close);
      } else {
        window.removeEventListener('click', close);
      }
    }, 0);
    return () => {
      window.removeEventListener('click', close);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false)
  }

  return (
    <DropdownWrapper>
      <DropdwonButton
        type="button"
        onClick={toggleList}
      >
        <div>{selected ? `${selected} Selected` : title}</div>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </DropdwonButton>
      {isOpen && (
        <DropdownListWrapper onClick={(e) => e.stopPropagation()}>
          <DropdownList style={{ padding: 20 }}>
            {list.map(item => <FormControlLabel
              key={item.id}
              labelPlacement='start'
              label={item.title}
              control={<Checkbox checked={item.selected} onChange={handleChange} name={item.id.toString()} />}
            />
            )}
          </DropdownList>
        </DropdownListWrapper>
      )}
    </DropdownWrapper>
  )
}

const DropdwonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid rgb(223, 223, 223); 
  background-color: white;
  line-height: 38px; 
  cursor: pointer; 
  :focus{
    outline: none;
  }

  overflow: visible;
  width: inherit;
  margin: inherit;
  padding: 4px;
  border: 1px solid #eee; 
  font: inherit;
  line-height: normal; 
  text-align: inherit;
  -webkit-appearance: none;
`;

const DropdownWrapper = styled.div`
padding: 6px 0 7px;  
  background-color: 'red';
  position: relative;
  width: 100%;
  border-bottom: 2px solid rgb(255, 255, 255) !important;
`;

const DropdownListWrapper = styled.div`
  background-color: red;
  width: 100%;
`;

const DropdownList = styled.div`
  overflow-y: scroll; 
  max-height: 215px;
  padding: 15px 0;
  background-color: white;
  position: absolute;
  width: 100%; 
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  z-index: 99;
  .MuiFormControlLabel-labelPlacementStart{
    margin-left : 0 !important;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .MuiCheckbox-colorSecondary.Mui-checked {
    color: #009688;
  }
`;

export default CheckboxDropdown;