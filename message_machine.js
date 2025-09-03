// message_machine.js
 // Object containing rules for generating motivational messages
const personalRules = {
  I: {
    AM: ["ready for success", "strong enough to keep going", "focused and determined"],
    CAN: ["achieve anything", "learn from every challenge", "turn effort into results"],
    WILL: ["succeed with persistence", "make my dreams real", "grow through consistency"],
    HAVE: ["the courage to grow", "everything I need inside me", "the power to change"],
    MUST: ["believe in myself", "stay focused on my goals", "keep moving forward"]
  },
  You: {
    ARE: ["capable of great things", "stronger than you think", "on the right path"],
    CAN: ["achieve your goals", "change your future", "turn obstacles into opportunities"],
    WILL: ["inspire others", "find success", "see results with persistence"],
    HAVE: ["unique talents", "the strength to overcome challenges", "everything you need within you"],
    MUST: ["believe in yourself", "trust the process", "keep going"]
  },
  We: {
    ARE: ["unstoppable together", "capable of creating change", "stronger as a team"],
    CAN: ["make a difference", "achieve greatness", "build step by step"],
    WILL: ["succeed as a team", "grow stronger together", "reach our goals"],
    HAVE: ["the power to shape our future", "the tools to progress", "what it takes"],
    MUST: ["support each other", "keep building forward", "stay united"]
  },
  They: {
    ARE: ["an inspiration", "examples of resilience", "proof that growth is real"],
    CAN: ["achieve remarkable things", "overcome challenges", "lead by example"],
    WILL: ["shape the future", "reach new heights", "succeed through effort"],
    HAVE: ["endless potential", "the drive to improve", "what they need to win"],
    MUST: ["keep striving", "trust the journey", "stay consistent"]
  },
    He: {
    IS: ["a force of nature", "strong and determined", "focused on success"],
    CAN: ["achieve his dreams", "overcome any obstacle", "turn effort into results"],
    WILL: ["succeed with persistence", "make his goals real", "grow through consistency"],
    HAS: ["the courage to grow", "everything he needs inside him", "the power to change"],
    MUST: ["believe in himself", "stay focused on his goals", "keep moving forward"]
    }
,
// Function to pick a random element from an array
pick(array){
    const index = Math.floor(Math.random() * array.length);
    return array[index];
},
// Function to generate a motivational message from 3 random parts
messageMachine(){
    const starters = ["I", "You", "We", "They", "He"];
    const starter = this.pick(starters);

    const connectors = Object.keys(personalRules[starter]);
    const connector = this.pick(connectors);

    const content = this.pick(personalRules[starter][connector]);
    return `${starter} ${connector} ${content}.`;
}
};
console.log(personalRules.messageMachine());
