import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { FriendChange } from '../interfaces/friend-change';

@Injectable({
  providedIn: 'root',
})

export class SocketService {
  private socket;

  constructor(){
    this.socket = io('http://localhost:3000');
  }

  listenToUpdateAmigos(callback: (data: FriendChange) => void) {
    this.socket.on('amigo_creado', (payload: FriendChange) => {
      callback(payload);
    });
  }

}
