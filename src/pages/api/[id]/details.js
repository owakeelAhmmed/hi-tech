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

export async function GET(req, res, { params }) {
  try {
    await client.connect();

    const productsCollection = client.db("hi-tech").collection("products");

    const { id } = params;
    const products = await productsCollection.findOne({
      _id: ObjectId(id),
    });
    res.send({ message: "success", status: 200, data: products });
  } finally {
  }
}

export default run;
