
import React from 'react';
import { CloudDownloadIcon, ChatIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Col, Row, Button, Spinner, Container, Dropdown, ButtonGroup } from 'react-bootstrap';

import Documentation from "components/Documentation";
import { FacebookIcon, GithubIcon, PaypalIcon, PinterestIcon, TwitterIcon, TwitchIcon, YoutubeIcon } from "components/BrandIcons";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Buttons</h1>
            <p className="mb-0">
              Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>The <code>&#x3C;Button&#x3E;</code> component is an important part of the UI that you can use for user actions. If you want to change the appearance of a given button, you can update the modifier props of the <code>variant</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" className="m-1">Primary</Button>
  <Button variant="secondary" className="m-1">Secondary</Button>
  <Button variant="tertiary" className="m-1">Tertiary</Button>
  <Button variant="info" className="m-1">Info</Button>
  <Button variant="success" className="m-1">Success</Button>
  <Button variant="warning" className="m-1">Warning</Button>
  <Button variant="danger" className="m-1">Danger</Button>
  <Button variant="gray-900" className="m-1">Dark</Button>
  <Button variant="gray-700" className="m-1">Gray</Button>
  <Button variant="gray-100" className="m-1">Light</Button>
  <Button variant="white" className="m-1">White</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Button sizing"
          description={
            <p>The <code>&#x3C;Button&#x3E;</code> component comes with three main sizing options: <code>sm</code>, default, and <code>lg</code>. In order to change the size of the button you need to set the size using the <code>size</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" size="sm" className="me-2">
    Small
  </Button>
  <Button variant="secondary" className="me-2">
    Default
  </Button>
  <Button variant="tertiary" size="lg" className="me-2">
    Large
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Buttons with outline"
          description={
            <p>Instead of a fully colored background, you can also choose to style the <code>&#x3C;Button&#x3E;</code> component to only have an outline border by using the <code>outline-primary</code>, <code>outline-secondary</code> modifier classes inside the <code>variant</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="outline-primary" className="m-1">Primary</Button>
  <Button variant="outline-secondary" className="m-1">Secondary</Button>
  <Button variant="outline-tertiary" className="m-1">Tertiary</Button>
  <Button variant="outline-info" className="m-1">Info</Button>
  <Button variant="outline-success" className="m-1">Success</Button>
  <Button variant="outline-danger" className="m-1">Danger</Button>
  <Button variant="outline-gray-900" className="m-1">Dark</Button>
  <Button variant="outline-gray-700" className="m-1">Gray</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Link buttons"
          description={
            <p>If you want to use the <code>&#x3C;Button&#x3E;</code> component, but without the appearance of a button, just use the <code>bsPrefix="text"</code> attribute to create link styled buttons.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button bsPrefix="text" href="#primary" variant="primary" className="m-3">Primary</Button>
  <Button bsPrefix="text" href="#secondary" variant="secondary" className="m-3">Secondary</Button>
  <Button bsPrefix="text" href="#tertiary" variant="tertiary" className="m-3">Tertiary</Button>
  <Button bsPrefix="text" href="#info" variant="info" className="m-3">Info</Button>
  <Button bsPrefix="text" href="#success" variant="success" className="m-3">Success</Button>
  <Button bsPrefix="text" href="#danger" variant="danger" className="m-3">Danger</Button>
  <Button bsPrefix="text" href="#dark" variant="dark" className="m-3">Dark</Button>
  <Button bsPrefix="text" href="#gray" variant="gray-700" className="m-3">Gray</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Buttons with icon"
          description={
            <p>You may want to use icons inside the <code>&#x3C;Button&#x3E;</code> component, which can be done by simply adding a <code>&#x3C;FontAwesomeIcon&#x3E;</code> component inside the button element.</p>
          }
          scope={{ Button, CloudDownloadIcon, ChatIcon }}
          imports={`import { Button } from 'react-bootstrap';
import { CloudDownloadIcon, ChatIcon } from "@heroicons/react/solid";`}
          example={`<React.Fragment>
  <Button variant="primary" className="m-1">
    Download <CloudDownloadIcon className="icon icon-xs ms-1" />
  </Button>
  <Button variant="secondary" className="m-1">
    <ChatIcon className="icon icon-xs me-1" /> Contact Us
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Circle buttons"
          description={
            <p>If you'd like to create a button with a fully circled appearance, all you need to do is add the two modifier classes of <code>btn-circle</code> and <code>btn-icon-only</code> if you wish to use only icons inside the button.</p>
          }
          scope={{ Button, FacebookIcon, TwitterIcon }}
          imports={`import { Button } from 'react-bootstrap';
import { FacebookIcon, TwitterIcon } from "components/BrandIcons";`}
          example={`<React.Fragment>
  <Button className="btn-icon-only btn-circle btn-facebook m-1">
    <FacebookIcon />
  </Button>
  <Button className="btn-icon-only btn-circle btn-twitter m-1">
    <TwitterIcon />
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Social media buttons"
          description={
            <p>We've also built social media specific button styles, so all you need to do to add the specific colors is to update the <code>variant</code> attribute by adding values, such as <code>facebook</code>, <code>twitter</code>, or <code>pinterest.</code>. You can also add a <code>&#x3C;FontAwesomeIcon&#x3E;</code> component to use the logo of the social media platforms as an icon.</p>
          }
          scope={{ Button, FacebookIcon, PinterestIcon, YoutubeIcon, GithubIcon, TwitchIcon, PaypalIcon, TwitterIcon }}
          imports={`import { Button } from 'react-bootstrap';
import { BehanceIcon, FacebookIcon, GithubIcon, PaypalIcon, PinterestIcon, TwitchIcon, YoutubeIcon } from "components/BrandIcons";`}
          example={`<React.Fragment>
  <Button variant="facebook" className="me-3 mb-3">
    <FacebookIcon size="xs" className="me-2" />
    Login with Facebook
  </Button>
  <Button variant="pinterest" className="me-3 mb-3">
    <PinterestIcon size="xs" className="me-2" />
    Share on Pinterest
  </Button>
  <Button variant="twitter" className="text-white me-3 mb-3">
    <TwitterIcon size="xs" className="me-2" />
    Share on Twitter
  </Button>
  <Button variant="youtube" className="me-3 mb-3">
    <YoutubeIcon size="xs" className="me-2" />
    Watch on YouTube
  </Button>
  <Button variant="github" className="me-3 mb-3">
    <GithubIcon size="xs" className="me-2" />
    Login with GitHub
  </Button>
  <Button variant="twitch" className="me-3 mb-3">
    <TwitchIcon size="xs" className="me-2" />
    Subscribe Now
  </Button>
  <Button variant="paypal" className="me-3 mb-3">
    <PaypalIcon size="xs" color="dark" className="me-2" />
    Donate with PayPal
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Loading buttons"
          description={
            <p>By using React you can easily set the state of buttons to be disabled and in a loading state, before the data comes through from the back-end. You can add the <code>disabled</code> modifier attribute and use the <code>&#x3C;Spinner&#x3E;</code> component inside the button.</p>
          }
          scope={{ Button, Spinner }}
          imports={`import { Button, Spinner } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" className="d-flex align-items-center mb-1">
    <Spinner animation="border" size="sm" />
  </Button>
  <Button variant="primary" className="d-flex align-items-center mb-1">
    <Spinner animation="border" size="sm" />
    <span className="ms-2">Loading...</span>
  </Button>
  <Button variant="secondary" className="d-flex align-items-center mb-1">
    <span className="me-2">Loading...</span>
    <Spinner animation="border" size="sm" />
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Block level Buttons"
          description={
            <p>Block level buttons are great if you want the button to take up 100% of the width of the parent element. You need to add the <code>w-100</code> class to the component.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<Button variant="secondary" color="dark" className="w-100">Block</Button>`}
        />

        <Documentation
          title="Disabled state"
          description={
            <p>You may want to disable the <code>&#x3C;Button&#x3E;</code> component for various reasons, so you need to add the <code>disabled</code> attribute in order to achieve that.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button disabled variant="primary" className="mb-2 me-2">
    Primary button
  </Button>
  <Button disabled variant="secondary" className="mb-2 me-2">
    Button
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Button animations"
          description={
            <p>We've added some handy animations for when any element in the UI is hovered upon, so if you want to add an animation to the <code>&#x3C;Button&#x3E;</code> component, all you need to do is use the <code>animate-up-*</code>, <code>animate-right-*</code>, <code>animate-down-*</code>, or <code>animate-left-*</code>, where the * can be a number from 1 to 5 changing in the animation intensity.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from 'react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" className="animate-up-2 mb-2 me-2">Animate up</Button>
  <Button variant="secondary" className="animate-right-3 mb-2 me-2">Animate right</Button>
  <Button variant="tertiary" className="animate-left-3 mb-2 me-2">Animate left</Button>
  <Button variant="success" className="animate-down-2 mb-2 me-2">Animate down</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown buttons"
          description={
            <>
              <p>Use the <code>&#x3C;Dropdown&#x3E;</code> component coupled with the <code>&#x3C;Button&#x3E;</code> component in order to create dropdown items when clicking on a button. The <code> &#x3C;Dropdown.Toggle&#x3E;</code> is the component that will trigger the dropdown menu, while the <code>&#x3C;Dropdown.Menu&#x3E;</code> is the actual menu where you can add the dropdown items.</p>
              <p>The <code>&#x3C;Button&#x3E;</code> component is used either before or after the toggle component, but all of this is wrapped around with the main <code>&#x3C;Dropdown&#x3E;</code> component.</p>
            </>
          }
          scope={{ Button, Dropdown, ButtonGroup, ChevronDownIcon }}
          imports={`import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { ChevronDownIcon } from "@heroicons/react/solid";`}
          example={`<React.Fragment>
  <Dropdown drop="down" as={ButtonGroup} className="me-2 mb-2">
    <Button variant="primary">Primary</Button>

    <Dropdown.Toggle split variant="primary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown as={ButtonGroup} className="mb-2 me-2">
    <Dropdown.Toggle split variant="tertiary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown sizing"
          description={
            <p>You may want to use one of the three main sizing options for the <code>&#x3C;Dropdown&#x3E;</code> component, so in order to do that you only need to use the <code>size="md"</code> or <code>size="lg"</code> attributes for the <code>&#x3C;Button&#x3E;</code> component inside the dropdown component.</p>
          }
          scope={{ Button, Dropdown, ButtonGroup, ChevronDownIcon }}
          imports={`import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { ChevronDownIcon } from "@heroicons/react/solid";`}
          example={`<React.Fragment>
  <Dropdown drop="down" as={ButtonGroup} className="me-2 mb-2">
    <Button size="sm" variant="primary">Small</Button>

    <Dropdown.Toggle split variant="primary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop="down" as={ButtonGroup} className="me-2 mb-2">
    <Button variant="secondary">Default</Button>

    <Dropdown.Toggle split variant="secondary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop="down" as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Large</Button>

    <Dropdown.Toggle split variant="tertiary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown direction"
          description={
            <p>If you want to change the direction of the <code>&#x3C;Dropdown&#x3E;</code> component, you can do that by using the <code>direction="*"</code> attribute where you can use <code>up</code>, <code>right</code>, <code>down</code>, or <code>left</code> as attribute values.</p>
          }
          scope={{ Button, Dropdown, ButtonGroup, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon }}
          imports={`import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";`}
          example={`<React.Fragment>
  <Dropdown drop="up" as={ButtonGroup} className="me-2 mb-2">
    <Button size="sm" variant="primary">Up</Button>

    <Dropdown.Toggle split variant="primary">
      <ChevronUpIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop="end" as={ButtonGroup} className="me-2 mb-2">
    <Button variant="secondary">Right</Button>

    <Dropdown.Toggle split variant="secondary">
      <ChevronRightIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop="down" as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Down</Button>

    <Dropdown.Toggle split variant="tertiary">
      <ChevronDownIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop="start" as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Left</Button>

    <Dropdown.Toggle split variant="tertiary">
      <ChevronLeftIcon className="icon icon-xs" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

      </Container>
    </article>
  );
};
