
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Col, Row, Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Code from "components/Code";

import themeStyle from "assets/syntax-themes/ghcolors.json";

export default (props) => {
  const { language = "jsx", scope = {}, imports = null, previewStyle = {} } = props;
  const [code, setCode] = useState(props.code);
  const [copied, setCopied] = useState(false);
  const noInline = code.includes('render(');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <LiveProvider noInline={noInline} code={code} language={language} theme={themeStyle} scope={scope}>
      <Row>
        <Col xs={12} className="rounded bg-gray-100 mb-4 p-2">
          <Card>
            <Card.Body style={previewStyle}>
              <LivePreview />
            </Card.Body>
          </Card>
        </Col>
        {imports ? (
          <Col xs={12} className="mb-4">
            <Code code={imports} />
          </Col>
        ) : null}
        <Col xs={12} className="mb-4">
          <LiveError className="alert alert-danger" />

          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip className="m-0">
                You can edit the code below and the changes will be seen in the example above.
              </Tooltip>
            }>
            {({ ref, ...triggerHandler }) => (
              <Col xs={3} {...triggerHandler} className="d-flex align-items-center text-gray-600 fs-7 pb-2">
                <span ref={ref} className="d-flex me-2">
                  <QuestionMarkCircleIcon className="icon icon-xs" />
                </span>
                Live React Code Editor
              </Col>
            )}
          </OverlayTrigger>

          <Card>
            <Card.Body className="position-relative">

              <LiveEditor onChange={handleCodeChange} className="live-editor" />

              {copied ? <span className="text-success copy-code-text">Copied</span> : null}

              <OverlayTrigger placement="top" overlay={<Tooltip className="m-0">Copy to clipboard</Tooltip>}>
                <CopyToClipboard text={code} onCopy={handleCopy}>
                  <Button size="sm" variant="primary" className="copy-code-button">Copy</Button>
                </CopyToClipboard>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </LiveProvider>
  );
};

