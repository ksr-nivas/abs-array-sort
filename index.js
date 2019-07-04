// Import stylesheets
import './style.css';

let array = [2, -7, -2, -2, 0];

// array.sort((a, b) => {
//   return Math.abs(a) - Math.abs(b);
// });

function sortCompare(a, b){
  console.log(`a: ${a}, b: ${b}`);
  if(a < b){
    return Math.abs(a) > Math.abs(b) ? 1 : -1;
  }
  else if(a > b){
    return Math.abs(a) < Math.abs(b) ? -1 : 1;
  }
  return 0;
}
array.sort(sortCompare);
console.log('sorted Array:', array);

// // Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>${array}</h2>`;