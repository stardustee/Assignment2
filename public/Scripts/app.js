// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        if (document.title === "Contact") {
            let sendButton = document.getElementById("SendButton");
            let cancelButton = document.getElementById("CancelButton");
      
            let fullName = document.getElementById("fullName");
            let emailAddress = document.getElementById("emailAddress");
            let contactNumber = document.getElementById("contactNumber");
            let message = document.getElementById("message");
      
            sendButton.addEventListener("click", (event) => {
              event.preventDefault();
              console.info(`full Name   : ${fullName.value}
                email Address  : ${emailAddress.value}
                contact Number : ${contactNumber.value}
                your Message   : ${message.value}`);
            });
            
            cancelButton.addEventListener("click", (event) => {
              event.preventDefault();
              if (confirm("Are you sure?")) {
                location.href = "/Home";
              }
            });
          }
    





        let dangerButtons = document.getElementsByClassName("btn-danger");

        for (const button of dangerButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    location.href = '/buisness-list';
                }
            });
        }
    }

    window.addEventListener('load', Start);
})();