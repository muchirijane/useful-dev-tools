const dogs = [
    { name: 'Snickers', age: 2 }, 
    { name: 'hugo', age: 8 }]
    ;

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello')

  // Interpolated
  console.log('I am a %s string', '💩 ' , 'yooo am i');

  // Styled
  console.log('%c i am some great text', 
  'font-size: 30px; background: red; text-shadow: 0 10px 10px blue;');

  // warning!
  console.warn('This is a warning 🧔 ')


  // Error :|
  console.error('This is an error message !')

  // Info
  console.info('Did you know you can get corona from touching a surface that has the virus. Don\'t touch dirty surfaces.')

  // Testing
  const p = document.querySelector('p');
  console.assert(p.classList.contains('wooooow'), 'Thats wrong!')

  // clearing
  console.clear();

  // Viewing DOM Elements
  console.log(p);
  console.dir(p);

  console.clear();

  // Grouping together
  dogs.forEach( dog => {
    console.group(`${dog.name}`);
     console.log(`The dog is called ${dog.name}`);
     console.log(`${dog.name} is ${dog.age} old`);
     console.log(`${dog.name} is ${dog.age * 7} dog years old`);
     console.groupEnd(`${dog.name}`)
    }
  )

  // counting
  console.count('tracy');
  console.count('tracy');
  console.count('tracy');
  console.count('tracy');

  console.count('human');
  console.count('human');
  console.count('human');
  console.count('human');

  // timing
  console.time('fetching data');

  fetch('https://api.github.com/users/muchirijane')
    .then(response => response.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
    })

    //table
    console.table(dogs)