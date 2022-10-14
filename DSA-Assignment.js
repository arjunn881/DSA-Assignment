//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number


function sumTwo(input, sum) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] + input[j] == sum) {
        console.log(input[i], input[j], sum);
      }
    }
  }
}

const input = [1, 2, 3, 4, 5, 6, 3, 7, 8, 9, 4, 2, 2, 5, 48, 65, 321, 1];
const sum = 9;
sumTwo(input, sum);

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array

var arr1 = [1, 2, 3, 4, 5];
var rev = arr1.reverse();
console.log(rev);

//Q3. Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}

var str1 = "AACD";
var str2 = "ACDA";

if (areRotations(str1, str2))
  console.log("Strings are rotations of each other");
else console.log("Strings are not rotations of each other");

//Q4. Write a program to print the first non-repeated character from a string?

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;

  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar("abacddbec"));

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n1, from_rod, to_rod, aux_rod) {
  if (n1 == 0) {
    return;
  }
  towerOfHanoi(n1 - 1, from_rod, aux_rod, to_rod);
  document.write(
    "Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + "<br/>"
  );
  towerOfHanoi(n1 - 1, aux_rod, to_rod, from_rod);
}

var n1 = 4;
towerOfHanoi(n1, "A", "C", "B");

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
  }
  return false;
}

function postToPre(post_exp) {
  let s = [];

  let length = post_exp.length;

  for (let i = 0; i < length; i++) {
    if (isOperator(post_exp[i])) {
      let op1 = s[s.length - 1];
      s.pop();
      let op2 = s[s.length - 1];
      s.pop();

      let temp = post_exp[i] + op2 + op1;

      s.push(temp);
    } else {
      s.push(post_exp[i] + "");
    }
  }

  let ans = "";
  while (s.length > 0) ans += s.pop();
  return ans;
}

let post_exp = "ABC/-AK/L-*";

console.log("Prefix : " + postToPre(post_exp));

//Q7. Write a program to convert prefix expression to infix expression.

function isOperator(x) {
  switch (x) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "%":
      return true;
  }
  return false;
}

function convert(str) {
  let stack = [];
  let l = str.length;

  for (let i = l - 1; i >= 0; i--) {
    let c = str[i];

    if (isOperator(c)) {
      let op1 = stack[stack.length - 1];
      stack.pop();
      let op2 = stack[stack.length - 1];
      stack.pop();

      let temp = "(" + op1 + c + op2 + ")";
      stack.push(temp);
    } else {
      stack.push(c + "");
    }
  }
  return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

console.log("Infix : " + convert(exp));

//Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }

    if (stack.length == 0) return false;

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return stack.length == 0;
}

let expr = "([{}])";

if (areBracketsBalanced(expr)) console.log("Balanced ");
else console.log("Not Balanced ");

//Q9. Write a program to reverse a stack.

let st = [];

function insert_at_bottom(x) {
  if (st.length == 0) st.push(x);
  else {
    let a = st.pop();
    insert_at_bottom(x);
    st.push(a);
  }
}

function reverse() {
  if (st.length > 0) {
    let x = st.pop();
    reverse();

    insert_at_bottom(x);
  }
}

st.push("1");
st.push("2");
st.push("3");
st.push("4");

console.log("Original Stack<br>");

console.log(st.join(" ") + "<br>");

reverse();

console.log("Reversed Stack<br>");

console.log(st.join(" "));

//Q10. Write a program to find the smallest number using a stack.
let arr4 = [111, 13, 25, 9, 34, 1];
let n3 = arr.length;
arr4.sort();
console.log("smallest element is " + arr4[0], "</br>");
