/*Not marking blank boxes are red, only marks the email box 
Currently on checkpoint 1 of project*/

/*** Dark Mode ***

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

const Rsvp = document.getElementById("rsvp-button");
const rsvpParti = document.getElementsByClassName("rsvp-participants")[0];

const addParticipant = (person) => {
  const guestRsvp = document.createElement("p");
  guestRsvp.textContent = person.name + " will be joining us on " + person.date + "!";
  rsvpParti.appendChild(guestRsvp);
}

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  const rsvpInputs = document.getElementById("rsvp-form").elements;

  let person = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    date: document.getElementById("dateAttend").value.trim()
  };

  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];
    const value = input.value.trim();
    if (input.tagName === "BUTTON") continue;

    if (value === "" || value.length < 2) {
      containsErrors = true;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }

  // Email 
  const email = document.getElementById("email");
  if (!person.email.includes("@") || !person.email.includes(".com")) {
    containsErrors = true;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (!containsErrors) {
    addParticipant(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].tagName !== "BUTTON") {
        rsvpInputs[i].value = "";
        rsvpInputs[i].classList.remove("error");
      }
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
Rsvp.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
