const data = [];

const Users = {
  create: user => {
    data.push({
      id: data.length + 1,
      ...user,
    });
  },

  read: () => {
    return data;
  },

  readOne: id => {
    return data.find(user => user.id == id) || null;
  },
};

export default Users;
