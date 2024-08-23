for (let i = 1, j = 60; j >= 0; j -= 5) {
     console.log(`I=${i} J=${j}`);
     if (j === 0) {
         break;
     }
     i += 3;
 } 