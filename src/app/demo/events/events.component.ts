import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  User: any = "Admin";
  constructor() {
    this.User = localStorage.getItem("User");
  }

  ngOnInit(): void {}

  searchThroughTable() {}
}
