import { Injectable } from "@angular/core"

@Injectable() // not necessary but good to have.
export class LoggerService{
    logMessage(name:string , status:string){
        console.log(`A new User with name ${name} and status ${status} is added to user list`);
    }
}