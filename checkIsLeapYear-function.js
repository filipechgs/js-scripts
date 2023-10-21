function checkIsLeapYear(year) {
  var output = Boolean;
  
  if(year % 4 !== 0) {
      output = false;
  
  } else if (year % 100 !== 0) {
      output = true;

  } else if (year % 400 === 0) {
        output = true;
      
      } else {
        output = false;
      }
      
  return output
};

  console.log(checkIsLeapYear(2020));