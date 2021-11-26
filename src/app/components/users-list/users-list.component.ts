import { Component, OnInit } from '@angular/core';

import { UsersService } from './../../services/users.service';

import { User } from './../../models/users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  limit!: number;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    
  }

  fechUsers() {
    console.log(this.limit);
    this.usersService.getAllUsers(this.limit)
    .subscribe(users => {
      //La data que llega del subscribe sabe que es un observable nativo de array por lo que no tiene que ser tratado como data y se puede
      //asignar a nuestra lista de usuarios ya que lo tenemos tipado.
      this.users = users;
    });
  }

}
