import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <Label>
      <Input type="checkbox" />
      {label}
    </Label>
  );
};

export default Checkbox;