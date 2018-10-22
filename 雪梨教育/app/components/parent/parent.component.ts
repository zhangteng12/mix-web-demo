import { Component, OnInit,Injector } from '@angular/core';
import { CommonService } from '../../services/Common.Service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // providers:[CommonService] 
})
export class ParentComponent implements OnInit {
  //  private local;
  //  constructor(private injector:Injector){
  //     this.local=this.injector.get(CommonService);
  //  }//一般不这样用

  // 在构造函数中
  constructor(private share:ShareService,private local:CommonService) {
   }
   add(){
     this.share.add(100)
   }
  data;
  // data1=['a','b','c','d'];

  //类里面的都是属性和方法，不能let item=5;
  del(i){
      // console.log(i);
      this.data.splice(i,1);
      // this.local.set('list',this.data);
      
  }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.data=this.data1;
    // },3000)

    // setInterval(()=>{
    //   this.data.push(2);
    // },1000);
    // 
    
    // this.local.set('name','zhang'); //不可以放在类中
    if(localStorage.getItem('list')){
        console.log(this.data);
        this.data=localStorage.getItem('list').split(',');//字符串转换为数组
        // localStorage.clear();
    }
    else{
      this.data=[1,2,3,4,5,6,7,8];
      console.log(this.data);
    }

  }

}
