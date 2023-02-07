function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every(i => arr1[i] === arr2[i]) 
}


function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0 || (gender != "мужской" && gender != "женский")) {
    return 0
  }
  
  let result = users.filter(user => user.gender === gender).map(user => user = user.age); 
  let sum = result.reduce((a,b) => a+b);
  return sum / result.length  
}