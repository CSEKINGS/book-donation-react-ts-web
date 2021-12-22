# Book Donation

Check out current hosting here: https://bookd-web.herokuapp.com

## Tools

1. Vite - https://vitejs.dev/guide/why.html
2. Jest (For unit-test) - https://jestjs.io/docs/getting-started

   # Jest configurations for Typescript

   1. Add following to your `package.json`

      ```sh
      "jest": {
        "testEnvironment": "jsdom",
        "moduleNameMapper": {
            "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransform.js",
            "\\.(css|less|scss|sass)$": "<rootDir>/styleTransform.js",
            "^src(.*)$": "<rootDir>/src$1"
        },
        "transform": {
            "^.+\\.tsx?$": "ts-jest"
        }
      }
      ```

   2. Create `fileTransform.js` file in `src` folder, And add followinfg code

      ```sh
      const path = require('path')

      module.exports = {
      process(src, filename, config, options) {
         return (
               'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
            )
         },
      }
      ```

   3. Create `styleTransform.js` file in `src` folder, And add followinfg code

      ```sh
      module.exports = {};
      ```

3. Mui (For design components)- https://mui.com/getting-started/usage
4. Formik (For form validation) - https://formik.org/docs/overview

## Instructions

1. Clone the repository

   ```sh
   git clone https://github.com/CSEKINGS/book-donation-react-ts-web.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run

   ```sh
   npm run dev
   ```

4. Test

   ```sh
   npm run test
   ```

5. Build

   ```sh
   npm run build
   ```

## Screenshots

<!-- ![Manual](https://github.com/CSEKINGS/book_donation_backend/blob/master/views/manual.png?raw=true) -->