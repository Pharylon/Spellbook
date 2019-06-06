import React, { Fragment } from "react";
import { Spell } from "./character";

export interface ISpellViewProps {
  spell: Spell;
}

export default class SpellView extends React.Component<ISpellViewProps> {
  public render() {
    return (
      <div className="spell">
        <div className="spell-name">{this.props.spell.definition.name}</div>
        <div>Components: {this.props.spell.definition.components}</div>
        <div>Material: {this.props.spell.definition.componentsDescription}</div>
        <div dangerouslySetInnerHTML={{__html: this.props.spell.definition.description}}></div>
      </div>
    );
  }
}
