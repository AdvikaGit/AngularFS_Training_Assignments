import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  FriendArray:string[] = ["Scott", "Smith", "Sandy", "Sam"];

  constructor() { }

  ngOnInit(): void {
  }

}
