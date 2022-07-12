
import React from 'react';
import ApexChart from "react-apexcharts";
import { Row, Col, Card, Container } from 'react-bootstrap';

import Documentation from "components/Documentation";


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <h1 className="h2" id="charts">Charts</h1>
            <p className="fs-5 fw-light">
              Use charts to present complex data with the help of bar charts, pie charts, line charts and many more.
            </p>

            <h2 className="fs-5">Getting started</h2>
            <p>We made sure to use the most advanced and beautiful charts for your business. Volt React makes use of the <Card.Link href="https://apexcharts.com/docs/react-charts" target="_blank">react-apexcharts</Card.Link> library and we customized some of the looks to match with the UI that we offer.</p>

            <Documentation
              title="Line chart"
              description={
                <p>Here’s an example of a line chart:</p>
              }
              previewStyle={{ minHeight: 375 }}
              scope={{ ApexChart }}
              example={`const seriesLineChart = [{
    name: 'Clients',
    data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140]
}];

const optionsLineChart = {
  labels: ['01 Sept', '02 Sept', '03 Sept', '04 Sept', '05 Sept', '06 Sept', '07 Sept', '08 Sept', '09 Sept', '10 Sept', '11 Sept'],
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
  },
};

render(
  <ApexChart
    type="area"
    height={360}
    series={seriesLineChart}
    options={optionsLineChart}
  />
);`}
            />

            <Documentation
              title="Bar chart"
              description={
                <p>Here’s an example of a bar chart:</p>
              }
              previewStyle={{ minHeight: 375 }}
              scope={{ ApexChart }}
              example={`const seriesBarChart = [{
  name: 'Sales',
  data: [34, 29, 32, 38, 39, 35, 36]
}];

const optionsBarChart = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '25%',
      borderRadius: 5,
      radiusOnLastStackedBar: true,
      colors: {
        backgroundBarColors: ['#F2F4F6', '#F2F4F6', '#F2F4F6', '#F2F4F6'],
        backgroundBarRadius: 5,
      },
    }
  },
  xaxis: {
    categories: ['01 Sept', '02 Sept', '03 Sept', '04 Sept', '05 Sept', '06 Sept', '07 Sept'],
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
    y: {
      formatter: function (val) {
        return "$ " + val + "k"
      }
    }
  },
};

render(
  <ApexChart
    type="bar"
    height={360}
    series={seriesBarChart}
    options={optionsBarChart}
  />
);`}
            />

            <Documentation
              title="Pie chart"
              description={
                <p>Here’s an example of a pie chart:</p>
              }
              scope={{ ApexChart }}
              example={`const seriesPieChart = [44, 55, 13, 43, 22];
const optionsPieChart = {
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  labels: ['United States', 'Canada', 'United Kingdom', 'Germany', 'France'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
    y: {
      formatter: function (val) {
        return "$ " + val + "k"
      }
    }
  },
};

render(
  <ApexChart
    type="pie"
    height={360}
    series={seriesPieChart}
    options={optionsPieChart}
  />
);`}
            />

          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
