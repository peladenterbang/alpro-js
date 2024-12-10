"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.updateUser = exports.removeUser = exports.addUser = void 0;
const addUser = (users, newUser) => {
    return [...users, newUser];
};
exports.addUser = addUser;
const removeUser = (users, userId) => {
    return users.filter(user => user.id !== userId);
};
exports.removeUser = removeUser;
const updateUser = (user, updateUser) => {
    return user.map(user => user.id === updateUser.id ? updateUser : user);
};
exports.updateUser = updateUser;
const getUser = (user) => {
    return user;
};
exports.getUser = getUser;
