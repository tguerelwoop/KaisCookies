// Array of fortunes
const fortunes = [
  "Grenzen zieht man nicht mit Bleistift.",
  "Warum denkst du es dir kaputt?",
  "Man muss das Leben schon anfassen, um davon berührt zu werden.",
  "Ist eigentlich ganz einfach: Mach's! Weil vielleicht klappts. Vertrau dir mal, dass du das schaffst.",
  "Save the earth, it's the only planet with chocolate.",
  "Herzrasen kann man nicht mähen.",
  "Je höher du kommst, desto größer wird der Fall – aber der Blick von oben ist’s wert.",
    "Sich gegenseitig gut tun, das ist doch das Hauptsächliche. Darum geht es.",
    "Könnte auch nach vorne losgehen.",
    "Good things happen. Love is real. We will be okay.",
    "Auch eine richtige Entscheidung kann dich traurig machen.",
    "Schlaua durch aua",
    "There is a seat wainting for you at tables you haven't even seen.",
    "Schnelle rede, drei mal Gin.",
    "Jeden Tag zu funkionieren, funkioniert halt nicht.",
    "Ohne Handlung keine Wandlung.",
    "Souls don't meet by accident.",
    "Stay close to people who feel like sunshine.",
    "A girl who is gonna do big things cannot let small things get to her!",
    "Your direction is more important than your speed.",
    "Don't borrow grief from the future.",
    "You are the greatest project you will ever work on.",
    "Just because you're soft doesn't mean you're not a force. Honey and wildfire are both gold.",
    "So viel wie du zweifelst, kannst du garnicht scheitern.",
    "Be a voice, not an echo.",
    "Setz' keine Kommata, wo Punkte hinsollten.",
    "Lieben, der Welt zum Trotz.",
    "Do it for YOU.",
    "Create a life you can't wait to get up to.",
    "There's magic in people who don't need a reason to be friendly or kind to others.",
    "Better an 'oops' than a 'what if'",
    "Be good, do good, feel good.",
    "L. I. F. E. - Living isn't fucking easy.",
    "Old ways don't open new doors.",
    "Du kannst nicht am selben Ort heilen, an dem du verletzt wurdest.",
    "It's not a waste of time if it makes you happy.",
    "The higher you climb, the better the view.",
    "Got chalk?",
    "Sunsets are proof that endings can be beautiful too.",
    "Be you own priority.",
    "Everything, in time.",
    
    
];

// Elements
const fortuneCookieSVG = document.getElementById("fortune-cookie");
const closedCookie = document.getElementById("closed-cookie");
const openedCookie = document.getElementById("opened-cookie");
const crumbs = document.querySelectorAll(".crumb");
const fortuneDiv = document.getElementById("fortune");
const newCookieButton = document.getElementById("new-cookie"); // Added this line

// Event Listener for cracking the cookie
fortuneCookieSVG.addEventListener("click", () => {
  // If the cookie is already opened, do nothing
  if (!closedCookie.classList.contains("hidden")) {
    // Hide the closed cookie
    closedCookie.classList.add("hidden");

    // Show the opened cookie
    openedCookie.classList.remove("hidden");

    // Trigger crumb animations
    crumbs.forEach((crumb, index) => {
      setTimeout(() => {
        crumb.classList.add("fall"); // Add a custom animation class
      }, index * 200); // Stagger crumbs falling
    });

    // Display a random fortune
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneDiv.textContent = randomFortune;
    fortuneDiv.classList.remove("hidden");

    // Show the "New Cookie" button
    newCookieButton.classList.remove("hidden");
  }
});

// Event Listener for the "New Cookie" button
newCookieButton.addEventListener("click", () => {
  // Hide the fortune and reset the cookie
  fortuneDiv.classList.add("hidden");
  fortuneDiv.textContent = "";

  // Hide the opened cookie and show the closed cookie again
  openedCookie.classList.add("hidden");
  closedCookie.classList.remove("hidden");

  // Hide the crumbs and reset their animation state
  crumbs.forEach(crumb => {
    crumb.classList.remove("fall");
  });

  // Hide the "New Cookie" button
  newCookieButton.classList.add("hidden");
});
