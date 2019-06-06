import React from "react";
import { Spell } from "./character";
import SpellView from "./SpellView";
import SpellLevelCollection from "./spellLevel";

export interface ISpellBookProps {
  spells: SpellLevelCollection[];
}

export default class SpellBook extends React.Component<ISpellBookProps> {
  public render() {
    console.log(this.props.spells);
    return (
      <div>
        {this.props.spells.map(sl => (
          <div>
            <h1>Level: {sl.level}</h1>
            {sl.spells.map(s => (
              <SpellView spell={s} key={s.id} />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
