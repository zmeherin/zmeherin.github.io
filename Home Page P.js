var main5loaded = false;

function fadein(str) {
    divId = '#' + str;
    /* Check the location of each desired element */
    $(divId).each( function(i){
            var bottom_of_object = $(divId).offset().top + (($(divId).outerHeight())/5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // If the object is completely visible in the window, fade it in
            if( bottom_of_window > bottom_of_object ){
                $(divId).animate({'opacity':'1'}, 1000);
                
                // Additionally, make bubble chart if Skills section is visible
                if (str === 'main5' && main5loaded == false) {
                    makeBubbleChart();
                    main5loaded = true;
                }
            }
    });
}

function makeBubbleChart() {
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '100%',
            backgroundColor: '#f2f2f2',
        },
        title: false,
        legend: {
            backgroundColor: '#f2f2f2',
            enabled: true,
            align: 'center',
            verticalAlign: 'top',
    		symbolHeight: 30,
            symbolPadding: 15,
            itemMarginBottom: 30,
            itemWidth: 305,
            itemStyle: {
                'fontFamily': 'Raleway',
                'font-size':'26px',
                'textOutline': 'none',
                'fontWeight': 'normal',
                'transition':'.5s',
            },
            itemHoverStyle: {
                'font-size':'27px',
            }
        },
        tooltip: { enabled: false },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '120%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    overflow: "justify",
                    format: '{point.name}<br/>{point.namept2}',
                    align: 'center',
                    crop: true,
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 25
                    },
                    style: {
                        textOutline: 'none',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        fontFamily: 'Raleway',
                    }
                }
            }
        },
        series: [
        {
            name: "Lang's/Frameworks",
            data: [
                { name: "Python", value: 1000 },
                { name: "Java", value: 700 },
                { name: "Javascript", value: 800 },
                { name: "C#", value: 600 },
                { name: "C++", value: 50 },
                { name: "PHP", value: 75 },
                { name: "Django", value: 1000 },
                { name: "React", value: 75 },
            ],
            color: "#F5B7B1",
            marker: {
                fillOpacity: 1
            },
        },
        {
            name: 'Technologies',
            data: [
                { name: "AWS", value: 100 },
                { name: "Git", value: 500 },
                { name: "HTML", value: 500 },
                { name: "CSS", value: 200 },
                { name: "Bootstrap", value: 300 },
            ],
            color: "#F9E79F",
            marker: {
                fillOpacity: 1
            },
        },
        {
            name: 'Design',
            data: [
                { name: "Wireframing", value: 1000 }, 
                { name: "UX", namept2: "Research", value: 300 }, 
                { name: "Feature", namept2: "Prioritization", value: 600 },
                { name: "Beta", namept2: "testing", value: 200 }
            ],
            color: "#EEC0A1",
            marker: {
                fillOpacity: 1
            },
        },
        ]
    });    
}

$(document).ready(function() {
    // Run this after 2 seconds of loading
    setTimeout(function(){ 
        document.getElementById("loader").style.display = "none";
        document.getElementById("body").style.display = "block";
        document.body.style.background = "#e9e9e9";

        // PgOne fades in
        $('.PgOne').each( function(i){
            $(this).animate({'opacity':'1'}, 3000);
        });

        // Add white background to contact form if big screen
        if (screen.width > 1400) {
            document.getElementById("Form").style.borderRadius = "5px";
            document.getElementById("Form").style.backgroundColor = "#f2f2f2";
        }

        main5loaded = false;
    }, 1500);
    
    $(window).scroll( function() {
        fadein('main2'),
        fadein('ME'),
        fadein('main3'),
        fadein('Student'),
        fadein('RA'),
        fadein('C1'),
        fadein('TextEx'),
        fadein('CSSG'),
        fadein('Contact'),
        fadein('main5'),
        fadein('Bubbles'), 
        fadein('skillsDesc')
    });
});


function scrollToPgTwo() {
    $('html,body').animate({
        scrollTop: $("#PgTwo").offset().top}, 700) 
    event.preventDefault(); // Prevents page from flashing before scrolling due to race condition
    // e.stopPropagation; //Uncaught ReferenceError: e is not defined
}
function scrollToPgThree() {
    $('html,body').animate({ scrollTop: $("#PgThree").offset().top}, 1400);
    event.preventDefault();
    // e.stopPropagation;
}
function scrollToPgFour() {
    $('html,body').animate({ scrollTop: $("#PgFour").offset().top}, 2100);
    event.preventDefault();
    // e.stopPropagation;

}