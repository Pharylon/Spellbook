import React from "react";
import BeyondFile from "./character";
import { sortMultipleSpells } from "./spellLevel";
import SpellBook from "./SpellBook";

interface IBeyondFileView {
  file: BeyondFile;
}

class BeyondFileView extends React.PureComponent<IBeyondFileView> {
  getClassSpells = (className: string) => {
    const myClass = this.props.file.character.classes.find(x => x.definition.name === className);
    if (myClass){
      const myClassSpells = this.props.file.character.classSpells.find(x => x.entityTypeId === myClass.entityTypeId);
      if (myClassSpells){
        return myClassSpells.spells;
      }
    }
  }
  render(){
    const wizardSpells = this.getClassSpells("Wizard");
    const itemSpells = this.props.file.character.spells.item;
    const featSpells = this.props.file.character.spells.feat;
    const spellsByLevel = sortMultipleSpells(wizardSpells, itemSpells, featSpells);
    if (spellsByLevel.find(x => x.spells.length > 0)){ 
      return (
        <SpellBook spells={spellsByLevel} />
      );
    }
    else{
      return (
        <div>No spells</div>
      );
    }
  }
}

export default BeyondFileView;
