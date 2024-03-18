let s = "my name is: gajanan and my age is 21";

function reverse(s) {
  let res = "",
    ans = "",
    reg = /[^a-zA-Z0-9]/;
  for (let i = s.length - 1; i >= 0; i--) {
    if (reg.test(s[i])) {
      ans += " " + helper(res);
      res = "";
    } else {
      res += s[i];
    }
  }
  console.log(ans + " " + helper(res));
}

function helper(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

reverse(s);
