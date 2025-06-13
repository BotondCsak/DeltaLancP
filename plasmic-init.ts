import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {DoubleNumber} from "./components/DoubleNumber";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fNVXiHPtBdj6Mm7U19zyhr",
      token: "xPweHauT3tMu84TmBDAoiKQTUOnIGMyAobx9RjixPtMP0NbopH9FaGPzLEIpKqUhhIHPzzQYdxewirGJkQ",
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(DoubleNumber, {
  name: "DoubleNumber",
  displayName: "DoubleNumber",
  props: {},
  
});
