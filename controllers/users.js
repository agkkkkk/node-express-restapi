import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  // const userId = uuidv4();
  // const usersId = { ...user, id: userId };
  // users.push(usersId);

  users.push({ ...user, id: uuidv4() });

  res.send(`User with name ${user.firstName} is added.`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with id ${id} was removed.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const updateUser = users.find((user) => user.id == id);

  if (firstName) updateUser.firstName = firstName;
  if (lastName) updateUser.lastName = lastName;
  if (age) updateUser.age = age;

  res.send(`User with id ${id} was updated.`);
};
