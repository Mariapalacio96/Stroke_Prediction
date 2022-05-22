function init() {
    // Grab a reference to the dropdown select element
    let selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("Resources/json_df.json").then((data) => {
      let sampleNames = Object.keys(data.ID);
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      let firstSample = sampleNames[0];
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("Resources/json_df.json").then((data) => {

      // Use d3 to select the panel with id of `#sample-metadata`
      let PANEL = d3.select("#sample-metadata");
      let selector = d3.select("#selDataset");
      //console.log(sample);
      //console.log(selector.value());
      //console.log(data["Gender"][sample]);
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Add each title and value pair to the panel
      PANEL.append("h6").text(`GENDER:  ${data["Gender"][sample]}`);
      PANEL.append("h6").text(`AGE:  ${data["Age"][sample]}`);
      PANEL.append("h6").text(`HYPERTENSION:  ${data["Hypertension"][sample]}`);
      PANEL.append("h6").text(`HEART DISEASE:  ${data["HeartDisease"][sample]}`);
      PANEL.append("h6").text(`GLUCOSE:  ${data["Glucose"][sample]}`);
      PANEL.append("h6").text(`BMI:  ${data["BMI"][sample]}`);
      PANEL.append("h6").text(`EVER MARRIED:  ${data["EverMarried"][sample]}`);
      PANEL.append("h6").text(`WORK:  ${data["Work"][sample]}`);
      PANEL.append("h6").text(`RESIDENCE:  ${data["Residence"][sample]}`);
      PANEL.append("h6").text(`SMOKING:  ${data["Smoking"][sample]}`);
      PANEL.append("h6").text(`STROKE:  ${data["Stroke"][sample]}`);
    });
  }