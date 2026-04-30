import { Component, OnInit, NgZone } from '@angular/core';
import { SocketService } from '../../services/socket-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
})


export class Friends implements OnInit{
  constructor(
    private socketService: SocketService,
    private zone: NgZone
  ){}

  displayedColumns = ['table','old','new'];
  changes: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  
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
