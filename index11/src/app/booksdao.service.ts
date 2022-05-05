import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdaoService {
  counter:number=0;
  
  bookList=[
    {
      name:'The Three zeros',
      prices:270,
      author:'Muhammed Yunus',
      canBuy:true,
      description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishdate:Date.now(),
      discount:0.1,
      images:[{thumb:'images/WorldofThreeZeros.png',full:''}]

    },
    {
      name:'Zero to One',
      prices:320,
      author:'Peter Thiel',
      canBuy:true,
      description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters',
      publishdate:Date.now(),
      discount:0.2,
      images:[{thumb:'images/ZeroToOne.png',full:''}]
    }
  
];
  constructor() { }
  getBooks(){
    return this.bookList;
  }
  addBook(book:any){
    console.log('New book added'+book.name+''+book.author);
    console.log('No of books'+this.bookList.length);
    this.bookList.push(book);
    console.log('No of books'+this.bookList.length);
  }
  updateBook(book:any){
    console.log('Book Identified'+book.name+book.author);
  }
  add() {
    this.counter++;
  }
}
