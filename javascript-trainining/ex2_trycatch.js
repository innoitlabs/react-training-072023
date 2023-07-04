function getMonthName(monthNumber) {
    monthNumber--;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[monthNumber]) {
        return months[monthNumber];
    }
    else { 
        throw new Error("Invalid Month Number");
    }
}

try {
    console.log(getMonthName());
}
catch (e) { 
    console.log(e.name);
    console.log(e.message);
}

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}

console.log(f());

