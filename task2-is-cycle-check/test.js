import solution from "./index.js";

console.log(solution( [3,1,2], [2,3,1]), 'Given A = [3, 1, 2] and B = [2, 3, 1], your function should return true.'); 
console.log(solution( [1,2,1], [2,3,3]), 'Given A = [1, 2, 1] and B = [2, 3, 3], your function should return false.'); 
console.log(solution( [1,2,3,4], [2,1,4,4]), 'Given A = [1, 2, 3, 4] and B = [2, 1, 4, 4], your function should return false.'); 
console.log(solution( [1,2,3,4], [2,1,4,3]), 'Given A = [1, 2, 3, 4] and B = [2, 1, 4, 3], your function should return false.'); 
console.log(solution( [1,2,2,3], [2,3,3,4,5]), 'Given A = [1, 2, 2, 3] and B = [2 ,3 ,3 ,4 ,5], your function should return false.');