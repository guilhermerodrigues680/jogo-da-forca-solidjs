import { createEffect, Show, type Component } from "solid-js";
import { Portal } from "solid-js/web";
import alertsStore from "./alerts-store";

import styles from "./AppAlerts.module.css";

// const AppAlert: Component<{
//   message: string;
//   onClose: () => void;
// }> = (props) => {
const AppAlerts: Component = () => {
  let appAlertContainerEl: HTMLDivElement | undefined = undefined;

  const { message, closeAlert } = alertsStore;

  createEffect(() => {
    // Quando um alerta estiver sendo exibido, aplica a classe abaixo
    // no body. Isso adequa o comportamento da página quando
    // o alerta está aberto, por exemplo, impede a rolagem.
    const className = styles["alerts-shown"];
    if (message() == null) {
      document.body.classList.remove(className);
    } else {
      document.body.classList.add(className);
    }
  });

  // function handleBtnCloseClick() {
  //   props.onClose();
  // }

  function handleAppAlertWrapperClick(evt: MouseEvent) {
    if (!(evt.target instanceof Element) || !appAlertContainerEl) {
      return;
    }

    const clickOutsideAlert = !appAlertContainerEl.contains(evt.target);
    if (clickOutsideAlert) {
      closeAlert();
    }
  }

  return (
    <Show when={message() != null}>
      <Portal>
        <div
          class={styles["app-alert-wrapper"]}
          onClick={handleAppAlertWrapperClick}
        >
          <div class={styles["app-alert-container"]} ref={appAlertContainerEl}>
            <h6>{message()}</h6>
            <button onClick={closeAlert}>close</button>
          </div>
        </div>
      </Portal>
    </Show>
  );
};

export default AppAlerts;
