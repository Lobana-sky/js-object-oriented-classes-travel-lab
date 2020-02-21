
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



let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
class Route{
  constructor(beginningLocation ,endingLocation){
    this.beginningLocation=beginningLocation;
     this.endingLocation=endingLocation;
  }
  blocksTravelled(eastWest){
    if(this.beginningLocation.vertical!=this.endingLocation.vertical){
      return Math.abs(this.beginningLocation.vertical-this.endingLocation.vertical)
    }
    else{
   return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)-eastWest.indexOf(this.endingLocation.horizontal))
    }
  }
}
//   let route = new Route(
//         { horizontal: 'Park', vertical: '34' },
//         { horizontal: 'Park', vertical: '45' }
//       );
let route = new Route(
        { horizontal: '1st Avenue', vertical: '34' },
        { horizontal: 'Park', vertical: '34' }
      );
console.log(route);
route.blocksTravelled(eastWest)
