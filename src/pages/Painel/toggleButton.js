import React from 'react';
import { ToggleSwitch, Checkbox, Slider, ToggleLabel } from './styles';

const ToggleButton = ({ checked, onChange, disabled=false, labels={"true": "", "false": ""} }) => (
    <>
      <ToggleLabel>{checked ? labels.true: labels.false}</ToggleLabel>
      <ToggleSwitch>
        <Checkbox type="checkbox" checked={checked} onChange={onChange} disabled={disabled}/>
        <Slider></Slider>
      </ToggleSwitch>
    </>
);

export default ToggleButton;
