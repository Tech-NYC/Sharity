import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/mdi/map-marker";
import "./map.css";
require("dotenv").config({ path: "../../../../.env" });

function Map() {
  let [loadState, setLoadState] = React.useState([]);
  React.useEffect(() => {
    getOrgs();
  }, loadState);

  let orgs;

  function getOrgs() {
    const PROD = true;
    const URL = PROD ? "https://sharity-technyc.herokuapp.com" : "http://localhost:3000";

    fetch(`${URL}/api/organizations/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error("Fetch failed");
        }
      })
      .then((data) => {
        orgs = data;
        console.log(data);
      }, renderMap())
      .catch((err) => console.log("fetch erro", err));
  }

  function renderMap() {
    console.log("Rendering map..");

    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCQULPqCPaX1O1Lji7O9fpVTPpiIzcTobg&callback=initMap`);
    window.initMap = initMap;
  }

  const initMap = () => {
    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.705579703251406, lng: -73.90273982766803 },
      zoom: 12,
    });

    // // Create An InfoWindow
    // var infowindow = new window.google.maps.InfoWindow();

    // // Display Dynamic Markers
    // this.state.orgs.map((org) => {
    //   let contentString = `${org.name}`;

    //   // Create A Marker
    //   var marker = new window.google.maps.Marker({
    //     position: { lat: -34.397, lng: 150.644 },
    //     map: map,
    //     title: "test",
    //   });

    //   // Click on A Marker!
    //   marker.addListener("click", function () {
    //     // Change the content
    //     infowindow.setContent(contentString);

    //     // Open An InfoWindow
    //     infowindow.open(map, marker);
    //   });
    // });
  };

  function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }

  return (
    <main>
      <div id="map" class="google-map"></div>
    </main>
  );
}

export default Map;
