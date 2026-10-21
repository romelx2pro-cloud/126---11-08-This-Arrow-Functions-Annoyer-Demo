// const annoyer = {
//   phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//   pickPhrase() {
//     const {
//       phrases
//     } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx]
//   },
//   start() {
//     //Use an arrow function to avoid getting a different 'this':
//     this.timerId = setInterval(() => {
//       console.log(this.pickPhrase())
//     }, 3000)
//   },
//   stop() {
//     clearInterval(this.timerId);
//     console.log("PHEW THANK HEAVENS THAT IS OVER!")
//   }
// }
const a = {
  p: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pp() {
    const { p } = this;
    // console.log(p.length);
    const i = Math.floor(Math.random() * p.length);
    return p[i];
  },
  sr() {
    // console.log(this.pp());
    // const t = this;
    this.timerId = setInterval(() => {
      console.log(this.pp());
      // console.log(0);
      // console.log(this.pp());
    }, 3000);
  },
  sp() {
    clearInterval(this.timerId);
  },
};
