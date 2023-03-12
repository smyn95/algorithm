function solution(my_string) {
  //     const arr = [];

  //     for(let i= 0; i<my_string.length; i++){
  //         if(my_string[i] === my_string[i].toLowerCase()){
  //             arr.push(my_string[i].toUpperCase())
  //         }else {
  //             arr.push(my_string[i].toLowerCase())
  //         }
  //     }
  //     return arr.join('');
  return my_string
    .split("")
    .map((str) =>
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    )
    .join("");
}
