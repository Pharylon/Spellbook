import { Spell } from "./character";

export default interface SpellLevelCollection {
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

export const unionSpells2 = (...collections: Array<SpellLevelCollection[] | undefined>): SpellLevelCollection[] => {
  const newCollection: SpellLevelCollection[] = [];
  for (let i = 0; i < 9; i++){
    const allSpells: Spell[] = [];
    collections.forEach(slc => {
      if (slc){
        
        slc.forEach(sl => allSpells.push(..sl.spells));
      }
    });
    const aMatch = sc1.find(x => x.level === i);
    const bMatch = sc2.find(x => x.level === i);
    if (aMatch || bMatch){
      const allSpells: Spell[] = [];
      if (aMatch && aMatch.spells.length){
        allSpells.push(...aMatch.spells);
      }
      if (bMatch){
        allSpells.push(...bMatch.spells);
      }
      allSpells.sort((a, b) => a.definition.name > b.definition.name ? 1 : 0);
      newCollection.push({
        level: i,
        spells: allSpells,
      });      
    }
  }
  return newCollection;
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
  spellLevels.forEach(sl => {
    sl.spells.sort((a, b) => a.definition.name > b.definition.name ? 1 : 0);
  });
  return spellLevels;
};

