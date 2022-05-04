import { Component, OnInit,OnDestroy, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
@Input() name:string="";
child:string="this is test";
// val=false;
  // val=false;
  user!: { id: string; value: string; };
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("child oninit called");
    this.user={
      id:this.router.snapshot.params['id'],
      value:this.router.snapshot.params['name']

    };
  }
  ngOnDestroy(): void {
    console.log("child ondestroy called");
  }
  ngOnChanges() {
    console.log("child onchange called");
  }
  ngDoCheck(): void {
    console.log('child Do check is called');
  }
  ngAfterViewInit(): void {
    console.log("child afterview init is called");
  }
  ngAfterViewChecked(): void {
    console.log("Child viewchecked called")
  }
  ngAfterContentInit(): void {
    console.log("child after content init called");
  }
  ngAfterContentChecked(): void {
    console.log("child After content checked is called");
  }
  // ngOnDestroy(): void {
  //   console.log("child NgOnDestroy called");
  //   this.name="";
  //   console.log(this.name);
  // }
  // show(){
  //   this.val=!this.val;
  // }

}
