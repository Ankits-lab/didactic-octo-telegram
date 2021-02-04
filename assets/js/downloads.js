// Device list
function shareListHideShow(actionId) {
  var divs = document.getElementsByClassName("oem");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id == actionId) {
      if (divs[i].style.display === "block") {
        divs[i].style.display = "none";
      } else {
        divs[i].style.display = "block";
      }
    } else divs[i].style.display = "none";
  }
}

// Downloads counter
var ancientSourceForge =
  "https://sourceforge.net/projects/ancientrom/files/stats/json?start_date=2015-01-01&end_date=2021-02-04";
var ancientDevices =
  "https://raw.githubusercontent.com/ancient-devices/official_devices/main/devices.json";

$.getJSON(ancientSourceForge, function (ancientStats) {
  console.log("AncientSourceForge loaded!");
  $(".totalDownloads").html(ancientStats.total);

  $(".topGeo").html(ancientStats.summaries.geo.top);
  $(".topGeoPercent").html(" (" + ancientStats.summaries.geo.percent + "%)");

  $(".topOs").html(ancientStats.summaries.os.top);
  $(".topOsPercent").html(" (" + ancientStats.summaries.os.percent + "%)");

  $(".statsUpdated").html(ancientStats.stats_updated);
});

$.getJSON(ancientDevices, function (ancientDevices) {
  console.log("AncientDevices loaded!");
  $(".supportedDevices").html(ancientDevices.totalDevices);
});
