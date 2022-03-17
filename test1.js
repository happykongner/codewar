function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""), 10);
}

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

//我写de
function descendingOrder(n) {
  // let arr =Array.from(String(n), Number);
  let arr = n.toString().split("").map(Number);

  if (arr == null || arr.length < 2) {
    return n;
  }
  for (let i = 0; i < arr.length; i++) {
    let maxValueIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      maxValueIndex = arr[j] > arr[maxValueIndex] ? j : maxValueIndex;
    }
    let temp = arr[i];
    arr[i] = arr[maxValueIndex];
    arr[maxValueIndex] = temp;
  }

  return parseInt(arr.join(""), 10);
}
