
#### index.js

```javascript
#!/usr/bin/env node

const whispers = [
  "The echoes of the past still wander the ruins.",
  "A name lost to time is waiting to be spoken again.",
  "The stars do not shine the way they once did.",
  "A door beneath the mountain should never be opened.",
  "A shadow walks among us, unseen but ever-present."
];

function getRandomWhisper() {
  return whispers[Math.floor(Math.random() * whispers.length)];
}

console.log("Welcome to Whispers of the Forgotten!");
console.log("Here is a cryptic whisper from the unknown:");
console.log(getRandomWhisper());
