export async function updateNameInDb(newName) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (newName.toLowerCase().includes("error")) {
    throw new Error("Name cannot contain the word 'error'");
  }
  return newName;
}
