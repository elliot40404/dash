new Calendar({
    id: '#calendar',
    calendarSize: 'small'
});
const options = {
    series: [{
    name: 'This week',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Previous Week',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: '270px',
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  title: {
    text: 'Time Spent'
  }
  };

  const chart = new ApexCharts(document.querySelector("#graph1"), options);
  chart.render();

  var options2 = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 60, 40, 90, 70],
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Skills'
  },
  xaxis: {
    categories: ['Maths', 'Science', 'History', 'Geography', 'English', 'Computer']
  }
  };

  const chart2 = new ApexCharts(document.querySelector("#graph2"), options2);
  chart2.render();