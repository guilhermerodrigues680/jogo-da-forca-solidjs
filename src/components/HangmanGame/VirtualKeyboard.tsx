import { Index, type Component } from "solid-js";

import styles from "./VirtualKeyboard.module.css";

const VirtualKeyboard: Component<{
  disabled?: boolean;
  disabledKeys?: Set<string>;
  onKey?: (char: string) => void;
}> = (props) => {
  /** https://en.wikipedia.org/wiki/QWERTY */
  const keyboardRows = [[..."qwertyuiop"], [..."asdfghjkl"], [..."zxcvbnm"]];

  function handleClickVirtualKey(ch: string) {
    props.onKey?.(ch);
  }

  return (
    <div class={styles["keyboard-container"]}>
      <Index each={keyboardRows}>
        {(row) => (
          <div class={styles["keyboard-row"]}>
            <Index each={row()}>
              {(ch) => (
                <button
                  type="button"
                  disabled={props.disabled || props.disabledKeys?.has(ch())}
                  onClick={[handleClickVirtualKey, ch()]}
                >
                  {ch}
                </button>
              )}
            </Index>
          </div>
        )}
      </Index>
    </div>
  );
};

export default VirtualKeyboard;
