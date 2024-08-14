/*Important Points:
JavaScript's Type Coercion: JavaScript automatically string values ko numbers mein convert kar leta hai jab multiplication jaise operations kiye jaate hain. Yeh feature JavaScript ke type coercion behavior ke wajah se hota hai.

Potential Issues: Agar aap accidentally aisi strings pass karte hain jo numbers mein convert nahi ho sakti (jaise "abc"), toh result NaN (Not a Number) hoga.*/ 
function calculateAreaWithDefault(width = "1", height = "1"){
    return width*height;
};
console.log(`Area of rectangle:-${calculateAreaWithDefault()}`);
console.log(`Area of rectangle:-${calculateAreaWithDefault(5,10)}`);


//Right way:
/*
function calculateAreaWithDefault(width = 1, height = 1){
    return width*height;
};
console.log(`Area of rectangle:-${calculateAreaWithDefault()}`);
console.log(`Area of rectangle:-${calculateAreaWithDefault(5,10)}`);
*/