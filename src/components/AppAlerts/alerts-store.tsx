import { createSignal, createMemo, createRoot } from "solid-js";

function createAlerts() {
  // https://www.solidjs.com/tutorial/stores_nocontext?solved
  const [message, setMessage] = createSignal<string | null>(null);
  const showAlert = (msg: string) => setMessage(msg);
  const closeAlert = () => setMessage(null);

  return { message, showAlert, closeAlert };
}

export default createRoot(createAlerts);
