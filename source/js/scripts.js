$(document).ready(function () {
    $('.js-trigger').click(function () {
      $(this).parent().toggleClass('js-active');
    });

        // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    var single_chart_value = $('.quality-chart').attr("data-chart");
    

    Highcharts.chart('chart1', {
        chart: {
            height: 264,
            type: 'solidgauge',
        },

        title: {
          text: ''
        },

        tooltip: {
            enabled: false
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '100%',
                innerRadius: '95%',
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },

        series: [{
            data: [{
                radius: '100%',
                innerRadius: '95%',
                y: [single_chart_value],
                dataLabels: false,
                // dataLabels: { format: '<div class="quality-chart__value">{y}</div>' },
            }]
        }]
    })
}); // doc.ready
