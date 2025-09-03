// message_machine.js
  // This module generates motivational messages by combining random elements from predefined arrays.
    //The arrays contain different parts of a message, and the function constructs a complete message by selecting one element from each array.
const arrays ={
     _starters : [
  "I","You","He","She","We"
] ,
_iConnectors : ["can","turn","am","inspire","may","will"]
,
_youConnectors : ["can","turn","are","inspire","may","will","build"] ,

_weConnectors : ["can","turn","are","inspire","may","will","rise","decide"] ,

_heSheConnectors : ["shapes","creates","is","decide","fuels","comes","will","never","sometimes"] ,

_contents : [
  "achieve anything if I stay consistent",
  "every challenge into an opportunity to grow",
  "stronger than my doubts",
  "already have everything it takes to succeed",
  "closer to your goals than you think",
  "turn today into the day everything changes",
  "me, but they will never define me",
  "doubt, but they can’t stop me",
  "results when I refuse to quit",
  "higher when we work together",
  "success step by step",
  "stronger than any obstacle",
  "dreams are worth the effort",
  "mindset shapes my reality",
  "hard work today creates my success tomorrow",
  "determination is your greatest weapon",
  "potential is limitless when you believe in yourself",
  "actions today decide your future",
  "vision fuels our journey",
  "strength comes from persistence and unity"
],
firstConnection(){
    let firstConnection = ``;
 const randomStarter = this._starters[Math.floor(Math.random() * this._starters.length)];
    if (randomStarter === "I") {
        const randomConnector = this._iConnectors[Math.floor(Math.random() * this._iConnectors.length)];
         return firstConnection = `${randomStarter} ${randomConnector}`;
}
else if (randomStarter === "You") {
        const randomConnector = this._youConnectors[Math.floor(Math.random() * this._youConnectors.length)];
         return firstConnection = `${randomStarter} ${randomConnector}`;
}
else if (randomStarter === "We") {
        const randomConnector = this._weConnectors[Math.floor(Math.random() * this._weConnectors.length)];
        return firstConnection = `${randomStarter} ${randomConnector}`;
}
else if (randomStarter === "he" || randomStarter === "She") {
        const randomConnector = this._heSheConnectors[Math.floor(Math.random() * this._heSheConnectors.length)];
        return firstConnection = `${randomStarter} ${randomConnector}`;
}
return firstConnection;
},

 messageMachine() {
    const randomStarter = this._starters[Math.floor(Math.random() * this._starters.length)];
    const randomConnector = this._connectors[Math.floor(Math.random() * this._connectors.length)];
    const randomContent = this._contents[Math.floor(Math.random() * this._contents.length)];
    return `${randomStarter} ${randomConnector} ${randomContent}.`;

}
}
console.log(arrays.firstConnection());