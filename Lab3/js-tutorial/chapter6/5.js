function makeArmy() {
  let shooters = [];
  

  for (let i = 0; i < 10; i++) {
    let shooter = function() { // create a shooter function,
      console.log( i ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
