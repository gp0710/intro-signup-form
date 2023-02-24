const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const validateForm = () => {
        const fname = document.querySelector("#form-fname");
        let x = document.forms["signup-form"]["fname"].value;
        console.log(x)
        if (x == "") {
            fname.textContent = `First Name cannot be empty`
        }
        validateForm();
    }
})

