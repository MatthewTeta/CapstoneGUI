import React from 'react';
import { Form } from 'react-bootstrap';
import RegexFormControl from '../RegexFormControl';

function CouponIDInfoForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>1</Form.Label>
        <RegexFormControl regex={/^([a-z ]*)$/} onChange={() => {}} />
      </Form.Group>
    </Form>
  );
}

export default CouponIDInfoForm;
