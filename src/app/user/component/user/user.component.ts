import { Component, OnInit } from '@angular/core';
import { UserServiceService} from './../../services/user-service.service';
import {} from './../../models/user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {


  }


  getPerson(){


  }

}
