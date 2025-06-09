import * as React from "react";
import { PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";

export default function IrmPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Irm" />
    </PlasmicRootProvider>
  );
}
