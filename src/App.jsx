import { useState } from "react";
import "./styles.css";
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "My name is Abuzar RaziQ",
    "I love to writing code and learning new Technologies",
    "My goal is to create my startup to solve a big problem and also it is useful for humanity",
    "If You want to connect, go to my Github Profile and then Linkedin",
    "Here it is:",
    <a href="https://www.github.com/abuzarraziqgithub" id="link">
      My Github
    </a>,
  ],
];

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div id="parentDiv">
      <header>
        <img src="./Public/react-logo-xs.png" alt="logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            About Me
          </button>
        </menu>

        <div id="tab-content">
          <ul id="listsBox">
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
