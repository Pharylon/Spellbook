import { Spell } from "./character";

export interface SpellLevelCollection {
  level: number;
  spells: Spell[];
}


// export const unionSpells = (sc1: SpellLevelCollection[], sc2: SpellLevelCollection[]): SpellLevelCollection[] => {
//   const newCollection: SpellLevelCollection[] = [];
//   for (let i = 0; i < 9; i++){
//     const aMatch = sc1.find(x => x.level === i);
//     const bMatch = sc2.find(x => x.level === i);
//     if (aMatch || bMatch){
//       const allSpells: Spell[] = [];
//       if (aMatch && aMatch.spells.length){
//         allSpells.push(...aMatch.spells);
//       }
//       if (bMatch){
//         allSpells.push(...bMatch.spells);
//       }
//       allSpells.sort((a, b) => a.definition.name > b.definition.name ? 1 : 0);
//       newCollection.push({
//         level: i,
//         spells: allSpells,
//       });      
//     }
//   }
//   return newCollection;
// };

export const unionSpells = (...collections: Array<SpellLevelCollection[] | undefined>): SpellLevelCollection[] => {
  const allSpells: Spell[] = [];
  collections.forEach(c => {
    if (c){
      c.forEach(slc => allSpells.push(...slc.spells));
    }
  });
  return sortSpells(allSpells);
};

export const sortMultipleSpells = (...collections: Array<Spell[] | undefined>): SpellLevelCollection[] => {
  const allSpells: Spell[] = [];
  collections.forEach(c => {
    if (c){
      const uniqueSpells = c.filter(x => !allSpells.find(y => y.id === x.id));
      allSpells.push(...uniqueSpells);
    }
  });
  LogForDiagnostics(allSpells);
  return sortSpells(allSpells);
};

export const sortSpells = (spells: Spell[]): SpellLevelCollection[] => {
  const spellLevels: SpellLevelCollection[] = [];
  spells.forEach(spell => {
    let collection = spellLevels.find(x => x.level === spell.definition.level);
    if (!collection){
      collection = {
        level: spell.definition.level,
        spells: [spell],
      };
      spellLevels.push(collection);
    }
    else{
      collection.spells.push(spell);
    }    
  });
  spellLevels.sort((a, b) => a.level - b.level);
  spellLevels.forEach(sl => {
    sl.spells.sort((a, b) => a.definition.name > b.definition.name ? 1 : 0);
  });
  return spellLevels;
};


const LogForDiagnostics = (spells: Spell[]) => {
  if (process.env.NODE_ENV === "development"){
    //ACTIVATION INFO;
    const uniqueActivations: Array<{name: string, activation: number | null}> = [];
    spells.forEach(s => {
      const match = uniqueActivations.find(x => x.activation === s.definition.activation.activationType);
      if (!match){
        uniqueActivations.push({name: s.definition.name, activation: s.definition.activation.activationType});
      }
    });
    console.log(uniqueActivations);

    // //AOE Type
    // const uniqueRange: string[] = [];
    // spells.forEach(s => {
    //   const match = uniqueActivations.find(x => x.activation === s.definition.activation.activationType);
    //   if (!match){
    //     uniqueActivations.push(s.definition.range.aoeType);
    //   }
    // });
    // console.log(uniqueActivations);
  }
};
