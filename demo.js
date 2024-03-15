let s = "A man, a plan, a canal: Panama";

// [^...] is a negated character set, which means it matches any character not included within the brackets.

function reverse(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  for (let i in s) {
    if (s[i].toLowerCase() != s[s.length - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
}
console.log(reverse(s));
