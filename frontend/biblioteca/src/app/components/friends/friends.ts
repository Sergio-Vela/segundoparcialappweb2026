import { Component, OnInit, NgZone } from '@angular/core';
import { SocketService } from '../../services/socket-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FriendChange } from '../../interfaces/friend-change';
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent],
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
})


export class Friends implements OnInit{
  constructor(
    private socketService: SocketService,
    private zone: NgZone
  ){}

  displayedColumns = ['id','new','old','table'];
  changes: FriendChange[] = [];
  dataSource = new MatTableDataSource<FriendChange>([]);
  
  ngOnInit(){
    this.socketService.listenToUpdateAmigos((data)=>{
      this.zone.run(() => {
        console.log('Notificacion recibida en frontend: ', data);
        this.changes = [data, ...this.changes];
        this.dataSource.data = this.changes;
        console.log('changes length:', this.changes.length);
      });
    });
  }

}
