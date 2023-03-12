function rule1(string) {
  if (string === "a") return true;

  if (string.startsWith("b") && string.endsWith("b")) {
    const temp = string.split("a");
    if (temp[0].length === temp.at(-1).length)
      return rule1(
        string.substring(string.indexOf("a"), string.lastIndexOf("a") + 1)
      );
  } else if (string.startsWith("a")) return rule1(string.substring(1));
  else if (string.endsWith("a"))
    return rule1(string.substring(0, string.length - 1));
  else return false;
}

function solution(a) {
  const answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(rule1(a[i]));
  }
  return answer;
}
