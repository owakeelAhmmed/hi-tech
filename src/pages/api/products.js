const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://owakeelahmmed:vN3bvP6mQ364N1do@cluster0.x9mq9p5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const productsCollection = client.db("hi-tech").collection("products");

    if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
  }
}

export default run;
