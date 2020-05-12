import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@mj/navbar",
  app: () => System.import("@mj/navbar"),
  activeWhen: isActive.navbar,
});

registerApplication(
  "@mj/main",
  () => System.import("@mj/main"),
  (location) => location.pathname.startsWith("/main")
);

start({
  urlRerouteOnly: true,
});
