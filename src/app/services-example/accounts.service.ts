import { EventEmitter } from "@angular/core";


export class AccountService {

    accounts = [
        {
            name: 'Iustin',
            status: 'active'
        }
    ]

    statusUpdated = new EventEmitter<string>();

    onAddAccount(name: string, status: string){
        this.accounts.push({
            name: name,
            status: status
        })
    }

    onUpdateAccount(id: number, newStatus: string){
        this.accounts[id].status = newStatus;
        this.statusUpdated.emit(newStatus);
    }

}