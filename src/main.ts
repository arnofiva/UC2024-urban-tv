import Graphic from "@arcgis/core/Graphic";
import WebScene from "@arcgis/core/WebScene";
import Mesh from "@arcgis/core/geometry/Mesh";
import * as kernel from "@arcgis/core/kernel";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { FillSymbol3DLayer, MeshSymbol3D } from "@arcgis/core/symbols";
import SceneView from "@arcgis/core/views/SceneView";
import "@esri/calcite-components/dist/calcite/calcite.css";
import UserStore from "./stores/UserStore";

console.log(`Using ArcGIS Maps SDK for JavaScript v${kernel.fullVersion}`);

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

console.log({ UserStore });

const params = new URLSearchParams(document.location.search.slice(1));

const webSceneId = params.get("webscene") || "48f9ffa636c84286a6206dcca59d9d70";

const map = new WebScene({
  portalItem: {
    id: webSceneId,
    // portal: {
    //   url: portalUrl,
    // },
  },
});

const view = new SceneView({
  container: "viewDiv",
  map,
});

(window as any)["view"] = view;

const mesh = Mesh.fromJSON({
  spatialReference: { latestWkid: 3857, wkid: 102100 },
  components: [
    {
      faces: [8, 9, 10, 8, 10, 11],
      material: {
        colorTexture: {
          data: {
            type: "video-element",
            src: "./Shot_02_1080.mp4",
            autoplay: false,
            loop: false,
            muted: false,
            crossOrigin: "anonymous",
            preload: "none",
          },
          wrap: "repeat",
        },
        alphaMode: "auto",
        alphaCutoff: 0.5,
        doubleSided: true,
      },
      shading: "source",
    },
    {
      faces: [
        0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 12, 13, 14, 12, 14, 15, 16, 17, 18,
        16, 18, 19, 20, 21, 22, 20, 22, 23,
      ],
      material: {
        color: [40, 20, 20, 255],
        alphaMode: "auto",
        alphaCutoff: 0.5,
        doubleSided: true,
      },
      shading: "source",
    },
  ],
  vertexSpace: {
    type: "local",
    origin: [950184.2042933014, 6004001.337255693, 420],
  },
  transform: {
    translation: [0, 0, 0],
    rotationAxis: [
      1.751021677256581e-8, 2.980232238769552e-8, 0.9999999999999993,
    ],
    rotationAngle: 250,
    scale: [1.5, 1.5, 1.5],
    // scale: [0.4773428993661809, 0.4773428993661765, 0.4773428993661756]
  },
  vertexAttributes: {
    position: [
      -8, -0.5, 0, 8, -0.5, 0, 8, -0.5, 11, -8, -0.5, 11, 8, -0.5, 0, 8, 0.5, 0,
      8, 0.5, 11, 8, -0.5, 11, 8, 0.5, 0, -8, 0.5, 0, -8, 0.5, 11, 8, 0.5, 11,
      -8, 0.5, 0, -8, -0.5, 0, -8, -0.5, 11, -8, 0.5, 11, -8, -0.5, 11, 8, -0.5,
      11, 8, 0.5, 11, -8, 0.5, 11, -8, 0.5, 0, 8, 0.5, 0, 8, -0.5, 0, -8, -0.5,
      0,
    ],
    uv: [
      0, 0.625, 0.25, 0.625, 0.25, 0.375, 0, 0.375, 0.25, 0.625, 0.5, 0.625,
      0.5, 0.375, 0.25, 0.375, 0, 1, 1, 1, 1, 0, 0, 0, 0.75, 0.625, 1, 0.625, 1,
      0.375, 0.75, 0.375, 0, 0.375, 0.25, 0.375, 0.25, 0.125, 0, 0.125, 0,
      0.875, 0.25, 0.875, 0.25, 0.625, 0, 0.625,
    ],
    normal: [
      0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
      0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
      0, -1,
    ],
  },
});

const video = mesh.components[0].material.colorTexture.data as HTMLVideoElement;

console.log({ video });

const layer = new GraphicsLayer({
  graphics: [
    new Graphic({
      geometry: mesh,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: "white",
            },
          }),
        ],
      }),
    }),
  ],
});

view.when(async () => {
  try {
    await map.loadAll();
  } catch {}

  map.add(layer);

  view.on("click", async (e) => {
    const { results } = await view.hitTest(e);

    for (const result of results) {
      if (result.layer === layer) {
        video.play();
      }
    }
  });
});
