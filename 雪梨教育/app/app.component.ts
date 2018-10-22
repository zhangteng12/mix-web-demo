import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//     title:string='ToDoList';
//     todo:string;
//     doing=[];
//     doned=[];
//     addTodo(e){
//         let todoObj={
//           todo:this.todo,
//           done:false
//         }
//         if(e.keyCode==13){    //回车
//           this.doing.push(todoObj);
//           this.todo='';
//         }
//     }

// //删除
//     deltodo(index,done){
//       if(done){
//         this.doing.splice(index,1)
//       }
//       else{
//         this.doned.splice(index,1)
//       }
//     }
   
// //转换
//     movetodo(index,done){
//         if(done){
//           let todolist=this.doing[index];
//           this.doned.push(todolist);
//           this.doing.splice(index,1)
//         }
//         else{
//           let donelist=this.doned[index];
//           this.doing.push(donelist);
//           this.doned.splice(index,1)
//         }
//     }
//   }

// export class AppComponent{
//   txt:string;
//   arr:string[]=[];
//   arr1:string[]=[];
//   getValue(e){
//     if(e.keyCode == 13){
//       this.arr.push(this.txt);
//       console.log(this.arr);
//       this.txt="";
//     }
//   }
//   delete(idx){
//     this.arr.splice(idx,1);
//   }
//   change(idx){
//     // this.arr1.push(this.arr[idx]);
//     // this.arr.splice(idx,1);
//     let ele=this.arr.splice(idx,1);
//     this.arr1.push(ele[0]);
//   }

// }


export class AppComponent{
  // txt:string;
  // counter:number=0;
  // arr:Msg[]=[];
  // getValue(e){
  //   if(e.keyCode == 13){
  //     this.arr.push(new Msg(this.txt,false));
  //     this.txt="";
  //   }
  // }
  // count(){
  //   this.counter=0;
  //   this.arr.forEach((value,index)=>{
  //     if(value.done){
  //       this.counter++;
  //     }
  //   });
  // }
  // delete(idx){
  //   this.arr.splice(idx,1);
  //   this.count();
  // }
  // change(idx){
  //   this.arr[idx].done=!this.arr[idx].done;
  //   this.count();
  // }

}

//如果想要类暴露出去，加上export
// export class Msg{
//   constructor(public titile:string,public done:boolean){

//   }
// }
// 就可以有Msg类型,比如arr:Msg ，使用类的时候要new ，
//  属性:后边跟的是类型