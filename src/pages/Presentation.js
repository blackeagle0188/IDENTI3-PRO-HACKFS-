import React from "react";
import moment from "moment-timezone";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav } from 'react-bootstrap';
import { BookOpenIcon, CheckCircleIcon, CodeIcon, ExternalLinkIcon, FolderIcon, InformationCircleIcon, LightBulbIcon, MapIcon, PuzzleIcon, ScaleIcon, ShoppingCartIcon, XCircleIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "routes";
import ThemesbergLogoIcon from "assets/img/themesberg.svg";
import ThemesbergLogo from "assets/img/themesberg-logo.svg";
import MockupPresentation from "assets/img/mockup-presentation.png";
import ReactHero from "assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "assets/img/mockup-map-presentation.png";
import CalendarImg from "assets/img/mockup-calendar-presentation.png";
import KanbanImg from "assets/img/mockup-kanban-presentation.png";
import ReactMockupImg from "assets/img/react-mockup.png";
import BS5IllustrationsImg from "assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "assets/img/technologies/react-logo.svg";

import pages from "data/pages";
import features from "data/features";
import { BootstrapIcon, FileCodeIcon, GithubIcon, JsIcon, ReactIcon } from "components/BrandIcons";


export default () => {
  const currentYear = moment().get("year");

  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <ExternalLinkIcon className="icon icon-xs ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            {icon}
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip } = props;

    return (
      <OverlayTrigger placement="left" overlay={<Tooltip className="m-0">{tooltip}</Tooltip>}>
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          {icon ? icon : <FolderIcon className="icon icon-sm me-2" />} {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Volt React Pro</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Pages</Nav.Link>
                <Nav.Link as={HashLink} to="#folder">Folder Structure</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#free-demo" className="d-sm-none d-xl-inline">Free Demo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to="#pricing" variant="outline-white" className="ms-3">Pricing plan</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white overflow-hidden" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <h1 className="fw-bolder text-secondary">
                Volt React
                <span className="d-none d-sm-inline"> Dashboard</span>
                <span className="pro-badge fw-bolder">PRO</span>
              </h1>
              <p className="text-muted fw-light mb-5 h5">Premium admin dashboard powered by React.js and Bootstrap 5</p>
              <div className="d-flex justify-content-center mb-5">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Explore dashboard <ExternalLinkIcon className="icon icon-xs d-none d-sm-inline ms-1" />
                </Button>
                <Button variant="outline-secondary" as={HashLink} to="#pricing" className="d-flex align-items-center">
                  Purchase now
                </Button>
              </div>
              <div className="text-center mb-6 mb-lg-5">
                <a href="https://themesberg.com" target="_blank" rel="noopener noreferrer">
                  <Image src={ThemesbergLogoIcon} height={25} width={25} className="mb-3" alt="Themesberg Logo" />
                  <p className="text-muted font-small m-0">A Themesberg production</p>
                </a>
              </div>
            </Col>
          </Row>
          <div className="react-homepage-icon d-none d-lg-block">
            <svg width="700" height="600" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.54815 5.88113C5.54815 5.28946 6.02875 4.80886 6.62042 4.80886C7.21209 4.80886 7.69269 5.28946 7.69269 5.88113C7.69269 6.4728 7.21209 6.95339 6.62042 6.95339C6.02875 6.95339 5.54815 6.4728 5.54815 5.88113ZM12.6183 5.88113C12.6183 6.61804 11.7489 7.3635 10.3477 7.82701C10.2751 7.85051 10.2003 7.87401 10.1234 7.8975C10.1512 8.00644 10.1747 8.11324 10.1961 8.2179C10.3264 8.88006 10.3477 9.49522 10.2559 9.99505C10.1576 10.5269 9.93548 10.905 9.61508 11.0908C9.45488 11.1848 9.26478 11.2318 9.05332 11.2318C8.47233 11.2318 7.73541 10.8815 6.96645 10.2193C6.85752 10.1253 6.75072 10.0271 6.64178 9.92242C6.55848 10.0036 6.47517 10.0805 6.39187 10.1531C5.8835 10.5974 5.36019 10.9221 4.88172 11.0908C4.63181 11.1805 4.39685 11.2254 4.18753 11.2254C3.96966 11.2254 3.77742 11.1784 3.61508 11.0844C3.00205 10.7298 2.78845 9.70882 3.04691 8.35247C3.07254 8.21363 3.10458 8.07052 3.14089 7.92527C3.02768 7.89323 2.91875 7.85905 2.81409 7.82274C2.17542 7.60487 1.63288 7.31438 1.24627 6.9833C0.836157 6.633 0.618286 6.25065 0.618286 5.88113C0.618286 5.17198 1.39579 4.47778 2.70088 4.02495C2.84399 3.97582 2.99351 3.92883 3.1473 3.88397C3.11312 3.74941 3.08322 3.61698 3.05759 3.48668C2.93156 2.84161 2.90807 2.24994 2.98924 1.77362C3.07895 1.25457 3.29041 0.885043 3.6044 0.703483C4.24093 0.333957 5.32387 0.714163 6.42605 1.69458C6.49226 1.75439 6.55848 1.81633 6.62683 1.88041C6.72722 1.78429 6.82761 1.69245 6.92587 1.60487C7.42142 1.1734 7.92338 0.857275 8.37621 0.690667C8.86962 0.509108 9.29682 0.509108 9.60867 0.688531C10.2473 1.05592 10.4588 2.18373 10.1598 3.62766C10.1427 3.71523 10.1213 3.80281 10.1 3.89252C10.2324 3.93097 10.3605 3.97155 10.4844 4.01427C11.106 4.22787 11.6293 4.50555 12.001 4.81313C12.4047 5.15062 12.6183 5.52014 12.6183 5.88113ZM6.98568 2.24567C7.32744 2.61306 7.66919 3.04026 7.99814 3.51018C8.56417 3.56358 9.10458 3.64902 9.6044 3.76436C9.62363 3.68319 9.64285 3.60416 9.6578 3.52513C9.93762 2.1645 9.69625 1.33146 9.35235 1.13282C9.1772 1.03243 8.89312 1.04524 8.55136 1.17127C8.1562 1.31651 7.70978 1.6006 7.26122 1.99149C7.16937 2.07052 7.07752 2.15596 6.98568 2.24567ZM3.77528 7.55574C4.11704 7.6305 4.48657 7.69031 4.87959 7.73303C4.75143 7.53225 4.62541 7.32719 4.50365 7.11787C4.38404 6.91281 4.27083 6.70562 4.16403 6.49843C4.01238 6.85727 3.87995 7.21398 3.77528 7.55574ZM4.50365 4.67002C4.62327 4.46496 4.74502 4.26204 4.87105 4.06553C4.49084 4.11253 4.12558 4.17661 3.78169 4.25136C3.88635 4.58885 4.01451 4.93702 4.16403 5.29159C4.27083 5.0844 4.38404 4.87721 4.50365 4.67002ZM4.94794 6.86155C5.13377 7.18195 5.33028 7.4938 5.53534 7.7907C5.8835 7.81206 6.24662 7.82488 6.62042 7.82488C6.99636 7.82488 7.36375 7.81206 7.71832 7.78643C7.9127 7.4938 8.10494 7.18408 8.29504 6.85727C8.48301 6.5326 8.65602 6.2058 8.81195 5.8854C8.65602 5.57141 8.48514 5.25101 8.29504 4.9242C8.10921 4.60167 7.91483 4.29409 7.71619 3.99932C7.35947 3.97155 6.99208 3.95873 6.62042 3.95873C6.25303 3.95873 5.88564 3.97369 5.52679 4.00145C5.32601 4.29622 5.1295 4.60594 4.9458 4.92634C4.76211 5.2446 4.59123 5.56927 4.4353 5.89394C4.59123 6.21648 4.76211 6.54115 4.94794 6.86155ZM8.37193 7.72449C8.76709 7.6775 9.14303 7.61342 9.49119 7.53438C9.38439 7.19903 9.24983 6.84446 9.08749 6.47707C8.97856 6.68853 8.86108 6.90213 8.73933 7.11359C8.61757 7.32292 8.49582 7.52798 8.37193 7.72449ZM9.46556 4.25777C9.11953 4.17874 8.75214 4.11466 8.3698 4.06553C8.49369 4.25991 8.61544 4.46069 8.73505 4.66575C8.8568 4.87721 8.97215 5.08654 9.08108 5.29159C9.23274 4.93702 9.36304 4.58885 9.46556 4.25777ZM5.91341 3.46318C6.14623 3.4525 6.38119 3.4461 6.61829 3.4461C6.85965 3.4461 7.09675 3.4525 7.33384 3.46318C7.10102 3.15347 6.86392 2.86724 6.62683 2.61092C6.38546 2.86938 6.14623 3.1556 5.91341 3.46318ZM3.56168 3.38842C3.58518 3.51018 3.61295 3.63193 3.64499 3.75795C4.14267 3.64474 4.68308 3.56144 5.24912 3.50804C5.57806 3.04453 5.92195 2.61947 6.27012 2.24353C6.21031 2.18586 6.1505 2.13033 6.0907 2.07906C5.04833 1.15631 4.20675 0.949122 3.86286 1.14777C3.68771 1.24816 3.55741 1.50234 3.49547 1.86119C3.42498 2.27557 3.44634 2.8053 3.56168 3.38842ZM3.86926 5.89608C3.63217 5.37917 3.43352 4.86867 3.284 4.37952C3.14089 4.42011 3.00419 4.46283 2.87176 4.50982C1.67133 4.92847 1.13306 5.50092 1.13306 5.88326C1.13306 6.28056 1.71191 6.9064 2.98069 7.34001C3.07681 7.37205 3.17507 7.40409 3.2776 7.43399C3.42925 6.93631 3.6279 6.4194 3.86926 5.89608ZM6.28294 9.55717C5.9305 9.18123 5.58447 8.7519 5.25339 8.28412C4.66813 8.23712 4.12558 8.15809 3.63858 8.04916C3.6044 8.18586 3.57663 8.31829 3.551 8.44645C3.31391 9.69601 3.54246 10.4479 3.8714 10.638C4.2153 10.8366 5.0462 10.6487 6.05652 9.76436C6.12914 9.70028 6.20604 9.62979 6.28294 9.55717ZM7.34452 8.32043C7.10743 8.33111 6.86392 8.33752 6.62042 8.33752C6.38119 8.33752 6.14837 8.33324 5.91982 8.3247C6.15691 8.63656 6.39828 8.92491 6.64178 9.18764C6.8746 8.92919 7.1117 8.64083 7.34452 8.32043ZM9.69625 8.31829C9.67702 8.22217 9.65567 8.12605 9.63003 8.02566C9.13448 8.14101 8.58767 8.22431 8.00668 8.27557C7.6756 8.75617 7.33598 9.1855 7.00063 9.5529C7.10102 9.65115 7.20355 9.743 7.3018 9.82844C8.26513 10.6572 9.02982 10.8366 9.3609 10.6444C9.70479 10.4479 9.95684 9.63406 9.69625 8.31829ZM12.1078 5.88113C12.1078 5.67821 11.954 5.43898 11.6742 5.20615C11.3516 4.93702 10.8817 4.69138 10.32 4.497C10.2046 4.45856 10.085 4.42011 9.96325 4.3838C9.81586 4.86012 9.61935 5.36635 9.37799 5.88326C9.63003 6.41512 9.83509 6.92563 9.98461 7.40195C10.053 7.38059 10.1213 7.35923 10.1875 7.33787C11.5054 6.90213 12.1078 6.27628 12.1078 5.88113Z" fill="#3F486D"/>
            </svg>
          </div>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon-shape bg-white shadow-lg border-light rounded-circle mb-4">
                <BookOpenIcon className="icon icon-md text-secondary" />
              </div>
              <h3 className="fw-bolder">20</h3>
              <p className="text-gray">Example Pages</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon-shape bg-white shadow-lg border-light rounded-circle mb-4">
                <PuzzleIcon className="icon icon-md text-secondary" />
              </div>
              <h3 className="fw-bolder">200+</h3>
              <p className="text-gray">React Components</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon-shape bg-white shadow-lg border-light rounded-circle mb-4">
                <LightBulbIcon className="icon icon-md text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & react-app</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon-shape bg-white shadow-lg border-light rounded-circle mb-4">
                <BootstrapIcon size="md" color="secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">CSS Framework</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
        <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Kanban Board</h2>
              <p className="mb-3 lead fw-bold">
                Interactive drag and drop interface
              </p>
              <p className="mb-4">
                You'll get a fully interactive Drag and Drop Kanban board interface.
              </p>
              <Button as={Link} to={Routes.Kanban.path} className="me-3" variant="secondary" target="_blank">
                <MapIcon className="icon icon-xs me-2" /> Demo Kanban
              </Button>
            </Col>
            <Col lg={6}>
              <Image src={KanbanImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Powered by React.js</h2>
              <p className="mb-3 lead fw-bold">The most popular front-end library in the world</p>
              <p className="mb-4">Volt React Pro is an admin dashboard template that is built using React.js components using react hooks and a data-driven structure that can kick-start your app in no time.</p>
              <Button as={Link} to={Routes.DashboardOverview.path} variant="secondary" target="_blank">
                Live Demo <ExternalLinkIcon className="icon icon-xs ms-1" />
              </Button>
              <Button as={HashLink} to="#pricing" variant="outline-primary" className="ms-3">
                <ShoppingCartIcon className="icon icon-xs me-1" /> Pricing plan
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>React.js Components</h2>
              <p className="mb-3 lead fw-bold">200+ premium UI elements based on Bootstrap 5</p>
              <p className="mb-4">We've built over 200 React.js powered components to be used throughout your application saving you time kickstarting your project.</p>
              <p className="mb-4">Check out the components and use our live React.js component editor to try the code.</p>
              <Button as={Link} to={Routes.Forms.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank">
                <ReactIcon color="primary" size="xxs" className="me-1" /> Components examples
              </Button>
            </Col>
            <Col lg={6} className="rounded shadow pt-3">
              <Code scope={{ Form, Button }} code={`<Form>
  <Form.Group id="frameworks" className="mb-3">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option defaultValue>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" className="m-1">Primary</Button>
</Form>`} language="jsx" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Mapbox</h2>
              <p className="mb-3 lead fw-bold">Markers and cards integration with Leaflet.js</p>
              <p className="mb-4">You can use this map to add markers with custom cards and show them on a map using our custom MapBox integration with Leaflet.js</p>
              <Button as={Link} to={Routes.Map.path} className="me-3" variant="secondary" target="_blank">
                <MapIcon className="icon icon-xs me-2" /> Demo Map
              </Button>
              <Button as={Link} to={Routes.PluginMap.path} variant="outline-primary" target="_blank">
                <InformationCircleIcon className="icon icon-xs me-2" /> Guide
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Calendar</h2>
              <p className="mb-3 lead fw-bold">
                Advanced FullCalendar.js integration
              </p>
              <p className="mb-4">
                We created a fully editable calendar where you can add, edit and delete events for your admin dashboard.
              </p>
              <Button as={Link} to={Routes.Calendar.path} className="me-3" variant="secondary" target="_blank">
                <MapIcon className="icon icon-xs me-2" /> Demo Calendar
              </Button>
              <Button as={Link} to={Routes.PluginCalendar.path} variant="outline-primary" target="_blank">
                <InformationCircleIcon className="icon icon-xs me-2" /> Guide
              </Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Bootstrap 5</h2>
              <p className="mb-3 lead fw-bold">
                Latest version of Bootstrap 5
              </p>
              <p className="mb-4">
                Volt React Pro is built using the latest version of Bootstrap 5 and we only used Vanilla Javascript for everything including the plugins
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                20 hand-crafted pages
              </h2>
              <p className="lead px-lg-10">
                Every page from Volt has been carefully built to provide all the necessary pages your project will require
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Awesome Features</h2>
              <p className="lead px-lg-8">You get all React.js components fully customized. Besides, you receive numerous plugins out of the box and ready to use.</p>
            </Col>
          </Row>
          <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">What's inside?</h2>
              <p className="lead px-lg-8">We have carefully crafted the perfect folder structure to ensure that finding the files you're looking for are easily reachable and well organized.</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={6} className="mb-4">
              <div className="d-none d-lg-block mt-5">
                <h4>The perfect folder structure for your project</h4>
                <p className="lead mb-4">The folder structure is based on the popular <code>create-react-app</code> repository using Sass source files for CSS preprocessing.</p>
                <Button as={Link} variant="secondary" size="md" to={Routes.DocsFolderStructure.path} target="_blank" className="text-dark">
                  <CodeIcon className="icon icon-xs me-2" /> Folder Structure
                </Button>
              </div>
            </Col>
            <Col xs={12} lg={6} className="order-lg-first d-flex justify-content-center">
              <ListGroup className="d-block fmw-100 list-unstyled folder-structure">
                <FolderItem name="src" tooltip="Main folder that you will be working with" />

                <ListGroup className="list-unstyled ps-4">
                  <FolderItem name="assets" tooltip="CSS, Images, Fonts and Javascript" />
                  <FolderItem name="components" tooltip="Custom React.js components on top of react-bootstrap" />
                  <FolderItem name="data" tooltip="Data source for the dashboard and components" />
                  <FolderItem name="pages" tooltip="React.js admin dashboard pages" />
                  <FolderItem name="scss" tooltip="Sass source files" />
                  <FolderItem name="index.js" tooltip="Main React.js file that wraps the project" icon={<JsIcon color="secondary" className="me-2" />} />
                  <FolderItem name="routes.js" tooltip="The file where the routes are registered at" icon={<JsIcon color="secondary" className="me-2" />} />
                </ListGroup>

                <FolderItem name="build" tooltip="The production build of the project" />
                <FolderItem name="node_modules" tooltip="Project dependencies from package.json" />

                <FolderItem name="package.json" tooltip="Project details and dependencies." icon={<FileCodeIcon color="success" className="me-2" />} iconColor="tertiary" />
                <FolderItem name="README.md" tooltip="No project can miss a README :)" icon={<FileCodeIcon color="success" className="me-2" />} iconColor="tertiary" />
                <FolderItem name=".gitignore" tooltip="This file ensures that generated files and folder are ignored by Git. (eg. node_modules)" icon={<FileCodeIcon color="success" className="me-2" />} iconColor="tertiary" />
              </ListGroup>
            </Col>
            <Col xs={12} className="mt-5 d-lg-none">
              <h5>The perfect folder structure for your project</h5>
              <p className="lead mb-4">The folder structure is based on the popular <code>create-react-app</code> repository using Sass source files for CSS preprocessing.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary" id="getting-started">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
                Less <span className="fw-bold">work</span>, more <span className="fw-bold">flow</span>.
              </h2>
              <p className="lead px-lg-8">
                Boost productivity with BrowserSync. Sass changes are reflected instantly and pages scroll and refresh on devices as you work.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} xl={9}>
              <div className="position-relative">
                <div className="rounded bg-white p-4 text-dark mb-2">
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn install <span className="text-gray-600">(or npm install)</span></div>
                    <div className="text-gray">Everything’s installed!</div>
                  </div>
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn start <span className="text-gray-600">(or npm run start)</span></div>
                    <div className="text-gray">SCSS watching</div>
                    <div className="text-gray">Opening localhost:3000</div>
                  </div>
                  <div>
                    <div className="fw-bold">&gt; $ that's it?</div>
                    <div className="text-gray">It's that simple!</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white text-center mb-0">
                Looks unfamiliar? Don’t worry! Our <Link to={Routes.DocsQuickStart.path} className="text-white text-underline fw-bold" target="_blank">documentation</Link> has got you covered.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-white" id="free-demo">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <h2 className="fw-bold mb-3">Free Demo</h2>
              <p className="lead mb-4 me-lg-6">Would you like to test out Volt React Pro Dashboard before purchasing it? You're in luck, because we have an open source version of Volt that you can set up and try it out.</p>
              <div className="d-flex align-items-center">
                <Card.Link as={Button} variant="dark" href="https://github.com/themesberg/volt-react-dashboard" target="_blank" className="btn-primary me-4">
                  View on GitHub
                </Card.Link>
                <GitHubButton className="mt-1" href="https://github.com/themesberg/volt-react-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="github-big-icon">
                <GithubIcon />
              </div>
            </Col>
          </Row>
          <Row className="mt-6">
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4 shadow-sm">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Free Demo</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>100</strong> React Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>10</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> Advanced Sidebar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> MapBox
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> Calendar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> SVG Map
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> Widgets
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0 pb-0">
                      <XCircleIcon className="icon icon-xs text-danger me-2" /> Premium Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="shadow-sm p-4 py-5 mt-lg-n5">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Pro Version</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>200+</strong> React Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>20</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>6</strong> Plugins
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> Advanced Sidebar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> MapBox
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> Calendar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> SVG Map
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> Widgets
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 border-0 ps-0 pb-0">
                      <CheckCircleIcon className="icon icon-xs text-success me-2" /> Premium Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Button as={HashLink} to="#pricing" variant="secondary" className="w-100 m-0 mt-3">View Pricing plan</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-white">
        <Container id="pricing">
          <Row className="justify-content-center mb-6">
            <Col xs={12} lg={9} className="text-center">
              <h2 className="display-3 fw-light mb-4">Choose the right plan for your business</h2>
              <p className="lead">You have at least <span className="fw-bold text-primary">Free 6 Months of Updates</span> and <span className="fw-bold text-primary">Premium Support</span> on each package. You also have 30 days to request a refund if you're not happy with your purchase.</p>
            </Col>
          </Row>
          <Row className="mb-4 mb-lg-5">
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md shadow-sm mb-3 px-2">
                <Card.Header className="bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">89</span> </div>
                  <h4 className="mb-3 text-black">Freelancer</h4>
                  <p className="fw-normal font-small mb-0">
                    Great for personal use and for your side projects.
                  </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Full documentation
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Domains: <strong>1</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Team size: <strong>1 developer</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Premium support: <strong>6 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Free updates: <strong>6 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="secondary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 text-dark rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="m-0">
                    Something unclear? Click to read the full Freelancer License.
                  </Tooltip>
                }>
                <Card.Link href="https://themesberg.com/licensing#freelancer" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <ScaleIcon className="icon icon-xxs me-2" /> Freelancer License
                </Card.Link>
              </OverlayTrigger>
            </Col>
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md shadow-sm mb-3 px-2">
                <Card.Header className="bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">399</span> </div>
                  <h4 className="mb-3 text-black">Company</h4>
                  <p className="fw-normal font-small mb-0">
                    Relevant for multiple users and extended support.
                  </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="list-group simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Full documentation
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Domains: <strong>Unlimited</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Team size: <strong>1-5 developers</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Premium support: <strong>12 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Free updates: <strong>12 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="primary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip className="m-0">
                    Something unclear? Click to read the full Company License.
                  </Tooltip>
                }>
                <Card.Link href="https://themesberg.com/licensing#company" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <ScaleIcon className="icon icon-xxs me-2" /> Company License
                </Card.Link>
              </OverlayTrigger>
            </Col>
            <Col xs={12} lg={6} xl={4} className="mb-5">
              <Card border="light" className="rounded-md shadow-sm mb-3 px-2">
                <Card.Header className="card-header bg-white border-light p-4">
                  <div className="d-flex mb-3"> <span className="h5 mb-0">$</span> <span className="price display-2 mb-0 text-primary">1299</span></div>
                  <h3 className="h4 mb-3 text-black">Enterprise</h3>
                  <p className="fw-normal font-small mb-0">
                    Best for large scale uses and extended redistribution rights.
                  </p>
                </Card.Header>
                <Card.Body className="py-4">
                  <ListGroup className="simple-list">
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Full documentation
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Domains: <strong>Unlimited</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Team size: <strong>5-15</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Premium support: <strong>24 months</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="fw-normal border-0">
                      <CheckCircleIcon className="icon icon-xxs text-success me-2" /> Free updates: <strong>12 months</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0 px-4 pb-4">
                  <Card.Link as={Button} variant="primary" href="https://themesberg.com/product/dashboard/volt-pro-react#pricing" target="_blank" className="w-100 rounded animate-up-2">
                    Buy now <span className="icon icon-xs ms-3" />
                  </Card.Link>
                </Card.Footer>
              </Card>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    Something unclear? Click to read the full Enterprise License.
                  </Tooltip>
                }>
                <Card.Link href="https://themesberg.com/licensing#enterprise" target="_blank" className="font-small text-gray text-center d-block mt-4">
                  <ScaleIcon className="icon icon-xxs me-2" /> Enterprise License
                </Card.Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <h2 className="h5 text-gray fw-normal mb-4">Available in the following technologies:</h2>
              <div>
                <Card.Link href="https://themesberg.com/product/admin-dashboard/volt-premium-bootstrap-5-dashboard" target="_blank" className="me-3">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip className="m-0">
                        Bootstrap 5 · The most popular HTML, CSS, and JS library in the world.
                      </Tooltip>
                    }>
                    <Image src={BS5Logo} className="image image-sm" />
                  </OverlayTrigger>
                </Card.Link>

                <Card.Link href="https://themesberg.com/product/dashboard/volt-pro-react" target="_blank" className="me-3">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip className="m-0">
                        React · A JavaScript library for building user interfaces.
                      </Tooltip>
                    }>
                    <Image src={ReactLogo} className="image image-sm" />
                  </OverlayTrigger>
                </Card.Link>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-soft" id="pricing">
        <Container id="faq">
          <Row>
            <h2 className="border-bottom border-light mb-5 pb-3">Frequently asked questions</h2>
            <Row className="faq-section">
              <Col lg={6}>
                <div className="mb-5">
                  <h4 className="h5">How do I use the license that I got with my purchase?</h4>
                  <p>You will receive a code in your order receipt. You do not need to insert it anywhere. Please keep it in your records for any future inquiry from us. If you create a client project, you can either keep this code or you can send us an email using our <a href="https://themesberg.com/contact">contact page</a>, and we will transfer the license to your client, provided that they have an account on our website.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What is the difference between the Freelancer/Company/Enterprise licenses?</h4>
                  <p>The Freelancer license is aimed at people who work on their own. It grants you the right to use the purchased product only for one project (either yours or for a client).</p>
                  <p>The Company license is aimed at agencies or larger teams. It grants you the right to create other licensed products base on the template that you purchase from us.</p>
                  <p>The Enterprise license is aimed at large companies with multiple projects. It grants you the right to create any kind of software, SaaS, digital products and sell them.</p>
                  <p>All the differences between the types of licenses are <a href="https://themesberg.com/licensing">available here</a>.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">Will I get an update to Bootstrap 5 for the Bootstrap 4 themes?</h4>
                  <p>Although two of the products (Pixel Pro and Volt Pro) are already available in Bootstrap 5, we will update all of the themes to Bootstrap 5 in the next 6 months for free.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">Are the themes available with only classic CSS and without Sass as well?</h4>
                  <p>Yes, they are. Each theme has a <code className="text-primary">html&amp;css</code> folder which contains the theme with classic HTML, CSS, and Javascript files.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">Do these themes work with Wordpress?</h4>
                  <p>These products are not Wordpress themes, however, they can be integrated in Wordpress by an experienced web developer.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">Are the images, fonts, and icons free to use?</h4>
                  <p>The images, fonts, icons and every other creative element for each theme can be freely used in your project under our licensing terms.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">If I purchased a Freelancer/Company License, how can I upgrade to the Company/Enterprise License?</h4>
                  <p>In case you have already purchased a license, but you want to upgrade, you can just send us a message using the <Card.Link href="https://themesberg.com/contact" target="_blank">contact page</Card.Link> and we will send you a discount code so you will only pay the difference for the upgrade.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Included Documentation feature refer to?</h4>
                  <p>It means that each theme has a thorough and up to date documentation on how to get started with the product and each components and plugin is properly explained.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What happens after the 6/12/24 months of Free Updates expires? Can I download the new updates after this period?</h4>
                  <p>At the end of this period, you will need to renew your license (purchase the product again) to get Support.</p>
                </div>
                <div>
                  <h4 className="h5">Can I remove the copyright notice from the files?</h4>
                  <p>You can remove the copyright notice (if it's a premium item), but then you will need to create a separate <code className="text-primary">.txt</code> file called <code className="text-primary">LICENSE.txt</code>, and copy paste the copyright text in there. This file should be added to the root folder of your project.</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-5">
                  <h4 className="h5">What does the full code feature refer to?</h4>
                  <p>It refers to the fact that you will get all of the Sass, HTML, Javascript, and CSS files of the template.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Domains number refer to?</h4>
                  <p>Depending on the license you purchase, you can use our products to either code a website/web application for you, for a client, or for multiple clients, which will be hosted on one or multiple domains:</p>
                  <p>For example, if you purchased the Freelancer License, you can create only one website (for you or a client). If you want to create multiple websites, you will need a bigger license (like Company or Enterprise). Same, if you have multiple subdomains, like test.yoursite.com (http://test.yoursite.com/) or dev.yoursite.com (http://dev.yoursite.com/), you can use the Freelancer or Startup License.</p>
                  <p>If you have a complex application like a SaaS and have client1.yoursite.com (http://client1.yoursite.com/) and client2.yoursite.com (http://client2.yoursite.com/) and clientx.yoursite.com, (http://clientx.yoursite.com/) you will need a multi-domain license like Company or Enterprise.</p>
                  <p>For more information about our licenses, you can <a href="https://themesberg.com/licensing">check it here</a>.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Team Size refer to?</h4>
                  <p>The Team size for each license reflects the number of people who can access the product.</p>
                  <p>For example, if you buy the Freelancer license, only one person can use the product. If you have a team of 6-10 people, you will need the Company license.</p>
                  <p>For bigger teams of 5 developers, you will need to purchase an Enterprise License.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Tech Support refer to?</h4>
                  <p>Depending on your license type, you have a fixed period when you can submit any ticket to us regarding product functionalities and bug fixes (learning and tutorials related requests are not included). You will get responses directly from the product's creators in 24 hours (during business days):</p>
                  <p>If you purchase the Freelancer license, you will receive Support from us for 6 months. If you need 12 months of Support, you will need the Company license.</p>
                  <p>If you purchase the Enterprise license, you will benefit from 24 months of Support. At the end of this period, you will need to renew your license (purchase the product again) to get Support.</p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Free Updates refer to?</h4>
                  <p>Depending on your license type, you have a determined period when you receive product Updates that include bug fixes and new features:</p>
                  <p>Freelancer: You will receive Free Updates for 6 months. Company: You will receive Free Updates for 12 months. Enterprise: You will benefit from 24 months of Free Updates.</p>
                </div>
                <div>
                  <h4 className="h5">Do you have a question?</h4>
                  <p className="mb-0">Feel free to send us a message using the <Card.Link href="https://themesberg.com/contact" target="_blank">contact page</Card.Link> and one of our team members will get back to you in the shortest time possible.</p>
                </div>
              </Col>
            </Row>
          </Row>

        </Container>
      </section>
      <footer className="footer py-6 bg-primary text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#root" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">Volt React Pro</span>
              </Navbar.Brand>
              <p>Volt Pro React is a premium admin dashboard template powered by React.js and Bootstrap 5</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">Products</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Getting started</Card.Link>
                </li>
                <li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12 d-grid gap-2">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray-600 my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">{currentYear}</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
