function Namesformat(firstname, lastname, callback) {
    callback(firstname, lastname);
  }
  
  function Finalformart(firstname, lastname) {
    // Capitalize the first letter of both first and last names, and make the rest lowercase
    const formattedFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    const formattedLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
    
    console.log(`${formattedFirstname}\n ${formattedLastname}`);
  }
  
  Namesformat("emmyson", "niyonsaba", Finalformart);
  