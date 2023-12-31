// ❓DESCRIPTION:
/*
Set the playerNumber variable to 16. Then, use the variable to look up the player's
name and assign it to player.

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
*/

// ✅SOLUTION:
function isPythagoreanTriple(integers)
{
  const a = integers[0];
  const b = integers[1];
  const c = integers[2];
  if (a * a + b * b == c * c)
  {
    return true;
  }
  else if (a * a + c * c == b * b)
  {
    return true;
  }
  else if (b * b + c * c == a * a)
  {
    return true;
  }
  return false;
}