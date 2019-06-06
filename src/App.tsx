import React, { Component } from "react";
import "./App.css";
import BeyondFile from "./character";
import "./normalize.css";
import BeyondFileView from "./BeyondFileView";
import Instructions from "./Instructions";

interface State {
  file: BeyondFile | undefined;
  hideInstructions: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    file: undefined,
    hideInstructions: false,
  };
  // async componentDidMount() {
  //   const file = await spellLoader.getCharacter();
  //   this.setState({file});
  // }
  updateCharacterJson = (text: string) => {
    try {
      const parsed = JSON.parse(text);
      if (parsed && parsed.character) {
        this.setState({ file: parsed}, () => {
          this.setState({hideInstructions: true});
        });
      }
      else {
        alert("That is not a valid JSON!");
        this.setState({hideInstructions: false});
      }
    }
    catch {
      alert("That is not a valid JSON!");
      this.setState({hideInstructions: false});    
    }
  }
  updateCharacterBlob = (blob: Blob) => {
    console.log("Blob One");
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.result && typeof reader.result === "string"){
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
        <div className={this.state.hideInstructions ? "instructions hide-instructions" : "instructions"}>
          <Instructions updateCharacterJson={this.updateCharacterBlob} />
        </div>
        {
          this.state.file && <BeyondFileView file={this.state.file} />
        }
      </div>
    );
  }
}

export default App;
