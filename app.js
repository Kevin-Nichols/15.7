//Quick Question #1: {1, 2, 3, 4}


//Quick Question #2: "ref"


// Quick Questions #3: 
// {Array(3) => true}
// {Array(3) => false}

//hasDuplicate
function hasDuplicate(arr){
  const dupSet = new Set(arr);
  return dupSet.size !== arr.length;
}

//vowelCount
function vowelTest(char){
  return 'aeiou'.includes(char);
}

function vowelCount(str){
  const lowerStr = str.toLowerCase();
  const map = new Map();
  for(let char of lowerStr){
    if(vowelTest(char)){
      if(map.has(char)){
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }
  return map;
}