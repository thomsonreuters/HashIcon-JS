# HashIcon - JS Library

## Overview
* JS library which takes in a string and draws a pictorial representation of that string
* The same string will generate the same image in [HashIcon-Swift](https://github.com/thomsonreuters/HashIcon-Swift)
* Can be shown to a user in order verify that data (e.g. a public key) is identical in 2 applications

![Example Ouput](./examples/output.png)

# Usage

* Include the library (require, import)
   
   ```import HashIcon from 'hashicon';```

* Construct an instance of it with optional parameters (see below for the options) 
   
   ```var hashCode = new HashCode(options)```
* Draw the image for string "inputtedString" in element "imageContainer"

   ```hashCode.drawString("inputtedString", "#imageContainer")```

See the ```examples``` folder for a very simple usage of the library.

## Options

The options object can look like the following:

```
new HashCode({
    amountRows: 5,
    amountCols: 5
})
```

# Build
* Build (using tsc and webpack)

   ```npm run build```

# Testing
* Unit tests are provided

   ```npm test```
   
# Contributing
## Got a question or problem?

The best way to contact us is to open an issue on GitHub. We will be monitoring these and will respond as soon as we can.

## Found a bug?

If you found a bug in the code you can help us in one of two ways:

* Open a bug report issue on GitHub
* Fix the bug and submit a Pull Request (please follow the below guidelines)

## Missing a feature?

If there is a feature you think should be in this library, you can help in one of two ways:

* Open an issue in GitHub and request the feature
* Implement the feature and submit a Pull Request (please follow the below guidelines)

## Submitting a Pull Request

If you would like to submit a Pull Request (bug fix of new feature) to this repo, please consider the below points:

* You will need to read and sign the Contributer License Agreement
  * If you are an Individual: Individual Contributor License Agreement.pdf
  * If you are a corporation: Entity Contributor License Agreement.pdf
  * Please print, sign, scan and send the scanned copy to `sdkagreement@thomsonreuters.com`
* Please do your code change in a new branch and then submit a Pull Request into master
* Please attempt to fit in with the current code standard in the repo
* Please make your commit messages meaningful
* Please make sure all the tests run and pass before submitting the Pull Request
* Please add any new tests to cover the bug or feature
* After the Pull Request is merged to master, please delete your branch

# Roadmap
* No further development expected