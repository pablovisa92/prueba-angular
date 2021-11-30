import { Component, OnInit } from '@angular/core';

import { Product } from '@products/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'Super desayuno nutritivo con todos los nutrientes necesarios para ser un mago universal',
      image: 'assets/images/img1.jpg'
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 200,
      text: 'Este es el segundo mejor desayuno de nuestra carta. Si lo comes te llenara de placer',
      image: 'assets/images/img2.jpg'
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 200,
      text: 'Este desayuno es para los mas golosos y sabrosones',
      image: 'assets/images/img3.jpg'
    }
  ];

  ngOnInit(): void {
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
  }

}
