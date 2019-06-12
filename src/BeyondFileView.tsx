import React from "react";
import BeyondFile, { Spell, BeyondCharacter } from "./character";
import { sortMultipleSpells } from "./spellLevel";
import SpellBook from "./SpellBook";

interface IBeyondFileView {
  file: BeyondCharacter;
}

class BeyondFileView extends React.PureComponent<IBeyondFileView> {
  getClassSpells = (className: string) => {
    const myClass = this.props.file.classes.find(x => x.definition.name === className);
    if (myClass){
      const myClassSpells = this.props.file.classSpells.find(x => x.entityTypeId === myClass.entityTypeId);
      if (myClassSpells){
        return myClassSpells.spells;
      }
    }
  }
  getAllClassSpells = () => {
    const allClassSpells: Spell[] = [];
    this.props.file.classSpells.forEach(cs => allClassSpells.push(...cs.spells));
    return allClassSpells;
  }
  render(){
    //const wizardSpells = this.getClassSpells("Wizard");
    const classSpells = this.getAllClassSpells();
    const itemSpells = this.props.file.spells.item;
    const featSpells = this.props.file.spells.feat;
    const spellsByLevel = sortMultipleSpells(classSpells, itemSpells, featSpells);
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
