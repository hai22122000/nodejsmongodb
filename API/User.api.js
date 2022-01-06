const { getAll,save, getById, update, removeById} = require("../dal/user.dao");
  
const createUser = async (data) => {
  return await save(data);
};

  const getUsers = async () => {
    return await getAll();
  }
  
  const getUser = async (id) => {
    return await getById(id);
  }
  
  const deleteUser = async (id) => {
    return await removeById(id);
  }
  
  const updateUser = async (id, data) => {
  return await update(id, data);
};

  
  module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
  }