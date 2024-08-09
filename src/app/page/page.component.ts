import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DasboardDataService } from '../../services/dasboard-data.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [FormsModule,MatPaginatorModule,HeaderComponent,FooterComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {

  // Pages data
  data: any;
  pages : any = [];
  users: User[] = [];



  constructor(private dasboardDataService: DasboardDataService ,private router:Router) {}

  ngOnInit() {
    this.getpageData(); // for the first page display
  }


  // Get page data after passing the page no
  getpageData(page_no:number = 1) {
    this.dasboardDataService.fetchDashboardData(page_no).subscribe({
      next: (res) => {
        this.data = res;
        this.pages = this.data['data'];

        this.users = this.pages;
        console.log(this.users);
      }
    })

  }

  // Update data to page 1
  renderPageOne() {
      this.getpageData(1)
  }

  // Update data  of page 2
  renderPageTwo() {
      this.getpageData(2)
  }

  singleUser: any;

  // User Details
  openUserDetails(id:number) {
    this.dasboardDataService.getUserData(id).subscribe({
      next: (res) => {
        this.singleUser = res['data'];
        this.router.navigate(['/user'],{queryParams: {name:this.singleUser.first_name+' '+ this.singleUser.last_name ,email:this.singleUser.email,avatar:this.singleUser.avatar }});
      }
    })
  }

}
