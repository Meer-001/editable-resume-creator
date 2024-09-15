// listing input elements
// preventdefault is liye hota takay form submit hoty hway page reload na ho
var _a;
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var fNameElement = document.getElementById('fathername');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('number');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    //creating output
    if (profilePictureElement && nameElement && fNameElement && emailElement && contactElement && addressElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var fName = fNameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var generatedOutput = "\n    <h2>My Resume </h2>\n\n    ".concat(profilePictureURL, " ? '<img src ='").concat(profilePictureURL, " alt='Profile Picture' class='profilePicture'>':''}\n    <p><strong> Name: </strong> <span id='edit-name' class='editable'> ").concat(name_1, "</span></p>\n    <p><strong> Father Name: </strong><span id='edit-father-name' class='editable'> ").concat(fName, "</span></p>\n    <p><strong> Email address: </strong><span id='edit-email-address' class='editable'> ").concat(email, "</span></p>\n    <p><strong> Contact Number: </strong><span id='edit-contact' class='editable'> ").concat(contact, "</span></p>\n    <p><strong> Address: </strong><span id='edit-address' class='editable'> ").concat(address, "</span></p>\n    \n    <h3> Education:</h3> \n    <p id='edit-education' class='editable'>").concat(education, "</p>\n    <h3> Experience:</h3> \n    <p id='edit-experience' class='editable'>").concat(experience, "</p>\n    <h3> Skills:</h3> \n    <p id='edit-skills' class='editable'>").concat(skill, "</p>\n   ");
        var resumeOutputElement = document.getElementById('generatedOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = generatedOutput;
            makeEditable();
        }
        else {
            console.error('Something is mising in element output');
        }
        ;
    }
});
function makeEditable() {
    var elementsEditor = document.querySelectorAll('.editable');
    elementsEditor.forEach(function (elements) {
        elements.addEventListener('click', function () {
            var _a;
            var currentElement = elements;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === 'p' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('edit-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
            }
        });
    });
}
