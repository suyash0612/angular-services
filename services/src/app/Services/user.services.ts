import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/user";
import { LoggerService } from "./logger.service";

@Injectable()  // used to inject services on a service. Good to add injectable on all services acc to new angular
export class UserService{
    users:User[] = [
        new User('Steve Smith', 'male', 'Montly', 'Active'),
        new User('Dwyane Bravo', 'male', 'Yearly', 'Inactive'),
        new User('Kelly Clarkson', 'female', 'Quaterly', 'Active'),
    ]; 

    constructor(private logger : LoggerService){}

    onUserDetailsClicked : EventEmitter<User> = new EventEmitter<User>();

    onShowUserDetails(user:User){
        this.onUserDetailsClicked.emit(user)
    }

    getAllUsers(){
        return this.users;
    }
    createUser(name:string,gender:string,subType:string,status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
        // let logger = new LoggerService();
        this.logger.logMessage(name,status);
    }
}