const obj = {
  name: "gajanan",
  show: () => {
    console.log(this.name);
  },
};

obj.show();
