import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})

export class SocketService {
  private socket;

  constructor(){
    this.socket = io('http://localhost:3000');
  }

  listenToUpdateAmigos(callback: (data:any) => void) {
    this.socket.on('amigo_creado', (payload) => {
      callback(payload);
    });
  }

}
