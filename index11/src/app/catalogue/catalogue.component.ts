import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  books:Array<any>=[];
  i:number=0;

  constructor(private booksvc: BooksdaoService) { }

  ngOnInit(): void {
    this.books=this.booksvc.getBooks();
  }

}
