(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,l,o,i,c,s,u,p,d,m,f,h,v,g=a(0),y=a.n(g),b=a(10),E=a.n(b),S=(a(17),a(6)),C=a(1),w=a(2),O=a(4),T=a(3),k=a(5),j=(a(18),a(19),function(e){var t=[];return e.forEach(function(e){var a=t.find(function(t){return t.level===e.definition.level});a?a.spells.push(e):(a={level:e.definition.level,spells:[e]},t.push(a))}),t.sort(function(e,t){return e.level-t.level}),t.forEach(function(e){e.spells.sort(function(e,t){return e.definition.name>t.definition.name?1:0})}),t}),N=function(e){};!function(e){e.AgainstPlantsAndUndeadCreatures="Against plants and undead creatures",e.Darts="Darts",e.Empty=""}(n||(n={})),function(e){e.Characterlevel="characterlevel",e.Spelllevel="spelllevel",e.Spellscale="spellscale"}(r||(r={})),function(e){e.Concentration="Concentration",e.Instantaneous="Instantaneous",e.Time="Time",e.UntilDispelled="Until Dispelled",e.UntilDispelledOrTriggered="Until Dispelled or Triggered"}(l||(l={})),function(e){e.Day="Day",e.Hour="Hour",e.Minute="Minute",e.Round="Round"}(o||(o={})),function(e){e.Cone="Cone",e.Cube="Cube",e.Cylinder="Cylinder",e.Sphere="Sphere",e.Square="Square"}(i||(i={})),function(e){e.Ranged="Ranged",e.Self="Self",e.Touch="Touch",e.Unlimited="Unlimited",e.Sight="Sight"}(c||(c={})),function(e){e.DruidSorcererWarlockOrWizard="Druid, Sorcerer, Warlock, or Wizard",e.Empty=""}(s||(s={})),function(e){e.AgainstBeingCharmedAndMagicCanTPutYouToSleep="against being charmed, and magic can\u2019t put you to sleep",e.ClimbingWhileKnotted="Climbing While Knotted",e.Empty="",e.SoundOnly="Sound Only",e.WhileStaffIsHeld="While Staff is Held"}(u||(u={})),function(e){e.Common="Common",e.Rare="Rare",e.Uncommon="Uncommon",e.VeryRare="Very Rare"}(p||(p={})),function(e){e.Fefefe="#FEFEFE"}(d||(d={})),function(e){e.ClassThemes="Class Themes"}(m||(m={})),function(e){e.ClassBackdrops="Class Backdrops"}(f||(f={})),function(e){e.AbilityScore="Ability Score",e.CustomValue="Custom Value",e.Proficiency="Proficiency",e.Race="Race",e.Size="Size",e.Subrace="Subrace"}(h||(h={})),function(e){e.AbilityScore="ability-score",e.CustomValue="custom-value",e.Proficiency="proficiency",e.Race="race",e.Size="size",e.Subrace="subrace"}(v||(v={}));var I=function(e){function t(){return Object(C.a)(this,t),Object(O.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"spell"},y.a.createElement("h2",{className:"spell-name spell-title"},this.props.spell.definition.name),y.a.createElement("div",null,"Casting Time: ",R(this.props.spell.definition.activation)),y.a.createElement("div",null,"Range: ",U(this.props.spell.definition)),y.a.createElement("div",null,"Duration: ",A(this.props.spell.definition)),y.a.createElement("div",null,"Components: ",V(this.props.spell.definition.components)),this.props.spell.definition.requiresSavingThrow&&y.a.createElement("div",null,"Save: ",D(this.props.spell.definition.saveDcAbilityId)),this.props.spell.definition.componentsDescription&&y.a.createElement("div",null,y.a.createElement("div",null,"Material: ",this.props.spell.definition.componentsDescription)),y.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.spell.definition.description.trim()}}))}}]),t}(y.a.Component),D=function(e){return 1===e?"Strength":2===e?"Dexterity":3===e?"Constitution":4===e?"Intelligence":5===e?"Wisdom":6===e?"Charisma":void console.log("Unknown Save",e)},V=function(e){return e.map(function(e){return 1===e?"V":2===e?"S":"M"}).join(", ")},A=function(e){var t=e.duration;return t.durationType===l.Instantaneous?"Instantaneous":t.durationType===l.UntilDispelled?l.UntilDispelled:t.durationType===l.UntilDispelledOrTriggered?l.UntilDispelledOrTriggered:t.durationType===l.Concentration?"".concat(t.durationInterval," ").concat(t.durationUnit," (Concentration)"):t.durationType===l.Time?"".concat(t.durationInterval," ").concat(t.durationUnit):void console.log("Unknown Duration",t,e.name)},U=function(e){var t=e.range;return t.origin!==c.Self||t.rangeValue||t.aoeValue?t.origin===c.Unlimited?"Unlimited":t.origin===c.Touch?"Touch":t.origin===c.Sight?"Sight":t.origin===c.Self&&t.aoeValue&&t.aoeType?"Self (".concat(t.aoeValue," ").concat(t.aoeType,")"):t.rangeValue&&t.aoeValue&&t.aoeType?"".concat(t.rangeValue," ft (").concat(t.aoeValue," ").concat(t.aoeType,")"):!t.rangeValue||t.aoeValue||t.aoeType?t.rangeValue&&t.aoeType?"".concat(t.rangeValue," ft (").concat(t.aoeValue," ").concat(t.aoeType,")"):t.rangeValue?(console.log("Weird Range",t,e.name),"".concat(t.rangeValue," ft)")):void console.log("Unknown Range",t,e.name):"".concat(t.rangeValue," ft"):"Self"},R=function(e){var t=e.activationTime||0;if(1===e.activationType)return"".concat(t," action");if(3===e.activationType)return"".concat(t," bonus action");if(4===e.activationType)return"".concat(t," reaction");if(6===e.activationType){var a=1===t?"minute":"minutes";return"".concat(t," ").concat(a)}if(7===e.activationType){var n=1===t?"hour":"hours";return"".concat(t," ").concat(n)}return 8===e.activationType?"Special":t.toString()},x=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).fontChange=function(e){var t=document.getElementById("spellbook"),a=document.querySelectorAll(".spell-title");t&&("normal"===e.target.value&&(t.classList.remove("ye-olde"),t.classList.remove("faerie"),a.forEach(function(e){return e.classList.remove("faerie")})),"faerie"===e.target.value&&(t.classList.remove("ye-olde"),t.classList.add("faerie"),a.forEach(function(e){return e.classList.add("faerie")})),"ye-olde"===e.target.value&&(t.classList.add("ye-olde"),t.classList.remove("faerie"),a.forEach(function(e){return e.classList.remove("faerie")})))},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return y.a.createElement("div",{id:"spellbook"},y.a.createElement("div",null,y.a.createElement("select",{name:"font-selector",id:"font-selector",onChange:this.fontChange},y.a.createElement("option",{value:"normal"},"Normal Font"),y.a.createElement("option",{value:"faerie"},"Faerie Font"),y.a.createElement("option",{value:"ye-olde"},"Ye Olde Font"))),y.a.createElement("div",{className:"section-to-print"},this.props.spells.map(function(e){return y.a.createElement("div",{key:e.level},y.a.createElement(L,{level:e.level}),e.spells.map(function(e){return y.a.createElement(I,{spell:e,key:e.id})}))})))}}]),t}(y.a.Component),L=function(e){var t=e.level?"Level ".concat(e.level):"Cantrips";return y.a.createElement("h1",{className:"spell-level-name spell-title"},t)},F=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).getClassSpells=function(e){var t=a.props.file.classes.find(function(t){return t.definition.name===e});if(t){var n=a.props.file.classSpells.find(function(e){return e.entityTypeId===t.entityTypeId});if(n)return n.spells}},a.getAllClassSpells=function(){var e=[];return a.props.file.classSpells.forEach(function(t){return e.push.apply(e,Object(S.a)(t.spells))}),e},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=function(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach(function(t){if(t){var a=t.filter(function(t){return!e.find(function(e){return e.id===t.id})});e.push.apply(e,Object(S.a)(a))}}),N(e),j(e)}(this.getAllClassSpells(),this.props.file.spells.item,this.props.file.spells.feat);return e.find(function(e){return e.spells.length>0})?y.a.createElement(x,{spells:e}):y.a.createElement("div",null,"No spells")}}]),t}(y.a.PureComponent),J=a(7),B=a.n(J),P=a(8),W=(a(21),a(22),function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=Object(P.a)(B.a.mark(function e(t){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.stopPropagation(),a.props.onClick();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.working,a=this.props.disabled||!1,n=this.props.className||"button";return g.createElement("button",{disabled:a,className:n+" load-button",onClick:function(t){return e.handleClick(t)}},g.createElement("div",{style:{display:t?"none":""}},this.props.iconClass&&g.createElement("span",{className:this.props.iconClass},"\xa0"),this.props.text),g.createElement("div",{style:{display:t?"":"none"}},g.createElement("div",{className:"lds-ellipsis"},g.createElement("div",null),g.createElement("div",null),g.createElement("div",null),g.createElement("div",null))))}}]),t}(g.PureComponent)),z=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,characterNumber:""},a.updateCharacterNumber=function(e){parseInt(e.target.value,10)>0&&a.setState({characterNumber:e.target.value})},a.getCharacterJson=Object(P.a)(B.a.mark(function e(){var t,n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t="https://dndbeyond.azurewebsites.net/api/BeyondFile?id="+a.state.characterNumber,e.prev=2,e.next=5,fetch(t);case 5:if(200===(n=e.sent).status){e.next=9;break}return alert("Error fetching Beyond File"),e.abrupt("return");case 9:return e.next=11,n.text();case 11:r=e.sent,a.props.updateCharacterJson(r),a.setState({loading:!1}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),a.setState({loading:!1}),alert("Exception fetching Beyond File");case 20:case"end":return e.stop()}},e,null,[[2,16]])})),a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"steps"},y.a.createElement("div",{className:"step"},y.a.createElement("div",{className:"step-title"},"Load A Character"),y.a.createElement("div",null,"Go to ",y.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.dndbeyond.com/my-characters"},"your character page"),' on D&D Beyond, click "View" on the character whose spells you wish to print. Look at the URL in your browser address bar. It should end in a number. Enter that number below. Note that the character must be public.'),y.a.createElement("div",{style:{marginTop:"10px",marginBottom:"10px"}},"For instance if your address was as follows:",y.a.createElement("div",null,y.a.createElement("span",{className:"exampleAddress"},y.a.createElement("span",null,"https://www.dndbeyond.com/profile/Example/characters","/"),y.a.createElement("span",{className:"highlighted"},"1234567"))),y.a.createElement("div",null,'Then you would enter "1234567"')),y.a.createElement("form",null,y.a.createElement("input",{placeholder:"000000",type:"text",value:this.state.characterNumber,onChange:this.updateCharacterNumber}),y.a.createElement(W,{text:"Load Character",className:"done-button",working:this.state.loading,onClick:this.getCharacterJson}))))}}]),t}(y.a.Component),M=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(O.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).state={character:void 0,characters:[]},a.loadSaved=function(e){var t=localStorage.getItem(e);if(t)a.updateCharacterJson(t);else{alert("Sorry, could not load character from memory.");var n=Object(S.a)(a.state.characters.filter(function(t){return t!==e}));n.sort(function(e,t){return e<t?0:1}),a.setState({characters:n},function(){var e=JSON.stringify(n);localStorage.setItem("characters",e)})}},a.deleteSaved=function(e){localStorage.removeItem(e);var t=Object(S.a)(a.state.characters.filter(function(t){return t!==e}));t.sort(function(e,t){return e<t?0:1}),a.setState({characters:t})},a.updateCharacterJson=function(e){try{var t=JSON.parse(e);if(t){var n=t.name;try{localStorage.setItem(n,e)}catch(r){console.log("Couldn't save character",r)}a.setState({character:t},function(){var e=document.getElementById("beyondFileView");e&&e.scrollIntoView({behavior:"smooth"});var t=[].concat(Object(S.a)(a.state.characters.filter(function(e){return e!==n})),[n]);t.sort(function(e,t){return e<t?0:1}),a.setState({characters:t},function(){var e=JSON.stringify(t);try{console.log("Saving",e),localStorage.setItem("characters",e)}catch(r){console.log("Couldn't save character list",r),localStorage.clear(),localStorage.setItem("characters",e)}})})}else alert("ERR1: That is not a valid JSON!")}catch(r){console.log("ERR2",r),alert("ERR2: Something went wrong!")}},a}return Object(k.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("characters");if(e)try{var t=JSON.parse(e);0,this.setState({characters:t})}catch(a){localStorage.clear(),console.log("Something wrong with JSON",e)}}},{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"main"},y.a.createElement("h1",null,"D&D Beyond Spell Printer"),y.a.createElement("div",{className:"about"},y.a.createElement("p",null,"I made this site because even though I love D&D Beyond, I'm old-school and I like to print out my character. Unfortunately, the print out doesn't include spell descriptions.",y.a.createElement("span",{role:"img","aria-label":"Frowning face"},"\ud83d\ude41")),y.a.createElement("p",null,"And sure, you can look up those descriptions in the app, which is pretty convenient, but the app doesn't include your custom/homebrew spells. So, I decided to make this site to help me out. This will get you a big list of all your spells for easy printing! Don't worry, it's all safe. I don't need your password or anything. ",y.a.createElement("span",{role:"img","aria-label":"Happy face"},"\ud83d\ude42"))),y.a.createElement("div",{className:"beta"},y.a.createElement("span",null,"This page is in Beta! If you find a problem, please "),y.a.createElement("a",{href:"https://github.com/Pharylon/Spellbook/issues"},"submit a bug report.")," Thanks!"),y.a.createElement("div",{className:"instructions"},!!this.state.characters.length&&y.a.createElement("div",{className:"steps"},y.a.createElement("div",{className:"step"},y.a.createElement("div",{className:"step-title"},"Load A previously Saved Character"),y.a.createElement("ul",null,this.state.characters.map(function(t){return y.a.createElement("li",{key:t},y.a.createElement("span",{onClick:function(){return e.loadSaved(t)},className:"previous-character"},t),y.a.createElement("span",null,"\xa0\xa0\xa0"),y.a.createElement("span",{onClick:function(){return e.deleteSaved(t)},className:"fa fa-trash"},"\xa0"))})))),y.a.createElement(z,{updateCharacterJson:this.updateCharacterJson})),this.state.character&&y.a.createElement("div",{id:"beyondFileView"},y.a.createElement(F,{file:this.state.character})))}}]),t}(g.Component);E.a.render(y.a.createElement(M,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1aab31d5.chunk.js.map