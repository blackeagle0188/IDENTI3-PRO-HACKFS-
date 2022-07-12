import React, { useState } from "react";
import moment from "moment-timezone";
import { DeviceMobileIcon, InboxInIcon, PaperClipIcon, ReplyIcon } from "@heroicons/react/solid";
import { Col, Row, Card, Form, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CONVERSATION_MESSAGES, { createMessage } from "data/conversation";
import { Routes } from "routes";

export default () => {
  const [conversation, setConversation] = useState(CONVERSATION_MESSAGES);
  const [message, setMessage] = useState("");
  const currentDate = moment().format("Do of MMMM, YYYY");

  const sendMessage = (e) => {
    e.preventDefault()

    const newMessage = createMessage(message);
    setConversation([...conversation, newMessage]);
    setMessage("");
  };

  const MyMessage = (props) => {
    const { sender, timeSent, message } = props;

    return (
      <Card border="0" className="shadow bg-gray-800 text-white p-4 ms-md-5 ms-lg-6 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="font-small">
            <span className="fw-bold">{sender.name}</span>
            <span className="fw-normal text-gray-300 ms-2">{timeSent}</span>
          </span>
          <div className="d-none d-sm-block">
            <Button variant="link" className="text-white">
              <DeviceMobileIcon className="icon icon-xs" />
            </Button>
          </div>
        </div>
        <p className="text-gray-300 m-0">
          {message}
        </p>
      </Card>
    );
  };

  const Message = (props) => {
    const { sender, timeSent, message } = props;

    return (
      <Card border="0" className="shadow p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="font-small">
            <Card.Link href="#">
              <Image src={sender.image} className="avatar-sm img-fluid rounded-circle me-2" />
              <span className="fw-bold">{sender.name}</span>
            </Card.Link>
            <span className="fw-normal ms-2">{timeSent}</span>
          </span>
          <div className="d-none d-sm-block">
            <Button variant="link" className="text-dark">
              <DeviceMobileIcon className="icon icon-xs" />
            </Button>
          </div>
        </div>
        <p className="m-0">
          {message}
        </p>
      </Card>
    );
  };

  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col xs={12} className="d-flex justify-content-between flex-column flex-sm-row mt-4 mb-2">
          <Card.Link as={Link} to={Routes.Messages.path} className="fw-bold text-dark hover:underline d-inline-flex align-items-center mb-2 mb-lg-0">
            <InboxInIcon className="icon icon-xs me-2" /> Back to messages
          </Card.Link>
          <small className="text-muted fw-normal">
            Messages from {currentDate}
          </small>
        </Col>
        <Col xs={12}>
          {conversation.map(c => c.sender.isMe
            ? <MyMessage key={`my-message-${c.id}`} {...c} />
            : <Message key={`message-${c.id}`} {...c} />
          )}

          <Form className="mt-4 mb-5" onSubmit={sendMessage}>
            <Form.Control
              required
              rows="6"
              as="textarea"
              maxLength="1000"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              className="border-0 shadow mb-4"
            />

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="file-field">
                <div className="d-flex justify-content-center">
                  <div className="d-flex align-items-center">
                    <PaperClipIcon className="icon icon-lg text-gray-400 me-3" />
                    <input type="file" />
                    <div className="d-block text-left d-sm-block">
                      <div className="fw-normal text-dark mb-lg-1">Attach File</div>
                      <div className="text-gray small pe-3 pe-lg-11 d-none d-md-inline">
                        Supported files are: jpg, jpeg, png, doc, pdf, gif, zip, rare, tar, txt, xls, docx, xlsx, odt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="secondary" type="submit" className="d-inline-flex align-items-center text-dark">
                  <ReplyIcon className="icon icon-sm me-2" /> Reply
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};
