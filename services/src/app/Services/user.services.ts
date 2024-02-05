import { User } from "../Models/user";

export class UserService{
    users:User[] = [
        new User('Steve Smith', 'male', 'Montly', 'Active'),
        new User('Dwyane Bravo', 'male', 'Yearly', 'Inactive'),
        new User('Kelly Clarkson', 'female', 'Quaterly', 'Active'),
    ]; 

    getAllUsers(){
        return this.users;
    }
    createUser(name:string,gender:string,subType:string,status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
    }
}