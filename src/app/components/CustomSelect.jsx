import React, { useState } from "react";
import styled from "styled-components";
import downArrow from "../../images/downArrow.png";
const Wrapper = styled.div`
  position: relative;
  width: 274px;
`;

const Label = styled.span`
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
`;

const Select = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px rgba(17, 34, 62, 0.15);
  background-color: #fff;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 9px;
  margin-left: auto;
  margin-right: 10px;
`;

const Options = styled.div`
  position: absolute;
  top: 85px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 163px;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0 15px 30px 0 rgba(48, 27, 102, 0.1);
  border: solid 1px rgba(17, 34, 62, 0.05);
  background-color: #fff;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 6px;
    height: 50px;
    border-radius: 3px;
    background-color: rgba(17, 34, 62, 0.3);
  }
`;

const Option = styled.span`
  display: inline-block;
  padding: 11px;
  font-family: "CeraPro-Regular", sans-serif;
  font-size: 14px;
  border-bottom: 1px solid rgba(17, 34, 62, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #fafafc;
  }
`;
export default props => {
  const [isOpenOptions, setIsOpen] = useState(false);
  const [initialOption, setInitialOption] = useState(props.initialOption);
  const chooseOption = option => {
    setIsOpen(false);
    setInitialOption(option);
    props.handleChange(option);
  };

  return (
    <Wrapper>
      <Label>Название</Label>
      <Select onClick={() => setIsOpen(!isOpenOptions)}>
        {initialOption}
        <Arrow src={downArrow}></Arrow>
      </Select>
      {isOpenOptions && (
        <Options>
          {props.options.map((option, index) => (
            <Option
              key={`${option}-${index}`}
              onClick={() => chooseOption(option)}
            >
              {option}
            </Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};
