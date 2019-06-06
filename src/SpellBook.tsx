import React from "react";
import SpellView from "./SpellView";
import {SpellLevelCollection} from "./spellLevel";

export interface ISpellBookProps {
  spells: SpellLevelCollection[];
}

export default class SpellBook extends React.Component<ISpellBookProps> {
  public render() {
    return (
      <div>
        {this.props.spells.map(sl => (
          <div key={sl.level}>
            {
              sl.level ? <h1>Level: {sl.level}</h1> : <h1>Cantrips</h1>
            }
            {sl.spells.map(s => (
              <SpellView spell={s} key={s.id} />
              // <div>Test</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}


