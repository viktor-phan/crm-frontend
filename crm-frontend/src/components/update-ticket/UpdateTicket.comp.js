import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types"
export const UpdateTicket = ({msg, handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply your message here or update the Ticket</Form.Text>
      <FormControl  value={msg}
      onChange={handleOnChange}

      as="textarea" rows="3"name="detail" required />
      <div className="text-right mt-3 mb-3">
      <Button variant="info" type="submit" >Submit</Button>

      </div>
    </Form>
  );
};
 
UpdateTicket.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}