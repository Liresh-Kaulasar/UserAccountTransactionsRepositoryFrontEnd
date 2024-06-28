import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsService } from '../services/account-details.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../interfaces/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {
  accountList : Account[] =[];
  personCode : Number = 0;

  @Input() personAccountCode!:Number;

  constructor(private route: ActivatedRoute, private router: Router, private accountDetailsService: AccountDetailsService){
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personCode = parseInt(params['id']);
      console.log("This is the id => "+this.personCode);
      this.getAccountDetailsByPersonCode();
    });
  }

  getAccountDetailsByPersonCode():void{
    this.accountDetailsService.getAccountDetailsByPersonCode(this.personCode).subscribe(response =>{
      console.log(response);
      this.accountList = response as Account[];
    });
  }

  openAccountDetails(accountCode:Number):void{
    this.router.navigate(['account-details',accountCode,this.personAccountCode])
  }

}
