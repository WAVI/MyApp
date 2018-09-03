import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-services-example',
  templateUrl: './services-example.component.html',
  styleUrls: ['./services-example.component.css']
})
export class ServicesExampleComponent implements OnInit {

  
  accounts :{
    name: string,
    status: string
  } [] = []
  
  constructor(private accountsService: AccountService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
