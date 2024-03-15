// const Student={
//     fullName: "Chandan Kumar Maurya",
//     marks:99.9,
//     printMarks: function() {
//         console.log("Marks =",his.marks);

//     },
// };

// console.log(Student.printMarks)

const empoly={
    calText(){
        console.log("Tex is 10 %")
    },
    calText: function(){
        console.log("Tex is 10 %")
    }

}
const karan={
    sllery:5000,
    calText(){
        console.log("Tex is 10 %");
    }
};
// karan===___protype___;


karan.__proto__=empoly;
console.log(karan)