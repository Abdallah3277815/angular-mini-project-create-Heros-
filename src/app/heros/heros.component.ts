import { Component } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  herosArr:any = [];
  hero = {
    name:'',
    power:0,
    img:''

}

ngOnInit() {
  const storedData = localStorage.getItem('herosArr');
  if (storedData) {
    this.herosArr = JSON.parse(storedData);
  }
}


createHero(){
 if(this.hero.name == '' && this.hero.power == 0 && this.hero.img==''){

 
  
 }else{
  this.herosArr.push(this.hero)
  console.log(this.hero);
  this.hero = {
    name:'',
    power:0,
    img:''


}
console.log(this.herosArr);
localStorage.setItem('herosArr',JSON.stringify(this.herosArr)) 


 }

}

}
