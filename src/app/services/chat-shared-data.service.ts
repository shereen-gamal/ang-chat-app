import { Injectable } from '@angular/core';
import { boolean, string } from 'joi';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatSharedDataService {

  chatPressed:boolean=false;

  name:string="";
  src:string="";

  data:any={
    name:string,
    src:string,
  };

  constructor() { }

  setData(n:string,s:string){
    this.name=n;
    this.src =s;
  }
  getData():any{
    this.data.name = this.name;
    this.data.src =  this.src;
    return this.data;
  }

  public getChatPressed(): boolean {
    return this.chatPressed;
  }
  public setChatPressed(pressed: boolean): void {
    this.chatPressed = pressed;
  }
}
