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

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);

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
    const isValid = await shortText(formData.subject);
    !isValid ? alert("Subject too short!"):console.log("Submited");
    
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
          />
        </Col>
      </Row>
    </Container>
  );
};
