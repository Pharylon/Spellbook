import BeyondFile, { Spell } from "./character.js";

const spellLoader = {
  // getCharacter(): void {
  //   console.log("TEst");
  // },
  

  async getCharacter(): Promise<BeyondFile> {
    try{
      const response = await fetch("./denaliah.json");
      // const response = await fetch(
      //   "https://www.dndbeyond.com/profile/Pharylon/characters/builder/3312827/json", 
      //   {credentials: "include"});
      if (response.status === 200){
        const beyondFile = await response.json();
        return beyondFile;
      }
      else{
        console.log("ERR 1", response.status);
        throw Error("Uh-oh");
      }
    }
    catch (err){
      throw err;
    }    
  },

};

export default spellLoader;
