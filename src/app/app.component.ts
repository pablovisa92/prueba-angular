import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola a esta primera clase';
  name = 'Nicolas';

  rockBands : string[]= ['nirvana','los prisioneros','ccaa','as'];
  rockBandName='';

  changeTitle() {
    this.title = 'nuevo titulo';
  }

  addRockBand() {
    this.rockBands.push(this.rockBandName);
    this.rockBandName='';
  }

  empty() {
    this.rockBands = [];
  }

}
