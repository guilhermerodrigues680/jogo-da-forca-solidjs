/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import AppAlerts from "./components/AppAlerts/AppAlerts";

render(
  () => (
    <>
      <App />
      {/* Leia o JSDoc do AppAlerts para entender como usá-lo */}
      <AppAlerts />
    </>
  ),
  document.getElementById("root") as HTMLElement
);
