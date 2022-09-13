// TS recommend use interfaces over Types when possible
// interfaces describe object in a more natural way
//Types allows aliases 
type Person = {
  name: string
  age?: number
}

interface PersonLoggerFn{
  (name: string, age: number): string
} 

export default function play(){
  const name: string = "Flip"
  const age: number = 34

  const person: Person = {
    name: "John",
    age: 85
  }

  const logPersonInfo: PersonLoggerFn= (personName: string, personAge:number)=>{
    const info = `Name: ${personName} and age: ${personAge}`
    console.log(info);
    return info;
  }

function logPersonInfo2(person: Person){
  const info =`Name: ${person.name} and age: ${person.age}`
  console.log(info);
  return info
}

  logPersonInfo2(person)
  logPersonInfo(name, age)
}

type Car ={
  name: string,
}& {speed: number
}

function race(){
  const car: Car ={
    name: "my car",
    speed: 100
  }
}