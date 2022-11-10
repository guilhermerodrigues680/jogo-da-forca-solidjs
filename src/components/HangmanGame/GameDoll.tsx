import { Component, Show } from "solid-js";

import styles from "./GameDoll.module.css";

const GameDoll: Component<{ level: number }> = (props) => (
  <svg
    class={styles["game-doll"]}
    width="250"
    height="209"
    viewBox="0 0 250 209"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="game-doll">
      <g id="forca">
        <line
          id="Line 1"
          x1="43"
          y1="3"
          x2="43"
          y2="206"
          stroke="#262626"
          stroke-width="6"
          stroke-linecap="round"
        />
        <line
          id="Line 2"
          x1="3"
          y1="206"
          x2="247"
          y2="206"
          stroke="#262626"
          stroke-width="6"
          stroke-linecap="round"
        />
        <line
          id="Line 3"
          x1="23"
          y1="3"
          x2="197"
          y2="3"
          stroke="#262626"
          stroke-width="6"
          stroke-linecap="round"
        />
        <line
          id="Line 4"
          x1="118.882"
          y1="1"
          x2="118.882"
          y2="34.1092"
          stroke="#262626"
          stroke-width="6"
        />
      </g>
      <g id="boneco">
        <Show when={props.level >= 1}>
          <circle
            id="Ellipse 1"
            cx="118.832"
            cy="58.8319"
            r="21.8319"
            stroke="#262626"
            stroke-width="6"
          />
        </Show>

        <Show when={props.level >= 2}>
          <line
            id="Line 14"
            x1="119"
            y1="84"
            x2="119"
            y2="112"
            stroke="#262626"
            stroke-width="6"
            stroke-linecap="round"
          />

          <Show when={props.level >= 3}>
            <line
              id="Line 12"
              x1="119.243"
              y1="90"
              x2="134.799"
              y2="105.556"
              stroke="#262626"
              stroke-width="6"
              stroke-linecap="round"
            />
          </Show>
          <Show when={props.level >= 4}>
            <line
              id="Line 13"
              x1="103"
              y1="105.556"
              x2="118.556"
              y2="90"
              stroke="#262626"
              stroke-width="6"
              stroke-linecap="round"
            />
          </Show>
        </Show>

        <Show when={props.level >= 5}>
          <line
            id="Line 10"
            x1="120.098"
            y1="112.098"
            x2="139.098"
            y2="145.007"
            stroke="#262626"
            stroke-width="6"
            stroke-linecap="round"
          />
        </Show>
        <Show when={props.level >= 6}>
          <line
            id="Line 11"
            x1="98.9019"
            y1="145.007"
            x2="117.902"
            y2="112.098"
            stroke="#262626"
            stroke-width="6"
            stroke-linecap="round"
          />
        </Show>
      </g>
    </g>
  </svg>
);

export default GameDoll;
