import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PoVAL';
  private apiUrl = 'https://poval-api.herokuapp.com/api';
  data: any = {};

  constructor(private http: Http) {
    console.log('Hello POVAL user!');
    this.hitAPI();
    this.hitRoot();
  }

  hitAPI() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  hitRoot() {
    this.hitAPI().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

}
