
import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { Row, Col, Breadcrumb } from 'react-bootstrap';

import { PageVisitsTable } from "components/Tables";
import { GeneralInfoForm, DropFilesForm } from "components/Forms";
import { CustomersWidget, RevenueWidget, UsersWidget, WeeklyReportWidget, VisitsMapWidget, TimelineWidget, ChoosePhotoWidget, ProfileCardWidget, AcquisitionWidget, EventsWidget, RankingWidget, ProgressTrackWidget, TeamMembersWidget, TopAuthorsWidget, SalesValueWidget, NotificationsWidget } from "components/Widgets";

import Profile1 from "assets/img/team/profile-picture-1.jpg";
import Profile3 from "assets/img/team/profile-picture-3.jpg";
import ProfileCover from "assets/img/profile-cover.jpg";


export default () => (
  <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <div className="d-block mb-4 mb-md-0">
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
          <Breadcrumb.Item>Volt</Breadcrumb.Item>
          <Breadcrumb.Item active>Widgets</Breadcrumb.Item>
        </Breadcrumb>
        <h4>Widgets</h4>
        <p className="mb-0">
          You can easily show your stats content by using these cards.
        </p>
      </div>
    </div>

    <Row className="justify-content-md-center">
      <Col xs={12} sm={6} xl={4} className="mb-4">
        <CustomersWidget
          category="Customers"
          title="345k"
          period="Feb 1 - Apr 1"
          percentage={18.2}
        />
      </Col>

      <Col xs={12} sm={6} xl={4} className="mb-4">
        <RevenueWidget
          category="Revenue"
          title="$43,594"
          period="Feb 1 - Apr 1"
          percentage={28.4}
        />
      </Col>

      <Col xs={12} sm={12} xl={4} className="mb-4">
        <UsersWidget
          category="Users"
          title="15.3k"
          period="June 1 - July 1"
          percentage={20}
        />
      </Col>
    </Row>

    <Row>
      <Col xs={12} xxl={4} className="mb-4">
        <WeeklyReportWidget
          headerTitle="Weekly Sales"
          headerSubtitle="28 Daily Avg."
          reportTitle="$456,678"
          reportSubtitle="Total Themesberg Sales"
        />
      </Col>

      <Col xs={12} md={6} xxl={4} className="mb-4">
        <TopAuthorsWidget title="Top Author Earnings" />
      </Col>

      <Col xs={12} md={6} xxl={4} className="mb-4">
        <TimelineWidget title="Notifications" />
      </Col>
    </Row>

    <Row className="justify-content-lg-center">
      <Col xs={12} className="mb-4">
        <SalesValueWidget
          title="Sales Value"
          value="10,567"
          percentage={10.57}
        />
      </Col>
    </Row>

    <Row>
      <Col xs={12} xl={8} className="mb-4">
        <GeneralInfoForm />
        <NotificationsWidget />
      </Col>

      <Col xs={12} xl={4} className="mb-4">
        <Row>
          <Col xs={12} className="mb-4">
            <ProfileCardWidget
              fullName="Neil Sims"
              picture={Profile1}
              jobTitle="Senior Software Engineer"
              location="New York, USA"
            />
          </Col>
          <Col xs={12}>
            <ChoosePhotoWidget
              title="Select profile photo"
              photo={Profile3}
            />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <DropFilesForm />
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <ChoosePhotoWidget
              title="Select cover photo"
              photo={ProfileCover}
            />
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col xs={12} xl={7} xxl={8} className="mb-4">
        <Row>
          <Col xs={12} className="mb-4">
            <PageVisitsTable />
          </Col>

          <Col xs={12} xxl={6} className="mb-4">
            <TeamMembersWidget />
          </Col>

          <Col xs={12} xxl={6} className="mb-4">
            <ProgressTrackWidget />
          </Col>

          <Col xs={12}>
            <EventsWidget />
          </Col>
        </Row>
      </Col>

      <Col xs={12} xl={5} xxl={4} className="mb-4">
        <Col xs={12} className="px-0 mb-4">
          <RankingWidget />
        </Col>

        <Col xs={12} className="px-0 mb-4">
          <AcquisitionWidget />
        </Col>

        <Col xs={12} className="px-0">
          <VisitsMapWidget />
        </Col>
      </Col>
    </Row>
  </>
);
