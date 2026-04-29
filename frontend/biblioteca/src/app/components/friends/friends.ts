import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket-service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-friends',
  imports: [MatTableModule, CommonModule],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
})


export class Friends implements OnInit{
  constructor(private socketService: SocketService){}
  changes: any[] = [];
  
  ngOnInit(){
    this.socketService.listenToUpdateAmigos((data)=>{
      console.log('Notificacion recibida: ', data);
      this.changes.unshift(data);
      this.changes = [...this.changes]
    });
  }

}
