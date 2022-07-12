import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Documentation from "components/Documentation";

export default () => {
  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="sweet-alert">SweetAlert2</h1>
              <p className="fs-5 fw-light">
                Use this premium notifications plugin to show modal prompts to your users.
              </p>

              <Documentation
                title="Example"
                description={
                  <p>Here’s a basic example of an informational modal that is being prompted when the following button is clicked:</p>
                }
                imports={`import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';`}
                scope={{ Button, Swal, withReactContent }}
                example={`const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));
                
const onClick = async function() {
  await SwalWithBootstrapButtons.fire(
    'Basic alert',
    'You clicked the button!'
  );
}

render(
  <Button variant="primary" onClick={onClick}>
    Basic alert
  </Button>
);`}
              />

              <Documentation
                title="Alert type"
                description={<>
                  <p>
                    There are 5 built-in icons for the modal of SweetAlert2 and each will show a corresponding icon animation: <code>warning</code>, <code>error</code>, <code>success</code>, <code>info</code>, and <code>question</code>. It can either be put in the array under the key “icon” or passed as the third parameter of the function.
                  </p>
                  <p>Here’s an example when the icon type of the alert is <code>error</code>:</p>
                </>}
                imports={`import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';`}
                scope={{ Button, Swal, withReactContent }}
                example={`const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));
                
const onClick = async function() {
  await SwalWithBootstrapButtons.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="#do-something">Why do I have this issue?</a>'
  });
}

render(
  <Button variant="danger" onClick={onClick}>
    Error alert
  </Button>
);`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
