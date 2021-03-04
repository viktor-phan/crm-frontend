import React from 'react';
import PropTypes from "prop-types";
import "./message-history.style.css";


export const MessageHistory = ({msg}) => {
    if(!msg) return null
    return msg.map((row,i) => (
       

        <div key={i} className="messsage-history">
            <div className="send">
                <div className="sender">{row.messageBy}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>
    ))
}
MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}