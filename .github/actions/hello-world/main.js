const core = require('@actions/core');

const greetings = [
  'first-greeting',
  'second-greeting',
  'third-greeting'
].map(key => core.getInput(key));

greetings.filter(Boolean).forEach(value => {
  console.log(`Hello ${value}`);
});
