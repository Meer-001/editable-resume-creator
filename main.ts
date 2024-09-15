// listing input elements
// preventdefault is liye hota takay form submit hoty hway page reload na ho

document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault()

    const profilePictureElement =document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fNameElement = document.getElementById('fathername') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('number') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;

    //creating output

    if(profilePictureElement && nameElement && fNameElement && emailElement && contactElement && addressElement && educationElement &&experienceElement &&skillElement){
        const name= nameElement.value
        const fName= fNameElement.value
        const email= emailElement.value
        const contact= contactElement.value
        const address= addressElement.value
        const education= educationElement.value
        const experience= experienceElement.value
        const skill= skillElement.value
        const profilePictureFile = profilePictureElement.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';
    

    const generatedOutput = `
    <h2>My Resume </h2>

    ${profilePictureURL} ? '<img src ='${profilePictureURL} alt='Profile Picture' class='profilePicture'>':''}
    <p><strong> Name: </strong> <span id='edit-name' class='editable'> ${name}</span></p>
    <p><strong> Father Name: </strong><span id='edit-father-name' class='editable'> ${fName}</span></p>
    <p><strong> Email address: </strong><span id='edit-email-address' class='editable'> ${email}</span></p>
    <p><strong> Contact Number: </strong><span id='edit-contact' class='editable'> ${contact}</span></p>
    <p><strong> Address: </strong><span id='edit-address' class='editable'> ${address}</span></p>
    
    <h3> Education:</h3> 
    <p id='edit-education' class='editable'>${education}</p>
    <h3> Experience:</h3> 
    <p id='edit-experience' class='editable'>${experience}</p>
    <h3> Skills:</h3> 
    <p id='edit-skills' class='editable'>${skill}</p>
   `;
   const resumeOutputElement= document.getElementById('generatedOutput')
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = generatedOutput
    makeEditable()
   }else{
    console.error('Something is mising in element output')
   };
         }
        });
        function makeEditable(){
            const elementsEditor= document.querySelectorAll('.editable');
            elementsEditor.forEach(elements => {
                elements.addEventListener('click', function(){
                    const currentElement =elements as HTMLElement;
                    const currentValue = currentElement.textContent || "";

                    //replace content
                    if(currentElement.tagName === 'p' || currentElement.tagName === 'SPAN'){
                        const input = document.createElement('input')
                        input.type = 'text'
                        input.value = currentValue
                        input.classList.add('edit-input')

                        input.addEventListener('blur', function(){
                            currentElement.textContent =input.value;
                            currentElement.style.display ='inline';
                            input.remove()
                        })

                        currentElement.style.display = 'none'
                        currentElement.parentNode?.insertBefore(input, currentElement)
                    }
                })
            })
        }