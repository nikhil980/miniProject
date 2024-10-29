let userInput=document.getElementById("date");

userInput.max=new Date().toISOString().split("T")[0];

let result=document.getElementById("result");


function calculateAge(){

   let dob=new Date(userInput.value);
   let d=dob.getDate();
   let m=dob.getMonth()+1;
   let y=dob.getFullYear();
      
   let today=new Date();

   let d1=today.getDate();
   let m1=today.getMonth()+1;
   let y1=today.getFullYear();
   let D,M,Y;
   
   Y=y1-y;
   if(m1>=m)
   {
    M=m1-m;
   }
   else
   {
    Y--;
    M=12+m1-m;
   }
   if(d1>=d)
   {
    D=d1-d;
   }
   else
   { M--;
      D=getDateIN(y,m)+d2-d1;
   }
   if(M<0)
   {
    M=11;
    Y--;
   }
   result.innerHTML =`Your are <span>${Y}</span> Years <span> ${M} </span> Months and <span> ${D} </span> Days old`;
}
    function  getDateIN(year,month)
    {
     return new Date(year,month,0).getDate();
    }