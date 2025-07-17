# 3D Visualize BIM


A web application that visualizes 3D city models using [CesiumJS](https://cesium.com/platform/cesiumjs/), with optional integration of BIM (Building Information Modeling) data. This project provides a clean CesiumJS setup using Webpack, allowing future enhancements such as dynamic terrain, OSM buildings, and real-time BIM overlays.



## 🏗️ Features

- 🌍 Global terrain support with Cesium World Terrain
- 🏢 3D OSM buildings integration
- 📍 Fly-to camera navigation
- ⚙️ Webpack-based build system for modular development
- 🔐 Secure handling of Cesium Ion token via `.env`



## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/bllgg/3D_Visualize_BIM.git
cd 3D_Visualize_BIM
````

### 2. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

```bash
npm install
```

### 3. Set up Cesium Ion token

Create a `.env` file in the root directory:

```
CESIUM_ION_TOKEN=your_cesium_ion_token_here
```

> 🔐 Do **not** commit this file. It’s already listed in `.gitignore`.




## 🛠️ Build for Production

For Linux platforms
```bash
npm run build_linux
```
For Windows platforms
```
npm run build_windows
```

This generates the production-ready files in the `dist/` folder.



## 🚀 Run in Development Mode


For Linux platforms
```bash
npm run start_linux
```
For Windows platforms
```
npm run start_windows
```

Then open your browser and visit:
**[http://localhost:8080](http://localhost:8080)** (normally browser will automatically open and show you the scene)



## 📁 Project Structure

```
3D_Visualize_BIM/
├── src/                   # Main application source
|   |── css
|   |   └── main.css       # Main CSS file
│   |── index.js           # Entry point
|   └── index.html
├── dist/                  # Output folder after build
├── .env                   # Your Cesium Ion token
├── webpack.config.js      # Webpack configuration
└── package.json           # Project metadata and scripts
```



## 📌 Notes

* CesiumJS requires token authentication for using Cesium Ion services (terrain, imagery, OSM buildings)
* The token is injected at **build time** using `dotenv` and `webpack.DefinePlugin`
* If you see a blank page, check browser dev tools for 401 or token-related errors



## 📜 License

This project is open-source and available under the [GPL-3.0 License](LICENSE).



## 🙌 Acknowledgements

* [CesiumJS](https://cesium.com/platform/cesiumjs/)
* [Webpack](https://webpack.js.org/)
* [OpenStreetMap 3D Buildings](https://cesium.com/content/cesium-osm-buildings/)


