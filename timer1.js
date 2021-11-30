const alarmTimes = process.argv.slice(2);

const alarmClock = (timesToDing) => {
  if (timesToDing) {
    timesToDing.forEach((element,index,array) => {
      let currentNum = Number(element);
      if (!isNaN(currentNum) && currentNum > 0) {
        setTimeout(() => {
          if (index + 2 <  array.length) {
            process.stdout.write(`\rDing at => ${element}s`);
          } else {
            process.stdout.write(`\rDing at => ${element}s\n`);
          }
          process.stdout.write('\x07');
        }, 1000 * element);
      }
    });
  }
};

alarmClock(alarmTimes);



