// function that automatically resizes scatterplot
function makeResponsive() {
    
    // make sure svg area is empty, clear it if not
    var svgArea = d3.select("body").select("svg");

    if (!svgArea.empty()) {
        svgArea.remove();
    }

    // determine svg wrapper dimensions based on dimensions of browser window
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;

    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
    };

    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.top - margin.bottom;

    // add svg element
    var svg = d3
        .select(".chart")
        .append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

    // add group element
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // read csv
    d3.csv("data.csv").then(function(stateData) {

        // parse data

        
        
    })
}
