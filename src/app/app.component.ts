import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola a esta primera clase';
  name = 'Nicolas';

  rockBands : string[]= ['nirvana','los prisioneros'];

  users: User[] = [
    {
      name: 'Nicolas',
      age: 26,
      isSingle: false,
      avatar: 'assets/images/img1.jpg'
    },
    {
      name: 'Julian',
      age: 30,
      isSingle: true,
      avatar: 'assets/images/img2.jpg'
    }
  ];
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

  deleteItem(index: number) {
    this.rockBands.splice(index, 1);
  }

  updateItem(index: number) {
    this.rockBands[index] = 'se cambio';
  }

}
