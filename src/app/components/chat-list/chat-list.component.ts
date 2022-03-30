import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChatSharedDataService } from 'src/app/services/chat-shared-data.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Output() clicked =new EventEmitter();

  pressed:boolean=false;
  constructor(private dataShared:ChatSharedDataService 
    ) { }

  ngOnInit(): void {
  }

  goToChat(name:string,src:string){
    this.dataShared.setData(name,src);
    this.dataShared.setChatPressed(true);
    this.pressed=this.dataShared.getChatPressed();
    this.clicked.emit(true);
  }
}


