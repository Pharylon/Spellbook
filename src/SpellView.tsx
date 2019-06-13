import React from "react";
import { Spell } from "./character";

export interface ISpellViewProps {
  spell: Spell;
}

export default class SpellView extends React.Component<ISpellViewProps> {
  public render() {
    return (
      <div className="spell">
        <div className="spell-name spell-title">{this.props.spell.definition.name}</div>
        <div>Components: {getComponents(this.props.spell.definition.components)}</div>
        {
          this.props.spell.definition.componentsDescription && (
            <div>
              <div>Material: {this.props.spell.definition.componentsDescription}</div>
            </div>
          )
        }
        <div dangerouslySetInnerHTML={{__html: this.props.spell.definition.description.trim()}}></div>
      </div>
    );
  }
}


const getComponents = (components: number[]) => {
  const mapped = components.map(x => x === 1 ? "V" : x === 2 ? "S" : "M");
  const joined = mapped.join(", ");
  return joined;
};
