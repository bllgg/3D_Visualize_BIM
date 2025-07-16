import {
  Ion,
  Viewer,
  Terrain,
  createOsmBuildingsAsync,
  Cartesian3,
  Math,
} from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
const ionToken = process.env.CESIUM_ION_TOKEN;
Ion.defaultAccessToken = ionToken;

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cartesian3.fromDegrees(144.9631, -37.8476, 500),
  orientation: {
    heading: Math.toRadians(0.0),
    pitch: Math.toRadians(-15.0),
  },
});
