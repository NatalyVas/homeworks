function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
}


function getUsersNamesInAgeRange(users, gender) {
   let result = users.filter(user => user.gender === gender).map(user =>  user.age).reduce((previousIndex, currentIndex, index, array) => { 
     if (index === array.length - 1) {
      return (previousIndex + currentIndex) / array.length; 
     } else return previousIndex + currentIndex 
   }, 0);
  return result
}