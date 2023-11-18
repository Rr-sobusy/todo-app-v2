/**
 * * This function is use for generating a random ID
 */

export function generateId(): string {
  let generatedId = "";

  const idLength = 8;

  //* available characters
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  for (let i = 0; i < idLength; i++) {
    generatedId +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  return generatedId;
}
