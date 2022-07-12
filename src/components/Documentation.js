
import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

import CodeEditor from "components/CodeEditor";

export default (props) => {
  const { title, description, pro = false, example = null, imports = null, scope = {}, previewStyle = {} } = props;

  return (
    <>
      <div className="pt-2">
        <Row>
          <Col xs={12}>
            <h2 className="fs-4 fw-bold d-flex align-items-center">
              {title}
              {pro && (
                <Badge bg="secondary" className="font-small fw-bold text-gray-800 px-2 py-1 ms-2">
                  Pro
                </Badge>
              )}
            </h2>
            {description && <span className="fs-6">{description}</span>}
          </Col>
        </Row>
      </div>

      <div className="pb-5">
        <Row>
          <Col xs={12}>
            <CodeEditor code={example} scope={scope} imports={imports} previewStyle={previewStyle} />
          </Col>
        </Row>
      </div>
    </>
  );
};
