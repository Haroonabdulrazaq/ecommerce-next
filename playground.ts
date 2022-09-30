// TS recommend use interfaces over Types when possible
// interfaces describe object in a more natural way
//Types allows aliases
type Person = {
  name: string;
  age?: number;
};

interface PersonLoggerFn {
  (name: string, age: number): string;
}

export default function play() {
  const name: string = 'Flip';
  const age: number = 34;

  const person: Person = {
    name: 'John',
    age: 85,
  };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number
  ) => {
    const info = `Name: ${personName} and age: ${personAge}`;
    console.log(info);
    return info;
  };

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name} and age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo2(person);
  logPersonInfo(name, age);
}

// interface Person extends AcademicPerson {
//   name: string,
//   age: number
// }

interface AcademicPerson extends Person {
  publications: string[];
}

type Car = {
  name: string;
} & RaceCar;

type RaceCar = {
  speed: number;
} & AcademicPerson & { millage: number };

function race() {
  const car: Car = {
    name: 'my car',
    speed: 100,
    publications: [''],
    age: 20,
    millage: 100,
  };
}

//Union
type RacCar = {
  maxSpeed: 500;
  type: string;
};

type CityCar = {
  type: string;
  space: number;
  plateNumber: number;
};

function logCarInfo(car: CityCar | RacCar) {
  console.log(car.type);
}
