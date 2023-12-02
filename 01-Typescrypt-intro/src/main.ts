import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { name, age, templateString } from "./bases/01_types";
import { pokemonIds, charmander } from "./bases/02-objects";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p> Hola mundo si o q ${name} ${age}</p>
    <p> ${templateString}</p>
    <p> ${pokemonIds.join(",")}</p>
    <p> ${JSON.stringify(charmander)}</p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
