
import React from "react";
import ApexChart from "react-apexcharts";

import { dailySales, weeklySales, monthlySales, yearlySales, customers, revenue, users, weeklyReport } from "data/charts";

export const SalesValueChart = ({ period = "week" }) => {
  let periodData, periodLabels;

  switch (period) {
    case "day":
      periodData = dailySales.data;
      periodLabels = dailySales.labels;
      break;
    case "month":
      periodData = monthlySales.data;
      periodLabels = monthlySales.labels;
      break;
    case "year":
      periodData = yearlySales.data;
      periodLabels = yearlySales.labels;
      break;
    default:
      periodData = weeklySales.data;
      periodLabels = weeklySales.labels;
      break;
  }

  const chartSeries = [
    {
      name: "Sales",
      data: periodData,
    }
  ];

  const chartOptions = {
    chart: {
      fontFamily: 'Inter',
      foreColor: '#262B40',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          }
        },
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Inter',
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#17a5ce',
      }
    },
    grid: {
      show: true,
      borderColor: '#61DAFB',
      strokeDashArray: 1,
    },
    markers: {
      size: 5,
      strokeColors: '#17a5ce',
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },
    xaxis: {
      categories: periodLabels,
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: '#61DAFB',
      },
      axisTicks: {
        color: '#61DAFB',
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#262B40'],
          fontSize: '12px',
          fontWeight: 500,
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            show: false,
          }
        }
      }
    ]
  };

  return (
    <ApexChart
      type="area"
      height={420}
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const CustomersChart = () => {
  const chartSeries = [{
    name: 'Customers',
    data: customers.data,
  }];

  const chartOptions = {
    labels: customers.labels,
    chart: {
      sparkline: {
        enabled: true
      }
    },
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

  return (
    <ApexChart
      type="area"
      height={140}
      width="100%"
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const RevenueChart = () => {
  const chartSeries = [{
    name: 'Revenue',
    data: revenue.data,
  }];

  const chartOptions = {
    chart: {
      sparkline: {
        enabled: true
      }
    },
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
      categories: revenue.labels,
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

  return (
    <ApexChart
      type="bar"
      height={140}
      width="100%"
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const UsersChart = () => {
  const chartSeries = [{
    name: 'Users',
    data: users.data,
  }];

  const chartOptions = {
    labels: users.labels,
    chart: {
      sparkline: {
        enabled: true
      }
    },
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

  return (
    <ApexChart
      type="area"
      height={140}
      width="100%"
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const WeeklyReportChart = () => {
  const chartSeries = [{
    name: 'Weekly Sales',
    data: weeklyReport.data,
  }];

  const chartOptions = {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#31316A',
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 5,
        radiusOnLastStackedBar: true,
        horizontal: false,
        distributed: false,
        endindShape: 'rounded',
        colors: {
          backgroundBarColors: ['#F2F4F6', '#F2F4F6', '#F2F4F6', '#F2F4F6'],
          backgroundBarRadius: 5,
        },
      }
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    xaxis: {
      categories: weeklyReport.labels,
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

  return (
    <ApexChart
      type="bar"
      height={260}
      width="100%"
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const BarChartHorizontal = (props) => {
  const { title, data = [] } = props;

  const chartSeries = [{
    name: title,
    data: data.map(d => d.value)
  }];

  const chartOptions = {
    chart: {
      foreColor: '#4B5563',
      fontFamily: 'Inter',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: false,
        barHeight: '90%',
        borderRadius: 10,
        colors: {
          backgroundBarColors: ['#fff'],
          backgroundBarOpacity: .2,
          backgroundBarRadius: 10,
        },
      }
    },
    colors: ['#4D4AE8'],
    dataLabels: {
      enabled: true,
      textAnchor: 'middle',
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      offsetY: -1,
      dropShadow: {
        enabled: false,
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Inter',
        fontWeight: '500',
      }
    },
    grid: {
      show: false,
      borderColor: '#f2f2f2',
      strokeDashArray: 1,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false
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
          return val + "%"
        }
      },
    },
    xaxis: {
      categories: data.map(d => d.label),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
        offsetY: 5
      },
      axisBorder: {
        color: '#ffffff',
      },
      axisTicks: {
        color: '#ffffff',
        offsetY: 5
      },
    }
  };

  return (
    <ApexChart
      type="bar"
      height={500}
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const BarChart = (props) => {
  const { data = [] } = props;

  const chartSeries = data.map(d => ({
    name: d.label,
    data: d.values.map(v => v.value),
  }));

  const chartOptions = {
    chart: {
      fontFamily: 'Inter',
      foreColor: '#4B5563',
    },
    colors: data.map(d => d.color),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
        colors: {
          backgroundBarColors: ['#fff'],
          backgroundBarOpacity: .2,
          backgroundBarRadius: 10,
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 500,
      height: 40,
      tooltipHoverFormatter: undefined,
      offsetY: 10,
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 1,
        strokeColor: '#ffffff',
        radius: 50,
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: data.reduce((_, d) => [...new Set(d.values.map(v => v.date))], []),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: '#EBE3EE',
      },
      axisTicks: {
        color: '#f1f1f1',
      }
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1
    },
    responsive: [{
      breakpoint: 1499,
      options: {
        chart: {
          height: '400px',
        },
      },
    }]
  };

  return (
    <ApexChart
      type="bar"
      height={400}
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const PieChart = (props) => {
  const { data = [] } = props;

  const chartSeries = data.map(d => ({
    name: d.label,
    data: d.values.map(v => v.value),
  }));

  const chartOptions = {
    colors: data.map(d => d.color),
    chart: {
      fontFamily: 'Inter',
      foreColor: '#4B5563',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          }
        },
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: true,
      borderColor: '#f2f2f2',
      strokeDashArray: 1,
    },
    xaxis: {
      categories: data.reduce((_, d) => [...new Set(d.values.map(v => v.date))], []),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: '#ffffff',
      },
      axisTicks: {
        color: '#ffffff',
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#4B5563'],
          fontSize: '12px',
          fontWeight: 500,
        },
      },
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 400,
      height: 60,
      tooltipHoverFormatter: undefined,
      offsetY: 20,
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 1,
        strokeColor: '#fff',
        radius: 50,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            show: false,
          }
        }
      }
    ]
  };

  return (
    <ApexChart
      type="pie"
      height={400}
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const DognutChart = (props) => {
  const { data = [] } = props;

  const chartSeries = data.map(d => ({
    name: d.label,
    data: d.values.map(v => v.value),
  }));

  const chartOptions = {
    colors: data.map(d => d.color),
    chart: {
      fontFamily: 'Inter',
      foreColor: '#4B5563',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          }
        },
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: true,
      borderColor: '#f2f2f2',
      strokeDashArray: 1,
    },
    xaxis: {
      categories: data.reduce((_, d) => [...new Set(d.values.map(v => v.date))], []),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: '#ffffff',
      },
      axisTicks: {
        color: '#ffffff',
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#4B5563'],
          fontSize: '12px',
          fontWeight: 500,
        },
      },
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 400,
      height: 60,
      tooltipHoverFormatter: undefined,
      offsetY: 20,
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 1,
        strokeColor: '#fff',
        radius: 50,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            show: false,
          }
        }
      }
    ]
  };

  return (
    <ApexChart
      type="pie"
      height={400}
      series={chartSeries}
      options={chartOptions}
    />
  );
};

