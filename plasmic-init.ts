import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import {DoubleNumber} from "./components/DoubleNumber";
import EmailSender from "./components/EmailSender"; // 👈 default import

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


PLASMIC.registerComponent(EmailSender, {
  name: "EmailSender",
  displayName: "EmailSender", // <-- Add this line
  props: {},
});

