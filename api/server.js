const mongoose = require("mongoose");
const fastify = require("fastify")();
const routes = require("./routes");

const {
  parsed: { MONGO_ATLAS_PW }
} = require("dotenv").config();

fastify.register(require("fastify-cors"), {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-Type",
    "Authorization"
  ],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"]
});

//connect to mongodb atlas
mongoose
  .connect(
    `mongodb+srv://admin:${MONGO_ATLAS_PW}@cluster0-of6c5.mongodb.net/test?retryWrites=true&w=majority`,
    { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(e => console.log("MongoDB could not be connected due to ", e));

mongoose.set("useCreateIndex", true);

//handles GET / request
fastify.get("/", async (request, reply) => {
  try {
    return { message: "lol" };
  } catch (e) {
    console.log(e);
  }
});

//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route));

//launching server at port : 3000 in local environment
fastify.listen(process.env.PORT || 3001, "0.0.0.0", err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`);
});
