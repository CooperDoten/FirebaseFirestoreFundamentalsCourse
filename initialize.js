firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const employeesRef = db.collection("employees");

employeesRef.doc("R.Dikles").set({
    fName: "Ranice",
    lName: "Dikles",
    email: "rdikles@hotmail.com",
    age: 39,
    yearsOfExperience: 9,
    isFullTime: true
});
employeesRef.doc("P.Pikles").set({
    fName: "Peter",
    lName: "Pickles",
    email: "ppickles@hotmail.com",
    age: 29,
    yearsOfExperience: 3,
    isFullTime: true
})
employeesRef.doc("S.Miles").set({
    fName: "Sandy",
    lName: "Miles",
    email: "smiles@hotmail.com",
    age: 55,
    yearsOfExperience: 19,
    isFullTime: true
})
employeesRef.doc("T.Turner").set({
    fName: "Ted",
    lName: "Turner",
    email: "teddyturner@hotmail.com",
    age: 11,
    yearsOfExperience: 0,
    isFullTime: false
})