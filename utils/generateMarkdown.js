// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    // Return the direct link to the license
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  return '';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // Use renderLicenseLink to get the URL
    return `## License

This project is licensed under the ${license} license. See the [LICENSE](${renderLicenseLink(license)}) file for details.
    `;
  }
  return '';
}

// Function to generate markdown for README
//${renderLicenseBadge(data.license)}  <!-- This line includes the license badge -->
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#Credits)
- [Tests](#tests)
- [Questions](#questions)


## Installation
To install this project, follow these steps:
  Create a .gitignore file before installing any npm dependencies.

## Usage
${data.usage}
 This file should contain the following:
  Clone the repository to your local machine.
    Git Clone ${data.installation}
    Make sure you have: package.json
    Make sure you run: npm init

    ## Credits
${data.Credits}

## License
${renderLicenseBadge(data.license)}

## Tests
${data.tests}

## How to contribute
If you have any questions, please feel free to contact me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.github}](https://github.com/${data.github}).
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Create a new Pull Request.
`;
}

export default generateMarkdown;
