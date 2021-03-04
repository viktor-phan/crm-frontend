import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/addTicketForm/AddTicketForm.comp";
import { shortText } from "../../utils/validation";
const initialFormData = {
  subject: "",
  addedDate: null,
  detail: "",
};

const initialFormDataErr = {
  subject: false,
  addedDate: false,
  detail: false,
}
export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataErr, setFormDataErr] = useState(initialFormDataErr);


  useEffect(() => {}, [formData]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataErr(initialFormDataErr);
    const isValid = await shortText(formData.subject);
    !isValid && setFormDataErr({
      ...initialFormDataErr,
      subject: !isValid,
    }) ;
    
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
            formDataErr={formDataErr}
          />
        </Col>
      </Row>
    </Container>
  );
};
