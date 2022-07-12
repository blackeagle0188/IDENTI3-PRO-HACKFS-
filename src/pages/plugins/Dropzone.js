
import React from 'react';
import { useDropzone } from "react-dropzone";
import { Row, Col, Card, Form, Image, Container } from 'react-bootstrap';

import Documentation from "components/Documentation";


export default () => {
  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="dropzone">DropZone</h1>
              <p className="fs-5 fw-light">
                DropZone is an awesome lightweight library that you can use for drag & drop type of uploads with image previews.
              </p>

              <Documentation
                title="Example"
                description={
                  <p>Use the following markup to create a DropZone element:</p>
                }
                imports={`import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDropzone } from "react-dropzone";`}
                scope={{ useDropzone, Row, Col, Card, Form, Image }}
                example={`const Dropzone = () => {
  const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: files => setFiles(files.map(file => ({
      ...file,
      preview: URL.createObjectURL(file)
    })))
  });

  const DropzoneFile = (props) => {
    const { path, preview } = props;

    return (
      <Col xs={3} className="dropzone-preview">
        <Image src={preview} className="dropzone-image" />
        <Card.Text className="dropzone-filename">
          {path}
        </Card.Text>
      </Col>
    );
  };

  return (
    <>
      <Form {...getRootProps({ className: "dropzone rounded d-flex align-items-center justify-content-center mb-4" })}>
        <Form.Control {...getInputProps()} />
        <div className="dz-default dz-message text-center">
          <p className="dz-button mb-0">Drop files here to upload</p>
        </div>
      </Form>
      <Row className="dropzone-files">
        {files.map(file => <DropzoneFile key={file.path} {...file} />)}
      </Row>
    </>
  );
};

render( <Dropzone /> );`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
