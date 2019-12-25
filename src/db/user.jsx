export let user = [];
for (let i = 0; i < 10; i++) {
  const data = {
    name: "Sourav Badami",
    role: "Software Engineer @Gojek",
    language: "C++"
  };
  user.push(data);
  user[i]["id"] = i + 1;
}
