import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.css'
})
export class UserpageComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) { }

  name:string='';
  email:string='';
  src :string = ''
  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.name = params['name'];
      this.email = params['email'];
      this.src = params['avatar'];
        console.log(this.name);
    }
    )

    }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
