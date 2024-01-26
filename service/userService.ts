import { Type } from 'typescript';
import { User } from '../models/User'
import { UserRepository } from '../repository/userRepository';
export class userService{

    user :  UserRepository 
    public GetUserByID(Id: Int16Array) {
        this.user.getAlluser

        return new User();
    }

    public CreateUser(user:User) : User{
        
        return user;
    }
}   