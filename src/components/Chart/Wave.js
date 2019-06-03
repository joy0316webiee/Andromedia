import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450);

    this.gradient2.addColorStop(0, 'rgba(72, 202, 112, 0)');
    this.gradient2.addColorStop(0.5, 'rgba(72, 202, 112, 0.5)');
    this.gradient2.addColorStop(1, 'rgba(72, 202, 112, 1)');

    this.gradient.addColorStop(0, 'rgba(15, 123, 249, 0)');
    this.gradient.addColorStop(0.5, 'rgba(15, 123, 249, 0.5)');
    this.gradient.addColorStop(1, 'rgba(15, 123, 249, 1)');

    this.renderChart(
      {
        labels: ['5-05', '5-06', '5-07', '5-08', '5-09', '5-10', '5-11'],
        datasets: [
          {
            label: '访客信息',
            backgroundColor: this.gradient,
            data: [122, 146, 100, 196, 152, 245, 138],
            radius: 0,
            borderWidth: 0,
            borderColor: 'transparent'
          },
          {
            label: '转化率',
            backgroundColor: this.gradient2,
            data: [64, 190, 155, 290, 135, 180, 115],
            radius: 0,
            borderWidth: 0,
            borderColor: 'transparent'
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: false
              },
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    );
  }
};
