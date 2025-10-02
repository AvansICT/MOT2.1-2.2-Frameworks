
getUser(function(user) {
  getMessages(user.id, function(messages) {
    saveToFile(messages, function(result) {
      console.log("Alles opgeslagen!");
    }, function(error) {
      console.error("Fout bij opslaan:", error);
    });
  }, function(error) {
    console.error("Fout bij ophalen van berichten:", error);
  });
}, function(error) {
  console.error("Fout bij ophalen van gebruiker:", error);
});


getUser()
  .then(user => getMessages(user.id))
  .then(messages => saveToFile(messages))
  .then(() => console.log("Alles opgeslagen!"))


async function process() : Promise<void> {
  try {
    const user = await getUser();
    const messages = await getMessages(user.id);
    await saveToFile(messages);
    console.log("Alles opgeslagen!");
  } catch (error) {
    console.error("Er ging iets mis:", error);
  }
}
process()


