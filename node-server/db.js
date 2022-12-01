const Users = {};

Users.data = [];

Users.create = user => {
  Users.data.push({
    id: Users.data.length + 1,
    name: user.name,
  });
};

Users.read = () => {
  return Users.data;
};

Users.readOne = id => {
  return Users.data.find(user => user.id === id) || { error: 'User not found' };
};

export default Users;
