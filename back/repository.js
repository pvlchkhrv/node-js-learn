const users = [
  {"id": 1, "name": "Pasha"},
  {"id": 2, "name": "Sasha"},
  {"id": 3, "name": "Danik"}
];

const getUsers = () => {
  return users;
}

const addUser = (name) => {
  users.push({name})
}

exports.getUsers = getUsers;
exports.addUser = addUser;
