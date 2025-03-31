const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const secretKey = "yours-secret-key";

app.get("/", (req, res) => {
  res.send("hello world!");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://manojkumarp2705:12345@cluster0.nlcpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const watchcollections = client.db("watchdata").collection("watches");

    app.post("/upload", async (req, res) => {
      const data = req.body;
      const result = await watchcollections.insertOne(data);
      res.send(result);
    });

    app.get("/watches", async (req, res) => {
      const watchess = watchcollections.find();
      const result = await watchess.toArray();
      res.send(result);
    });

    app.get("/watch/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await watchcollections.findOne(filter);
      res.send(result);
    });

    app.patch("/allproducts/:id", async (req, res) => {
      const id = req.params.id;
      const updateWatchData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateWatchData,
        },
      };
      const options = { upsert: true };
      const result = await watchcollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await watchcollections.deleteOne(filter);
        res.status(200).json({
          success: true,
          message: "data deleted successfully",
          result,
        });
      } catch (error) {
        res.json({ success: false });
      }
    });

    const users = client.db("watchdata").collection("users");

    app.post("/register", async (req, res) => {
      const { username, password, email } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await users.insertOne({
        username,
        email,
        password: hashedPassword,
      });
      console.log("user registered", username);
      res.status(201).json({ success: true, result });
    });

    app.post("/login", async (req, res) => {
      const { username, password } = req.body;

      const alluser = users.find().toArray();
      const user = (await alluser).find((item) => item.username === username);
      if (user) {
        const ispasswordValid = await bcrypt.compare(password, user.password);
        if (ispasswordValid) {
          const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
          res.json({ token });
        } else {
          console.log("invalid password for the user", username);
          res.status(400).json({ message: "Invalid credentials" });
        }
      } else {
        console.log("user not found : ", username);
        res.status(401).json({ message: "Invalid credentials" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`connected to port : http://localhost:${port}`);
});
