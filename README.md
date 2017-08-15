# HashIcon - JS Library

## Overview
* JS library which takes in a string and draws a pictorial representation of that string

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

# Developing

If you have discover any issues with regards to this project, please feel free to create an Issue.

If you have coding suggestions that you would like to provide for review, please create a Pull Request.

We will review issues and pull requests to determine any appropriate changes.

# Contributing
In the event you would like to contribute to this repository, it is required that you read and sign the following:

* Individual Contributor License Agreement.pdf
* Entity Contributor License Agreement.pdf

Please email a signed and scanned copy to `sdkagreement@thomsonreuters.com`. If you require that a signed agreement has to be physically mailed to us, please email the request for a mailing address and we will get back to you on where you can send the signed documents.

# Roadmap
* No further development expected