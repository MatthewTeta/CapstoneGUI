import React, { ChangeEvent, useState } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  regex: RegExp;
  initialValue?: string;
  onChange?: (val: string) => void;
} & typeof defaultProps;

const defaultProps = {
  initialValue: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (_: string) => {},
};

function RegexFormControl({ regex, initialValue, onChange }: Props) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const match = val.match(regex);
    // Check if value matches regex
    if (match !== null) {
      // update value accordingly
      setValue(val);
    }
  };
  return <Form.Control type="text" onChange={handleChange} value={value} />;
}

RegexFormControl.defaultProps = defaultProps;

export default RegexFormControl;
