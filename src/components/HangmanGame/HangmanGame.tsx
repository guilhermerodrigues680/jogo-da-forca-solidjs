import {
  type Component,
  createSignal,
  createEffect,
  For,
  Show,
} from "solid-js";
import GameDoll from "./GameDoll";

import styles from "./HangmanGame.module.css";
console.debug("styles", styles);

const HangmanGame: Component = () => {
  // https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3
  // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  // const alphabet = alpha.map((x) => String.fromCharCode(x));
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const maxAttempts = 6;

  const [secretWordTip, setSecretWordTip] = createSignal<string>("");
  const [secretWord, setSecretWord] = createSignal<string>("");
  const [chosenLetters, setChosenLetters] = createSignal(new Set<string>());

  const secretWordStep = () =>
    Array.from(secretWord()).map((ch) => (chosenLetters().has(ch) ? ch : ""));
  const playerHitsAndMisses = () => {
    const attempts = chosenLetters().size;
    const hits = Array.from(new Set(secretWord())).reduce(
      (a, ch) => (chosenLetters().has(ch) ? a + 1 : a),
      0
    );
    const misses = attempts - hits;
    return { attempts, hits, misses };
  };

  const gameStarted = () => !!secretWord();
  const gameOver = () => playerHitsAndMisses().misses >= maxAttempts;
  const playerWin = () =>
    gameStarted() && !gameOver() && secretWordStep().join("") === secretWord();

  createEffect(() => {
    // console.debug("SecretWordChars", secretWordChars());
    // console.debug("chosenLetters", chosenLetters());
    console.debug("playerHitsAndMisses", playerHitsAndMisses());
  });

  createEffect(() => {
    if (playerWin()) {
      console.log("O jogador venceu");
      alert("O jogador venceu");
    }
    if (gameOver()) {
      console.log("O jogador perdeu");
      alert("O jogador perdeu");
    }
  });

  function handleClick() {
    const db = [
      {
        secretWord: "rosa",
        tip: "Uma cor que é uma flor",
      },
      {
        secretWord: "gol",
        tip: "Carro da volkswagem",
      },
      {
        secretWord: "liquidificador",
        tip: "Cozinha",
      },
    ];

    const randomIdx = Math.round(Math.random() * 10) % db.length;
    // const chPositionMap = Array.from(newSecretWord).reduce(
    //   (m, c, cIdx) => (m.has(c) ? m.get(c)!.push(cIdx) : m.set(c, [cIdx]), m),
    //   new Map<string, number[]>()
    // );
    // console.debug(chPositionMap);
    setSecretWord(db[randomIdx].secretWord);
    setSecretWordTip(db[randomIdx].tip);
  }

  function handleClickVirtualKey(ch: string) {
    console.debug("handleClickVirtualKey", ch);
    setChosenLetters((prev) => new Set(prev.add(ch)));
  }

  return (
    <div class={styles["hangman-game-container"]}>
      {`${gameOver()}`}
      {`${playerWin()}`}
      <div class={styles["game-doll-wrapper"]}>
        <GameDoll level={playerHitsAndMisses().misses} />
      </div>

      <Show when={!gameStarted() || gameOver() || playerWin()}>
        <div>
          <button type="button" onClick={handleClick}>
            Iniciar
          </button>
        </div>
      </Show>

      <Show when={gameStarted()}>
        <div class={styles["secret-word-container"]}>
          <For each={secretWordStep()}>{(ch) => <span>{ch}</span>}</For>
        </div>

        <div>Dica: {secretWordTip()}</div>
        <Show when={playerWin() || gameOver()}>
          <div>Resposta: {secretWord()}</div>
        </Show>

        <div class={styles["keyboard-container"]}>
          <For each={alphabet}>
            {(ch) => (
              <button
                type="button"
                disabled={playerWin() || gameOver() || chosenLetters().has(ch)}
                onClick={[handleClickVirtualKey, ch]}
              >
                {ch}
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default HangmanGame;
