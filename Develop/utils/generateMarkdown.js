// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  let licenses = [];
  let badgeEl = licenses;

  for (let i = 0; i < licenses.length; i++) {
    if (badgeEl === licenses[i]) {
      return badgeEl;
    } else {
      return "";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseL = [];
  let linkEl = license.link

  for (let i = 0; i < licenseL.length; i++) {
    if (licenseL === licenseL[i]) {
      return licenseL;
    } else {
      return "";
    }
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseS = [];
  let sectionEl = license.section;

  for (let i = 0; i < licenseS.length; i++) {
    if (sectionEl === licenseS[i]) {
      return sectionEl;
    } else {
      return "";
    }
  }
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge = renderLicenseBadge();
  let licenseLink = renderLicenseLink();
  let licenseSection = renderLicenseSection();
  let markDownData = [licenseBadge,licenseLink,licenseSection];
  
  value.forEach(markDownData => {

    if (!value === NULL) {
      data.append(value);
    }
        

  return `# ${data.title}

`;
})

module.exports = generateMarkdown;
