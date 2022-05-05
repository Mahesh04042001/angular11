import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksdaoService } from '../booksdao.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  bookForm:FormGroup;
  // no:string;
  @Input()
  book={
    name:'',
    prices:'',
    images:'',
    author:'',
    canBuy: false,
    description: '',
    publishdate:'',
    discount:''
  }
  constructor(private fb:FormBuilder,private booksvc:BooksdaoService,private router:Router) { 
    this.bookForm=this.fb.group({
      name:[this.book.name,[Validators.required,Validators.minLength(3)]],
    prices:[this.book.prices],
    images:[{thumb:'../../images/ZeroToOne.png',full:''}],
    author:[this.book.author,[Validators.required,Validators.minLength(3)]],
    canBuy: [this.book.canBuy],
    description:[this.book.description],
    publishdate:[this.book.publishdate,[Validators.required,Validators.minLength(3)]],
    discount:[this.book.discount]
    });
  }

  ngOnInit(): void {
    
  }
  // get prices(){
  //   return this.bookForm.get('prices')!;
    
  // }
  // get author(){
  //   return this.bookForm.get('author')!;
    
  // }
  // get canBuy(){
  //   return this.bookForm.get('canBuy')!;
    
  // }
  // get description(){
  //   return this.bookForm.get('description')!;
    
  // }
  // get publishdate(){
  //   return this.bookForm.get('publishdate')!;
    
  // }
  // get discount(){
  //   return this.bookForm.get('discount')!;
    
  // }
  get name(){
    return this.bookForm.get('name')!;
    
  }
  onAddButtonClick(book:any){
    console.log('button clicked!'+book.name);
    console.log('button clicked!'+book.prices);

    try{
      // this.book.images=[{thumb:'images/ZeroToOne.png',full:''}];
      this.booksvc.addBook(book);
      this.router.navigate(['/books']);
    }catch(err:any)
    {
      console.log('ERROR!!!!'+err.message);
    }

  }
}
