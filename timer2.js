//BORROWED THIS STUFF FROM LIGHTHOUSE'S USER INPUT EXAMPLE
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('\n');
    process.exit();
  } else if (key !== encodeURI('b') && isNaN(key)) {
    process.stdout.write('\nNaN!!!!');
  } else {
    if (key === encodeURI('b')) {
      process.stdout.write('\nDing!');
      process.stdout.write('\x07');
    } else {
      process.stdout.write(`\nSetting timer for ${key} seconds`);
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('\nDing!');
      },1000 * key);
    }
  }
});


