import { Type } from 'typescript';
import { User } from '../models/User'
export class userService{
    
    /**
     *
     */
    constructor() {
        
    }; 

    public GetUserByID(Id: Int16Array) {
        return new User();
    }

    public CreateUser(user:User) : User{
        
        return user;
    }
}