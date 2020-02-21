
class Driver{
constructor(name,day){
this.name=name
this.day=day
}

static startDate(){
const st = new Date('1980');
return st.getFullYear();
}

 yearsExperienceFromBeginningOf(){
let d=new Date();
   console.log(Driver.startDate())
return d.getFullYear()- Driver.startDate() ;
}
}

let s=new Driver()
s.yearsExperienceFromBeginningOf()

