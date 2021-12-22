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

<table>
<tr><th>Description</th><th>Desktop</th><th>Mobile</th></tr>
<tr>
<td><h3>Signin page</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/signin.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/signinM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Signin page</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/signup.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/signupM.png?raw=true"/></td>
</tr>
<td><h3>Dashboard</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/dashboard.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/dashboardM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>My Books</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/myBooks.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/myBooksM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>My Cart</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/myCart.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/myCartM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Profile</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/profile.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/profileM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Edit Profile</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/editProfile.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/editProfileM.png?raw=true"/></td>
</tr>
<tr>
<tr>
<td><h3>Delete Profile</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/deleteProfile.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/deleteProfileM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Book Detail</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/bookDetail.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/bookDetailM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Add To Cart</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/addToCart.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/addToCartM.png?raw=true"/></td>
</tr>
<td><h3>Remove From Cart</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/removeCart.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/removeCartM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Buy</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/buy.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/buyM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Cancel Buy Request</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/cancelBuyRequest.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/cancelBuyRequestM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Locate</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/locate.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/locateM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Create Book</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/createBook.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/createBookM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Update Book</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/updateBook.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/updateBookM.png?raw=true"/></td>
</tr>
<tr>
<td><h3>Delete Book</h3></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/deleteBook.png?raw=true"/></td>
<td><img src="https://github.com/CSEKINGS/book-donation-react-ts-web/blob/master/src/assets/screenshots/deleteBookM.png?raw=true"/></td>
</tr>
</table>
