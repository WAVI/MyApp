import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  @Input() account:  {
    name: string,
    status: string
  }
  @Input() id: number;

  constructor(private accountsService: AccountService) {
    
    this.accountsService.statusUpdated
      .subscribe(
        (status: string) => alert(`new Status: ${status}`)
      )
   }

  ngOnInit() {
  }

  onSetTo(newStatus: string){
    this.accountsService.onUpdateAccount(this.id, newStatus);
  }

}
