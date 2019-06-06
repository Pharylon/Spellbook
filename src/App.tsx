import React, { Component } from "react";
import "./App.css";
import BeyondFile from "./character";
import "./normalize.css";
import BeyondFileView from "./BeyondFileView";
import Instructions from "./Instructions";

interface State {
  file: BeyondFile | undefined;
  characters: string[];
}

class App extends Component<{}, State> {
  state: State = {
    file: undefined,
    characters: [],
  };
  componentDidMount() {
    const json = localStorage.getItem("characters");
    if (json) {
      const characters: string[] = JSON.parse(json);
      this.setState({ characters });
    }
  }
  loadSaved = (name: string) => {
    const json = localStorage.getItem(name);
    if (json) {
      this.updateCharacterJson(json);
    }
    else {
      alert("Sorry, could not load character from memory.");
      const characters = [...this.state.characters.filter(x => x !== name)];
      this.setState({ characters }, () => {
        const characterJson = JSON.stringify(characters);
        localStorage.setItem("characters", characterJson);
      });
    }
  }
  updateCharacterJson = (text: string) => {
    try {
      const parsed: BeyondFile = JSON.parse(text);
      if (parsed && parsed.character) {
        const charName = parsed.character.name;
        localStorage.setItem(charName, text);
        const characters = [...this.state.characters.filter(x => x !== charName), charName];
        this.setState({ characters }, () => {
          const characterJson = JSON.stringify(characters);
          localStorage.setItem("characters", characterJson);
        });
        this.setState({ file: parsed }, () => {
          const myView = document.getElementById("beyondFileView");
          if (myView) {
            myView.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
      else {
        alert("That is not a valid JSON!");
      }
    }
    catch {
      alert("That is not a valid JSON!");
    }
  }
  updateCharacterBlob = (blob: Blob) => {
    console.log("Blob One");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result && typeof reader.result === "string") {
        this.updateCharacterJson(reader.result);
      }
    };
    reader.readAsText(blob);
  }
  render() {
    return (
      <div className="main">
        <h1>D&amp;D Beyond Spell Printer</h1>
        <div className="about">
          <p>
            I made this site because even though I love D&amp;D Beyond, I'm old-school and I like
            to print out my character. Unfortunately, the print out doesn't include spell descriptions.
            <span role="img" aria-label="Frowning face">🙁</span>
          </p>
          <p>
            And sure, you can look up those descriptions in the app, which is pretty convenient, but the app
            doesn't include your custom/homebrew spells. So, I decided to make this site to help me out.
            This will get you a big list of all your spells for easy printing! Don't worry, it's all safe.
            I don't need your password or anything. <span role="img" aria-label="Happy face">🙂</span>
          </p>
        </div>
        <div className="beta">
          <span>This page is in Beta! If you find a problem, please </span>
          <a href="https://github.com/Pharylon/Spellbook/issues">submit a bug report.</a> Thanks!
        </div>
        <div className={"instructions"}>
          {
            !!this.state.characters.length && (
              <div className="steps">
                <div className="step">
                  <div className="step-title">Load A previously Saved Character</div>
                  <ul>
                    {this.state.characters.map(x => (
                      <li onClick={() => this.loadSaved(x)} key={x}>
                        <span className="previous-character">{x}&nbsp;</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="or"> - OR LOAD A NEW FILE -</div>
              </div>
            )
          }
          <Instructions updateCharacterJson={this.updateCharacterBlob} />
        </div>
        {
          this.state.file && (
            <div id="beyondFileView">
              <BeyondFileView file={this.state.file} />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
