import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import {PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp"
import tickets from "../../assets/data/dummy-tickets.json";
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

const ticket = tickets[0];

export const TicketLanding = () => {
    const [message, setMessage] = useState("");

    useEffect(()=> {}, [message]);

    const handleOnChange = e=> {
        setMessage(e.target.value);
    }
    const handleOnSubmit = () =>{
        alert("need API");
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject">Subject: {ticket.id}</div>
                    <div className="status">Status: {ticket.status}</div>
                    <div className="date">Date: {ticket.addedDate}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>

            <hr />
            <Row className="mt-4">
                <Col>
                    <UpdateTicket msg={message} 
                    handleOnSubmit={handleOnSubmit}
                    handleOnChange={handleOnChange}/>
                </Col>
            </Row>

        </Container>
    )
}
