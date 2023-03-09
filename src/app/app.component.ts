import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3';
  details = "Secret Password = TunaFish";
  showDetails = false;
  clickLog: Date[] = [];

  onShowDetails() {
    this.showDetails = !this.showDetails;
    this.clickLog.push(new Date());
  }
}
