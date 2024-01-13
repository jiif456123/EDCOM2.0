
//area chart
export var areaChartData: Array<any> = [

  { data: [0, 30, 60, 25, 60, 25, 50, 10, 60, 30, 80, 0], label: 'Google' },
  { data: [0, 60, 25, 80, 35, 75, 30, 55, 20, 60, 10, 0], label: 'Apple' }

];
export var areaChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export var areaChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      scaleLabel: {
        display: false,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      scaleLabel: {
        display: false,
        labelString: 'Value'
      }
    }]
  },
};
export var areaChartColors: Array<any> = [


  {

    backgroundColor: "rgba(0, 140, 255, 0.77)",
    borderColor: "#008cff",
    borderWidth: 1
  },
  {
    backgroundColor: "rgba(255, 151, 0, 0.76)",
    borderColor: "#ff9700",
    borderWidth: 1
  },

];
export var areaChartLegend = true;
export var areaChartType = 'line';

//line chart

export var lineChartData: Array<any> = [

  { data: [13, 20, 4, 18, 7, 4, 8], label: 'Google' },
  { data: [3, 30, 6, 6, 3, 4, 11], label: 'Facebook' },

];
export var lineChartLabels: Array<any> = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
export var lineChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'top',
    fontColor: '#4e4e4e'
  },
  scales: {
    xAxes: [{
      display: true,
     
      scaleLabel: {
        display: false,
        labelString: 'week'
      }
    }],
    yAxes: [{
      display: true,
      
      scaleLabel: {
        display: false,
        labelString: 'Value'
      }
    }]
  },
};
export var lineChartColors: Array<any> = [

  {

    backgroundColor: "transparent",
    borderColor: "#fd3550",
    borderWidth: 2
  },
  {

    backgroundColor: "transparent",
    borderColor: "#15ca20",
    borderWidth: 2,
    borderDash: [4, 4]
  },

];
export var lineChartLegend = true;
export var lineChartType = 'line';




// barChart
export var barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      
    ticks: {
      beginAtZero:true,
      fontColor: '#4e4e4e'
    },
    gridLines: {
      display: true ,
      borderDash: [0],
      color: "rgba(66, 59, 116, 0.15)"
    },
    }],
  }

};
export var barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export var barChartType = 'bar';
export var barChartLegend = true;

export var barChartData: any[] = [
  { barPercentage: .2, data: [65, 59, 80, 81,65, 59, 80, 81,59, 80, 81,65], label: 'Google' },
  { barPercentage: .2, data: [28, 48, 40, 19,28, 48, 40, 19,40, 19,28, 48], label: 'Facebook' }
];

export var barChartColors: Array<any> = [


  {

    backgroundColor: 'rgba(255, 0, 0, 0.616)',
    borderColor: 'rgba(255, 0, 0, 0.616)',
    pointBackgroundColor: 'rgba(255, 0, 0, 0.616)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgba(0, 157, 160, 0.8)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },

];

// Doughnut
export var doughnutChartLabels: string[] = ["Info", "Dark", "Danger", "Secondary", "Success", "Warning"];
export var doughnutChartData: number[] = [20, 20, 20, 20, 20, 20];
export var doughnutChartColors: any[] = [{ backgroundColor: [
  "#0dceec",
  "#223035",
  "#fd3550",
  "#75808a",
  "#15ca20",
  "#ff9700"] }];
export var doughnutChartType = 'doughnut';
export var doughnutChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false
};

// Pie
export var pieChartLabels: string[] = ["Info", "Dark", "Danger", "Secondary", "Success", "Warning"];
export var pieChartData: number[] = [20, 20, 20, 20, 20, 20];
export var pieChartType = 'pie';
export var pieChartColors: any[] = [{ backgroundColor: [
      "#0dceec",
      "#223035",
      "#fd3550",
      "#75808a",
      "#15ca20",
      "#ff9700"
    ] }];
export var pieChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false
};


//scatter chart
export var scatterChartData: Array<any> = [

  {
    data: [
      {
        x: 1,
        y: -1.711e-2,
      }, {
        x: 1.26,
        y: -2.708e-2,
      }, {
        x: 1.58,
        y: -4.285e-2,
      }, {
        x: 2.0,
        y: -6.772e-2,
      }, {
        x: 2.51,
        y: -1.068e-1,
      }, {
        x: 3.16,
        y: -1.681e-1,
      }, {
        x: 3.98,
        y: -2.635e-1,
      }, {
        x: 5.01,
        y: -4.106e-1,
      }, {
        x: 6.31,
        y: -6.339e-1,
      }, {
        x: 7.94,
        y: -9.659e-1,
      }, {
        x: 10.00,
        y: 1.445,
      }, {
        x: 12.6,
        y: 2.110,
      }, {
        x: 15.8,
        y: 2.992,
      }, {
        x: 20.0,
        y: 4.102,
      }, {
        x: 25.1,
        y: 5.429,
      }, {
        x: 31.6,
        y: 6.944,
      }, {
        x: 39.8,
        y: 8.607,
      }, {
        x: 50.1,
        y: 8.607,
      }, {
        x: 63.1,
        y: 6.944,
      }, {
        x: 79.4,
        y: 5.429,
      }, {
        x: 100.00,
        y: 4.102,
      }, {
        x: 126,
        y: 1.445,
      }, {
        x: 158,
        y: -9.659e-1,
      }, {
        x: 200,
        y: -2.339e-1,
      }, {
        x: 251,
        y: -0.398e1-1,
      }, {
        x: 316,
        y: -2.097e1,
      }, {
        x: 398,
        y: -2.297e1,
      }, {
        x: 501,
        y: -2.996e1,
      }, {
        x: 631,
        y: -3.196e1,
      }, {
        x: 794,
        y: -2.396e1,
      }, {
        x: 1000,
        y: -1.596e1,
      }
    ], label: 'V(node2)'
  }

];
export var scatterChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export var scatterChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
    text: 'Chart.js Scatter Chart - Logarithmic X-Axis'
  },
  scales: {
    xAxes: [{
      type: 'logarithmic',
      position: 'bottom',
      gridLines: {
        zeroLineColor: "rgba(0,0,0,.1)",
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        labelString: 'Frequency',
        display: true,
      }
    }],
    yAxes: [{
      type: 'linear',
      ticks: {
        userCallback: function (tick) {
          return tick.toString() + "dB";
        }
      },
      gridLines: {
        zeroLineColor: "rgba(81,117,224,1)",
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        labelString: 'Voltage',
        display: true
      }
    }]
  }
};
export var scatterChartColors: Array<any> = [
  {

    backgroundColor: "rgba(221, 27, 76, 0.277)",
    borderColor: "rgba(206, 13, 61, 0.966)",
    pointBorderColor: "rgba(206, 13, 61, 0.966)",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  }

];
export var scatterChartLegend = true;
export var scatterChartType = 'scatter';