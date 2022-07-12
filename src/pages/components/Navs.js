
import React from 'react';
import { HomeIcon, UserCircleIcon, CogIcon, MailIcon, TemplateIcon } from "@heroicons/react/solid";
import { Nav, Row, Col, Container } from 'react-bootstrap';

import Documentation from "components/Documentation";


export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Navs</h1>
          <p className="mb-0">
            Use navigation tabs to break up pieces of content.
          </p>
        </Col>
      </Row>

      <Documentation
        title="Example"
        description={
          <p>The <code>&#x3C;Nav&#x3E;</code> component should be used for app navigation, such as for the navigation bar, a secondary menu, or other. The <code>&#x3C;Nav.Link&#x3E;</code> component can be attributed with the location of the link.</p>
        }
        scope={{ Nav, Row, Col }}
        imports={`import { Nav } from 'react-bootstrap';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-sm-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-3">
          Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-3">
          Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-3">
          Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-3">
          Messages
            </Nav.Link> 
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Rounded navs"
        description={
          <p>If you want the nav style to be rounded, just add the <code>rounded</code> class name to the main <code>&#x3C;Nav.Link&#x3E;</code> component.</p>
        }
        scope={{ Nav, Row, Col }}
        imports={`import { Nav } from 'react-bootstrap';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="rounded flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#home" className="mb-sm-3 mb-md-3">
          Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-3">
          Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-3">
          Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-3">
          Messages
            </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Rounded navs with icons"
        description={
          <p>If you want to add other content to a navigation item, such as an icon, you can do that by </p>
        }
        scope={{ Row, Col, Nav, HomeIcon, UserCircleIcon, CogIcon, MailIcon }}
        imports={`import { Row, Col, Nav } from 'react-bootstrap';
import { HomeIcon, UserCircleIcon, CogIcon, MailIcon } from '@heroicons/react/solid';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-3">
          <HomeIcon className="icon icon-xs me-2" /> Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-3">
          <UserCircleIcon className="icon icon-xs me-2" /> Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-3">
          <CogIcon className="icon icon-xs me-2" /> Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#" className="mb-sm-3 mb-md-3">
          <MailIcon className="icon icon-xs me-2" /> Messages
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Circle navs"
        description={
          <p>If you want to style the navigation items as full circles and using icons, use the <code>nav-pill-circle</code> class for the <code>&#x3C;Nav&#x3E;</code> component.</p>
        }
        scope={{ Row, Col, Nav, UserCircleIcon, MailIcon, CogIcon, TemplateIcon }}
        imports={`import { Row, Col, Nav, Card } from 'react-bootstrap';
import { CogIcon, HomeIcon, MailIcon, TemplateIcon } from '@heroicons/react/solid';`}
        example={`<Row>
  <Col lg={8}>
    <Nav defaultActiveKey="home" variant="pills" className="nav-pill-circle flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#home">
          <UserCircleIcon className="icon icon-xs" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#">
          <MailIcon className="icon icon-xs" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#">
          <CogIcon className="icon icon-xs" />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#">
          <TemplateIcon className="icon icon-xs" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Vertical navs"
        description={
          <p>If you'd like the navigation items to be ordered vertically, and not horizontally as it is by default, you can use the classes <code>flex-column vertical-tab</code> on the main <code>&#x3C;Nav&#x3E;</code> component to achieve that.</p>
        }
        scope={{ Row, Col, Nav, HomeIcon, UserCircleIcon, CogIcon, MailIcon }}
        imports={`import { Row, Col, Nav } from 'react-bootstrap';
import { CogIcon, HomeIcon, MailIcon, UserCircleIcon } from "@heroicons/react/solid";`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="square flex-column vertical-tab">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-3">
          <HomeIcon className="icon icon-xs me-2" /> Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-3">
          <UserCircleIcon className="icon icon-xs me-2" /> Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-3">
          <CogIcon className="icon icon-xs me-2" /> Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#" className="mb-sm-3 mb-md-3">
          <MailIcon className="icon icon-xs me-2" /> Messages
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />
    </Container>
  </article>
);
