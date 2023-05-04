function FORM(){
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value;
    var what =
        document.forms.RegForm.Subject.value;
    var password =
        document.forms.RegForm.Password.value;
    var address =
        document.forms.RegForm.Address.value;
    
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
    var regPhone=/^\d{10}$/;                       
    var regName = /\d+$/g;                         
 
    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name again.");
        name.focus();
        return false;
    }
 
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    }
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
 
    if (what.selectedIndex == -1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }
 
    return true;
 {
    var name =
        document.forms.RegForm.Name.value;
    var email =
        document.forms.RegForm.EMail.value;
    var phone =
        document.forms.RegForm.Telephone.value
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;                                       
    var regName = /\d+$/g;                                   
     
 
    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
 
    
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }


 
    return true;
