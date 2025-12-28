function handleFormSubmit(event) {
    // 1. STOP the page from reloading
    event.preventDefault(); 

    // 2. GET the data from the HTML
    var nameValue = document.getElementById("name").value;
    var fatherValue = document.getElementById("fathername").value;
    var emailValue = document.getElementById("email").value;
var addressValue = document.getElementById("address").value;
    var phoneValue = document.getElementById("phone").value;
    var genderValue = document.querySelector("input[name='gender']:checked").value;
    var stateValue = document.getElementById("stateSelect").value;
    var districtValue = document.getElementById("districtSelect").value;
    var electricityBillValue = document.getElementById("electricitybill").value;
    var idProofValue = document.getElementById("idProof").value;
    var electricityBillFileValue = document.getElementById("electricitybill").value;
    
    // 3. STORE the data in an Object (A digital package)
    var userData = {
        name: nameValue,
        father_name: fatherValue,
        email: emailValue,
        address: addressValue,
        phonenumber: phoneValue,    
        gender: genderValue,
        state: stateValue,
        district: districtValue,
        electricity_bill: electricityBillValue,
        id_proof: idProofValue,
        electricity_bill_file: electricityBillFileValue,
        
        submission_date: new Date().toLocaleDateString()
    };

    // 4. USE the data (For now, we print it to the Console)
    localStorage.setItem("mySavedUser", JSON.stringify(userData));

    // 4. Confirm it worked
    alert("Data Saved Successfully!");
    console.log("Saved to browser memory:", userData);
}
window.onload = function() {
    var savedData = localStorage.getItem("mySavedUser");
    
    if (savedData) {
        // Turn the text back into an Object
        var user = JSON.parse(savedData);
        
        // Put the values back into the boxes
        document.getElementById("Name").value = user.name;
        document.getElementById("fatherName").value = user.father_name;
        document.getElementById("Email").value = user.email;
        document.getElementById("Address").value = user.address;
        document.getElementById("Phone").value = user.phonenumber;
        document.getElementById("stateSelect").value = user.state;
        document.getElementById("districtSelect").value = user.district;
        document.getElementById("electricityBill").value = user.electricity_bill;
        document.getElementById("idProof").value = user.id_proof;
        document.getElementById("electricitybill").value = user.electricity_bill_file;

        alert("Welcome back, " + user.name + "! I restored your data.");
    }
};