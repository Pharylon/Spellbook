import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import spellLoader from "./spellLoader";
import BeyondFile, {Spell} from "./character";
import SpellBook from "./Spell";
import { sortSpells, unionSpells } from "./spellLevel";
import "./normalize.css";

interface State {
  file: BeyondFile | undefined;
}

class App extends Component<{}, State> {
  state: State = {
    file: undefined,
  };
  async componentDidMount() {
    const file = await spellLoader.getCharacter();
    this.setState({file});
  }
  getClassSpells = (className: string) => {
    if (!this.state.file){
      return undefined;
    }
    if (this.state.file){
      const myClass = this.state.file.character.classes.find(x => x.definition.name === className);
      if (myClass){
        const myClassSpells = this.state.file.character.classSpells.find(x => x.entityTypeId === myClass.entityTypeId);
        if (myClassSpells){
          return myClassSpells.spells;
        }
      }
    }
  }
  getItemSpells = () => this.state.file && this.state.file.character.spells.item;
  render() {
    const wizardSpells = this.getClassSpells("Wizard");
    if (wizardSpells){ 
      const sorted = sortSpells(wizardSpells);     
      return (
        <SpellBook spells={sorted} />
      );
    }
    else{
      return (
        <div>No spells</div>
      );
    }
  }
}

export default App;
