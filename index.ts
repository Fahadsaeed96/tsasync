import { getInput, getUser } from "./utilities";

async function userInput() {
  console.log(`please pick a drink`);
  const input = await getInput();
  console.log(input);
}

userInput();