export const LineGraphChart = (props) => {
  const { data = [] } = props;

  const chartSeries = data.map(d => ({
    name: d.label,
    data: d.values.map(v => v.value),
  }));

  const chartOptions = {
    colors: data.map(d => d.color),
    chart: {
      fontFamily: 'Inter',
      foreColor: '#4B5563',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export: {
          csv: {
            filename: undefined,
            columnDelimiter: ',',
            headerCategory: 'category',
            headerValue: 'value',
            dateFormatter(timestamp) {
              return new Date(timestamp).toDateString()
            }
          }
        },
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: true,
      borderColor: '#f2f2f2',
      strokeDashArray: 1,
    },
    xaxis: {
      categories: data.reduce((_, d) => [...new Set(d.values.map(v => v.date))], []),
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: '#ffffff',
      },
      axisTicks: {
        color: '#ffffff',
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#4B5563'],
          fontSize: '12px',
          fontWeight: 500,
        },
      },
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: 'Inter',
      fontWeight: 400,
      height: 60,
      tooltipHoverFormatter: undefined,
      offsetY: 20,
      markers: {
        width: 14,
        height: 14,
        strokeWidth: 1,
        strokeColor: '#fff',
        radius: 50,
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          yaxis: {
            show: false,
          }
        }
      }
    ]
  };

  return (
    <ApexChart
      type="line"
      height={420}
      series={chartSeries}
      options={chartOptions}
    />
  );
};
