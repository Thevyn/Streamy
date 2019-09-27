const { Stream } = require("./models/stream");

// It reads all the items present in database
const fetchStreams = async (req, reply) => {
  try {
    const streams = await Stream.find();
    return streams;
  } catch (err) {
    console.log(err);
  }
};

const fetchStream = async (req, reply) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findOne({ id });
    return stream;
  } catch (err) {
    console.log(err);
  }
};

// It adds an item to database
const addStream = async (req, reply) => {
  try {
    const newStream = new Stream({ ...req.body });
    return newStream.save();
  } catch (err) {
    console.log(err);
  }
};

// It updates the item present in database
const updateStream = async (req, reply) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(title);
    const updatedStream = await Stream.findOneAndUpdate(
      { id },
      { title, description },
      {
        new: true
      }
    );
    return updatedStream;
  } catch (err) {
    console.log(err);
  }
};

// It removes item from database
const deleteStream = async (req, reply) => {
  try {
    const { id } = req.params;
    const stream = await Stream.findOneAndDelete({ id });
    return stream;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchStream,
  fetchStreams,
  addStream,
  updateStream,
  deleteStream
};
