export function getAlgorithmsDS(db) {
  return async (req, res) => {
    try {
      const accounts = db.collection("algorithmsDS");
      const accountData = await accounts.find().toArray();
      res.json(accountData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error occurred while fetching data");
    }
  };
}
