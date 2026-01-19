/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

console.log(sleep());
module.exports = { sleep };
