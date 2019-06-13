import React, { Component } from "react";
import "./App.css";
import { BeyondCharacter } from "./character";
import "./normalize.css";
import BeyondFileView from "./BeyondFileView";
import Instructions from "./Instructions";


interface State {
  character: BeyondCharacter | undefined;
  characters: string[];
}

class App extends Component<{}, State> {
  state: State = {
    character: undefined,
    characters: [],
  };
  componentDidMount() {
    const json = localStorage.getItem("characters");
    if (json) {
      try {
        const characters: string[] = JSON.parse(json);
        if (process.env.NODE_ENV === "development" && characters.length > 0) {
          this.loadSaved(characters[0]);
        }
        this.setState({ characters });
      }
      catch (err) {
        localStorage.clear();
        console.log("Something wrong with JSON", json);
      }

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
      characters.sort((a, b) => a < b ? 0 : 1);
      this.setState({ characters }, () => {
        const characterJson = JSON.stringify(characters);
        localStorage.setItem("characters", characterJson);
      });
    }
  }
  deleteSaved = (name: string) => {
    localStorage.removeItem(name);
    const characters = [...this.state.characters.filter(x => x !== name)];
    characters.sort((a, b) => a < b ? 0 : 1);
    this.setState({ characters });
  }
  updateCharacterJson = (text: string) => {
    try {
      const parsed: BeyondCharacter = JSON.parse(text);
      if (parsed) {
        const charName = parsed.name;
        try {
          localStorage.setItem(charName, text);
        }
        catch (err) {
          console.log("Couldn't save character", err);
        }
        this.setState({ character: parsed }, () => {
          const myView = document.getElementById("beyondFileView");
          if (myView) {
            myView.scrollIntoView({ behavior: "smooth" });
          }
          const characters = [...this.state.characters.filter(x => x !== charName), charName];
          characters.sort((a, b) => a < b ? 0 : 1);
          this.setState({ characters }, () => {
            const characterJson = JSON.stringify(characters);
            try {
              console.log("Saving", characterJson);
              localStorage.setItem("characters", characterJson);
            }
            catch (err) {
              console.log("Couldn't save character list", err);
              localStorage.clear();
              localStorage.setItem("characters", characterJson);
            }
          });
        });
      }
      else {
        alert("ERR1: That is not a valid JSON!");
      }
    }
    catch (err) {
      console.log("ERR2", err);
      alert("ERR2: Something went wrong!");
    }
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
                      <li key={x}>
                        <span onClick={() => this.loadSaved(x)} className="previous-character">{x}</span>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span onClick={() => this.deleteSaved(x)} className="fa fa-trash">&nbsp;</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }
          <Instructions updateCharacterJson={this.updateCharacterJson} />
        </div>
        {
          this.state.character && (
            <div id="beyondFileView">
              <BeyondFileView file={this.state.character} />
            </div>
            // <WindowPortal>
            //   <BeyondFileView file={this.state.file} />
            // </WindowPortal>
          )
        }
      </div>
    );
  }
}

export default App;
