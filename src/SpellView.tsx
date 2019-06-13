import React from "react";
import { Spell, Activation, DefinitionRange, Origin, ItemDefinition, Duration, DurationType } from "./character";

export interface ISpellViewProps {
  spell: Spell;
}

export default class SpellView extends React.Component<ISpellViewProps> {
  public render() {
    return (
      <div className="spell">
        <div className="spell-name spell-title">{this.props.spell.definition.name}</div>
        <div>Casting Time: {getCastingTime(this.props.spell.definition.activation)}</div>
        <div>Range: {getRange(this.props.spell.definition)}</div>
        <div>Duration: {getDuration(this.props.spell.definition)}</div>
        <div>Components: {getComponents(this.props.spell.definition.components)}</div>
        {
          this.props.spell.definition.requiresSavingThrow && (
            <div>Save: {getSave(this.props.spell.definition.saveDcAbilityId)}</div>
          )
        }
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

const getSave = (save: number | null) => {
  if (save === 1){
    return "Strength";
  }
  if (save === 2){
    return "Dexterity";
  }
  if (save === 3){
    return "Constitution";
  }
  if (save === 4){
    return "Intelligence";
  }
  if (save === 5){
    return "Wisdom";
  }
  if (save === 6){
    return "Charisma";
  }
  console.log("Unknown Save", save);
};

const getComponents = (components: number[]) => {
  const mapped = components.map(x => x === 1 ? "V" : x === 2 ? "S" : "M");
  const joined = mapped.join(", ");
  return joined;
};

const getDuration = (spell: ItemDefinition) => {
  const duration: Duration = spell.duration;
  if (duration.durationType === DurationType.Instantaneous){
    return "Instantaneous";
  }
  if (duration.durationType === DurationType.UntilDispelled){
    return DurationType.UntilDispelled;
  }
  if (duration.durationType === DurationType.UntilDispelledOrTriggered){
    return DurationType.UntilDispelledOrTriggered;
  }
  if (duration.durationType === DurationType.Concentration){
    return `${duration.durationInterval} ${duration.durationUnit} (Concentration)`;
  }
  if (duration.durationType === DurationType.Time){
    return `${duration.durationInterval} ${duration.durationUnit}`;
  }
  console.log("Unknown Duration", duration, spell.name);
}; 

const getRange = (spell: ItemDefinition) => {
  const range: DefinitionRange = spell.range;
  if (range.origin === Origin.Self && !range.rangeValue && !range.aoeValue){
    return "Self";
  }
  else if (range.origin === Origin.Unlimited){
    return "Unlimited";
  }
  else if (range.origin === Origin.Touch){
    return "Touch";
  }
  else if (range.origin === Origin.Sight){
    return "Sight";
  }
  else if (range.origin === Origin.Self && range.aoeValue && range.aoeType){
    return `Self (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue && range.aoeValue && range.aoeType){
    return `${range.rangeValue} ft (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue && !range.aoeValue && !range.aoeType){
    return `${range.rangeValue} ft)`;
  }
  else if (range.rangeValue && range.aoeType){
    return `${range.rangeValue} ft (${range.aoeValue} ${range.aoeType})`;
  }
  else if (range.rangeValue){
    console.log("Weird Range", range, spell.name);
    return `${range.rangeValue} ft)`;
  }
  console.log("Unknown Range", range, spell.name);
}; 



const getCastingTime = (activation: Activation) => {
  const timeAmount = (activation.activationTime || 0);
  if (activation.activationType === 1){
    return `${timeAmount} action`;
  }
  if (activation.activationType === 3){
    return `${timeAmount} bonus action`;
  }
  if (activation.activationType === 4){
    return `${timeAmount} reaction`;
  }
  if (activation.activationType === 6){
    const timeIncrement = timeAmount === 1 ? "minute" : "minutes";
    return `${timeAmount} ${timeIncrement}`;
  }
  if (activation.activationType === 7){
    const timeIncrement = timeAmount === 1 ? "hour" : "hours";
    return `${timeAmount} ${timeIncrement}`;
  }
  if (activation.activationType === 8){
    return "Special";
  }
  return timeAmount.toString();
};
