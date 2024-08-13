import { DemoConfig } from "../types";
import { demoEntitiesSections } from "./entities";
import { demoLovelaceSections } from "./lovelace";

export const demoSections: DemoConfig = {
  authorName: "Hombee",
  authorUrl: "https://hombee.dev/",
  name: "Hombee Home",
  lovelace: demoLovelaceSections,
  entities: demoEntitiesSections,
  theme: () => null,
};
