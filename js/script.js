 var buttonValue = document.getElementById("sub-button");
 var resultName = document.getElementById("yourAkanName");

 buttonValue.addEventListener("click", (event) => {
     event.preventDefault();
     var genderValue = document.form.gender.value;
     var birthDay = document.getElementById("birthdate").value;
     var userBirthday = new Date(birthDay);
     var userBirthdayDay = userBirthday.getDay();
     var dateToday = new Date();
     var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var femaleAkanNames = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

     if (birthDay === "") {
         alert("Please Enter Birthday!");
     } else if (genderValue === "") {
         alert("Please Select Gender!");
     } else if (userBirthday > dateToday) {
         alert("Enter A Valid Date");
     } else {
         if (genderValue === "male") {
             resultName.innerHTML = `Your Akan Name is: ${maleAkanNames[userBirthdayDay]}`
         } else {
             resultName.innerHTML = `Your Akan Name is: ${femaleAkanNames[userBirthdayDay]}`
         }
     }
 })