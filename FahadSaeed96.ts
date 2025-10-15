import { getInput, getUser } from "./utilities";

async function UserID() {
  console.log(`Please enter your ID`);
  const input = await getInput();
  const ID = Number(input);
  if (ID === 123) {
    console.log("YOU ARE ADMIN :) ");
  } else {
    console.log("GO AWAY T_T ");
  }
}

UserID();
