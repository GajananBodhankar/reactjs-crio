const Obj = {
  name: "gajanan",
  disp: function () {
    console.log(this.name);
  },
};

console.log(JSON.stringify(Obj));
