# HashIcon - JS Library

## Overview
* JS library which takes in a string and draws a pictorial representation of that string

![Example Ouput](./examples/output.png)

## Contact

[James Cross](mailto:james.cross@thomsonreuters.com) - [The Hub](https://thehub.thomsonreuters.com/people/6037533) - [Git](https://git.sami.int.thomsonreuters.com/james.cross)

[Mario Morgado](mailto:Mario.Morgado@thomsonreuters.com) - [The Hub](https://thehub.thomsonreuters.com/people/6028603) - [Git](https://git.sami.int.thomsonreuters.com/Mario.Morgado)

# Usage

* Include the library (require, import)
* Construct an instance of it with optional parameters (see below for the options) 
   
   ```var hashCode = new HashCode(options)```
* Draw the image for string "inputtedString" in element "imageContainer"

   ```hashCode.drawString("inputtedString", document.getElementById("imageContainer"))```

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
* Build (using webpack)

   ```npm run build```

# Testing
* Unit tests are provided

   ```npm test```

# Roadmap
* No further development expected