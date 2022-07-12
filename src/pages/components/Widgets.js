
import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

import Documentation from "components/Documentation";
import { CardWidget, TimelineWidget, CustomersWidget, WeeklyReportWidget, TopAuthorsWidget, ProgressTrackWidget, TeamMembersWidget, EventsWidget, RankingWidget } from "components/Widgets";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h2>Widgets</h2>
            <p className="mb-0">
              You can use these cards to show statistics, profiles, events and many more.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Widget cards"
          description=""
          scope={{ CardWidget }}
          imports={`import { CardWidget } from "components/Widgets";`}
          example={`<CardWidget
  title="Total Installs"
  value="367,567"
  period="Feb 1 - Apr 1"
/>`}
        />

        <Documentation
          title="Category"
          description="Use these cards to display categories:"
          scope={{ Col, RankingWidget }}
          imports={`import { RankingWidget } from "components/Widgets";`}
          example={`<Col xl={5}>
  <RankingWidget />
</Col>`}
        />

        <Documentation
          title="Team members"
          description="Use these cards to show team members and actions attributed to them."
          scope={{ Col, TeamMembersWidget }}
          imports={`import { TeamMembersWidget } from "components/Widgets";`}
          example={`<Col xl={8}>
  <TeamMembersWidget />
</Col>`}
        />

        <Documentation
          title="Progress tracker"
          description="Use these cards to show progress for any attributes."
          scope={{ ProgressTrackWidget }}
          imports={`import { ProgressTrackWidget } from "components/Widgets";`}
          example={`<ProgressTrackWidget />`}
        />

        <Documentation
          pro={true}
          title="Line chart"
          description="Use this card to show statistics and advanced charts:"
          scope={{ Col, CustomersWidget }}
          imports={`import { CustomersWidget } from "components/Widgets";`}
          example={`<Col xl={5}>
  <CustomersWidget
    category="Customers"
    title="345k"
    period="Feb 1 - Apr 1"
    percentage={18.2}
  />
</Col>`}
        />

        <Documentation
          pro={true}
          title="Bar chart"
          description="Use this other style of a card using a chart and statistics:"
          scope={{ Col, WeeklyReportWidget }}
          imports={`import { WeeklyReportWidget } from "components/Widgets";`}
          example={`<Col xl={5}>
  <WeeklyReportWidget
    headerTitle="Weekly Sales"
    headerSubtitle="28 Daily Avg."
    reportTitle="$456,678"
    reportSubtitle="Total Themesberg Sales"
  />
</Col>`}
        />

        <Documentation
          pro={true}
          title="User list"
          description="You can use the following widget to show certain information or ranking order of users:"
          scope={{ Col, TopAuthorsWidget }}
          imports={`import { TopAuthorsWidget } from "components/Widgets";`}
          example={`<Col xl={5}>
  <TopAuthorsWidget title="Top Author Earnings" />
</Col>`}
        />

        <Documentation
          pro={true}
          title="Timeline"
          description="You can use this widget card to show a timeline of notifications, events, or actions:"
          scope={{ Col, TimelineWidget }}
          imports={`import { TimelineWidget } from "components/Widgets";`}
          example={`<Col xl={8}>
  <TimelineWidget title="Notifications" />
</Col>`}
        />

        <Documentation
          pro={true}
          title="Events"
          description="Use this widget card to show time based events:"
          scope={{ EventsWidget }}
          imports={`import { EventsWidget } from "components/Widgets";`}
          example={`<EventsWidget />`}
        />
      </Container>
    </article>
  );
};
