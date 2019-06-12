import React from "react";
import SpellView from "./SpellView";
import {SpellLevelCollection} from "./spellLevel";

export interface ISpellBookProps {
  spells: SpellLevelCollection[];
}

export default class SpellBook extends React.Component<ISpellBookProps> {
  public render() {
    return (
      <div className="spellbook">
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
  const levelName = props.level || "Cantrips";
  return <h1 className="spell-level-name">{levelName}</h1>;
};


