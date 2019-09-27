const {
  fetchStreams,
  fetchStream,
  addStream,
  updateStream,
  deleteStream
} = require("./controller");

const routes = [
  {
    method: "GET",
    url: "/api/streams",
    handler: fetchStreams
  },
  {
    method: "GET",
    url: "/api/streams/:id",
    handler: fetchStream
  },
  {
    method: "POST",
    url: "/api/streams",
    handler: addStream
  },
  {
    method: "PATCH",
    url: "/api/streams/:id",
    handler: updateStream
  },
  {
    method: "DELETE",
    url: "/api/streams/:id",
    handler: deleteStream
  }
];

module.exports = routes;
