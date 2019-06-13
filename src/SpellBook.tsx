import React from "react";
import SpellView from "./SpellView";
import {SpellLevelCollection} from "./spellLevel";

export interface ISpellBookProps {
  spells: SpellLevelCollection[];
}

export default class SpellBook extends React.Component<ISpellBookProps> {
  fontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const spellBook = document.getElementById("spellbook");
    const spellTitles = document.querySelectorAll(".spell-title");
    if (spellBook){
      if (e.target.value === "normal"){
        spellBook.classList.remove("ye-olde");
        spellBook.classList.remove("faerie");
        spellTitles.forEach(x => x.classList.remove("faerie"));
      }
      if (e.target.value === "faerie"){
        spellBook.classList.remove("ye-olde");
        spellBook.classList.add("faerie");
        spellTitles.forEach(x => x.classList.add("faerie"));
      }
      if (e.target.value === "ye-olde"){
        spellBook.classList.add("ye-olde");
        spellBook.classList.remove("faerie");
        spellTitles.forEach(x => x.classList.remove("faerie"));
      }
    }
    
  }
  public render() {
    return (
      <div id="spellbook">
        <div>
          <select name="font-selector" id="font-selector" onChange={this.fontChange}>
            <option value="normal">Normal Font</option>
            <option value="faerie">Faerie Font</option>
            <option value="ye-olde">Ye Olde Font</option>
          </select>
        </div>
        <div className="section-to-print">
          {this.props.spells.map(sl => (
            <div key={sl.level}>
              <SpellLevelText level={sl.level} />
              {sl.spells.map(s => (
                <SpellView spell={s} key={s.id} />
                // <div>Test</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}


const SpellLevelText = (props: {level: number}) => {
  const levelName = props.level ? `Level ${props.level}` :  "Cantrips";
  return <h1 className="spell-level-name spell-title">{levelName}</h1>;
};


