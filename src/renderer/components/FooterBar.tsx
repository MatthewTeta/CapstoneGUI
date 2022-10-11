import React from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomColors from '../CustomColors';

const footerStyle = {
  backgroundColor: CustomColors.bgDark,
  height: '100px',
  // width: '100vw',
  position: 'fixed',
  zIndex: 1000,
  display: 'flex',
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'space-between',
};

const footerItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 5px',
};

function FooterBar() {
  return (
    <footer style={footerStyle}>
      <div style={footerItemStyle}>
        <Button variant="danger" size="sm">
          Stop
        </Button>
      </div>
      <div style={footerItemStyle}>
        <Form inline>
          <Form.Check type="switch" label="Test" />
        </Form>
      </div>
      <div style={footerItemStyle}>
        <Button variant="danger" size="sm">
          Stop
        </Button>
      </div>
    </footer>
  );
}

export default FooterBar;
