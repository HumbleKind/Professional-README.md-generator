// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenses = [];
let links = [];
let sections = [];

function renderLicenseBadge(license) {
  
  let badgeEl = licenses;

  for (let i = 0; i < licenses.length; i++) {
    if (badgeEl === licenses[i] || !NULL) {
      return badgeEl;
    } else {
      return "";
    }
  
  }
 licenses.append(badgeEl);
}

renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let linkEl = license.link

  for (let i = 0; i < links.length; i++) {
    if (linksEl === links[i] || !NULL) {
      return linksEL;
    } else {
      return "";
    }
  }
  links.append(linksEl);
}

renderLicenseLink();


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const $readme = document.querySelector("./README.md/");
  const $readmesection = val($readme.license.section);

  let sectionEl = $readmesection;

  for (let i = 0; i < sections.length; i++) {
    if (sectionEl === sections[i] || !NULL) {
      return sectionEl;
     
    } else {
      return "";
    }
    
  }
  sections.append(sectionsEl);
}

renderLicenseSection();

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {


  return`
  # Title: ${data.title}
  # Description: ${data.description}

  # Table of Contents: 
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub)

  # Installation: ${data.installation}
  # Usage: ${data.usage}
  # License: ${data.license}
  # Contributors: ${data.contributing}
  # Testing: ${data.tests}
  `};
  
  


module.exports = generateMarkdown;

