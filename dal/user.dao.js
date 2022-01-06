const User = require("./index").db("Facebook").collection("User");

const ObjectId = require("mongodb").ObjectId;

const save = async (data) => {
  return await User.insertOne({
    ...data,
    birthday: moment(data.birthday).format(),
  });
};

const getAll = async () => {
  const cursor = await User.find();
  return cursor.toArray();
}

const getById = async (id) => {
  return await User.findOne({ _id: ObjectId(id) });
}

const update = async (id,data) => {
  const result = await User.replaceOne({ _id: ObjectId(id) },data);
  return result ;
}

const removeById = async (id) => {
  const result = await User.deleteOne({ _id: ObjectId(id) });
  return result;
}

module.exports = { getAll,save, getById, update, removeById };