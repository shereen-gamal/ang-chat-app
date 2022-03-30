import { Component, Input , OnInit } from '@angular/core';
import { ChatSharedDataService } from 'src/app/services/chat-shared-data.service';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit  {
  data:any;
  userName:string="";
  picSrc:string="";
  @Input() chatPressed:boolean=false;
  
  constructor(private dataShared:ChatSharedDataService
    ) { }
  
  ngOnInit(): void {
    this.data=this.dataShared.getData();
    this.userName = this.data.name;
    this.picSrc = this.data.src;
    console.log(this.chatPressed);
    
  } 

}
