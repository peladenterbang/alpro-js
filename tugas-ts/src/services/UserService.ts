import { User } from "../models/user";

export const addUser = (users: User[], newUser: User): User[] => {
    return[...users, newUser];
}

export const removeUser = (users: User[], userId: number): User[] =>{
    return users.filter(user => user.id !== userId);
}

export const updateUser = (user: User[], updateUser: User): User[] => {
    return user.map(user => 
        user.id === updateUser.id ? updateUser : user
    );
};

export const getUser = (user: User[]): User[] => {
    return user;
};