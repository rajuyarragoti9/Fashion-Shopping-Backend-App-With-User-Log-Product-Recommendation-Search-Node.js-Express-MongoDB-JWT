# Fashion Shopping App

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [API Documentation](#api-documentation)
   - [User Registration](#user-registration)
   - [User Login](#user-login)
   - [Product Search](#product-search)
   - [Product Recommendation](#product-recommendation)
6. [Testing with Postman](#testing-with-postman)
7. [Security Features](#security-features)

---

## Introduction

Welcome to the Fashion Shopping App, a backend solution for a fashion shopping application. This project provides three main APIs: User Profile Logging, Product Search, and Product Recommendation. These APIs are designed to support features like user registration, login, product searching, and personalized product recommendations.

---

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing user credentials and product catalog information.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims between two parties.
- **Bcrypt**: A library for hashing passwords.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file.
- **Body-parser**: Middleware to parse incoming request bodies in a middleware before your handlers.

---

## Project Structure

The project is organized into the following structure:

- **config**: Contains the configuration files, such as database.js for MongoDB connection.
- **controllers**: Holds the logic for each API endpoint.
- **models**: Defines the data models for MongoDB.
- **routes**: Contains route definitions for each API endpoint.
- **.env**: Configuration file for environment variables.
- **app.js**: The main entry point for the application.
- **middleware.js**: Middleware for authenticating JWT tokens.
- **package.json**: File containing project metadata and dependencies.

---

## Installation

1. Clone the repository:
   `git clone https://github.com/your-username/fashion-shopping-app.git`
2. Install dependencies:
   `cd fashion-shopping-app `
   `npm install`
3. Set up your environment variables:
   Create a .env file in the root directory with the following content:

```
    PORT=3000
    MONGO_URI=<your_mongo_db_uri>
    JWT_SECRET=<your_jwt_secret>
```

4. Start the server:
   `npm start`

---

## API Documentation

# User Registration

Endpoint: `/user/register`

Method: `POST`

- Request Body:

```
{
  "customerName": "Raju Y",
  "username": "raju_cs",
  "password": "raju_cs",
  "gender": "Male",
  "preferredCategory": "Men casual shirts"
}


```

- Response (Success):

```
{
  "message": "User registered successfully"
}
```

- Response (Error - Duplicate Username):

```
{
  "error": "Username already exists"
}
```

# User Login

Endpoint: `/user/login`
Method: `POST`

- Request Body:

```
{
   "username": "raju_cs",
  "password": "raju_cs"
}
```

- Response (Success):

```
{
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhanVfY3MiLCJpYXQiOjE2OTk4NTA5MzEsImV4cCI6MTY5OTg1NDUzMX0.-b1JXQN5_4CG9DAxzTVQ2ImykhdqfyJjv3nEcfu1O_4"
}
```

- Response (Error - Invalid Credentials):

```
{
  "error": "Invalid credentials"
}
```

# Product Search

Endpoint: `/product/search`
ex: http://localhost:3000/product/search?searchKeyword=Casual&priceMin=100&priceMax=1000
Method: `GET`
We Can Pass Key in Params section or In URL
We Have To Include The Token We got from Login api in Headers
With Key : Authorization And Value : "Token Got From Login api"

- Request Query Parameters:

searchKeyword (required): Keyword for product search.
priceMin (optional): Minimum price for filtering.
priceMax (optional): Maximum price for filtering.
Response (Success):

```
[
    {
        "_id": "654f6225dc1da2539cc33f64",
        "product_id": "5001",
        "product_category": "Women western wear",
        "rank": 0,
        "brand_name": "FUNDAY FASHION",
        "product_description": "Women Regular Fit Solid Spread Collar Casual Shirt",
        "price": 299,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/9/o/4/l-4898-901-funday-fashion-original-imagmqfehesurnhw.jpeg?q=70"
    },
    {
        "_id": "654f6211dc1da2539cc32fc2",
        "product_id": "1001",
        "product_category": "Men casual shirts",
        "rank": 0,
        "brand_name": "WOXEN",
        "product_description": "Men Regular Fit Solid Spread Collar Casual Shirt",
        "price": 399,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/c/1/l-w-d-pocket-white-woxen-original-imagrw6gcswdzags.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc4",
        "product_id": "1002",
        "product_category": "Men casual shirts",
        "rank": 1,
        "brand_name": "allan peter",
        "product_description": "Men Regular Fit Printed Mandarin Collar Casual Shirt",
        "price": 394,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/t/j/l-pink-sws4107-allan-peter-original-imagmfwxtfkzrrnn.jpeg?q=70"
    },
    {
        "_id": "654f6225dc1da2539cc33f65",
        "product_id": "5002",
        "product_category": "Women western wear",
        "rank": 1,
        "brand_name": "PINOVO",
        "product_description": "Pack of 2 Casual Sleeveless Solid Women Black, White To...",
        "price": 214,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/r/9/m-sando-a-srisaras-original-imagzvgvpznmhykz.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc5",
        "product_id": "1003",
        "product_category": "Men casual shirts",
        "rank": 2,
        "brand_name": "KILLER",
        "product_description": "Men Slim Fit Checkered Casual Shirt",
        "price": 1049,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/b/a/-original-imagr6ujg6chz2ph.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc6",
        "product_id": "1004",
        "product_category": "Men casual shirts",
        "rank": 3,
        "brand_name": "VeBNoR",
        "product_description": "Men Regular Fit Solid Spread Collar Casual Shirt",
        "price": 379,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=70"
    },
    {
        "_id": "654f6225dc1da2539cc33f73",
        "product_id": "5005",
        "product_category": "Women western wear",
        "rank": 4,
        "brand_name": "swaggish",
        "product_description": "Casual Regular Sleeves Solid Women Brown Top",
        "price": 263,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/top/u/k/4/m-coller-tops-style-prezone-original-imagjuvvhzxhmf4y.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc8",
        "product_id": "1005",
        "product_category": "Men casual shirts",
        "rank": 4,
        "brand_name": "Dennis Lingo",
        "product_description": "Men Slim Fit Solid Slim Collar Casual Shirt",
        "price": 489,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70"
    },
    {
        "_id": "654f6225dc1da2539cc33f66",
        "product_id": "5006",
        "product_category": "Women western wear",
        "rank": 5,
        "brand_name": "Dream Beauty Fashion",
        "product_description": "Casual Regular Sleeves Printed Women Black Top",
        "price": 190,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/top/z/k/6/s-flipkart-sania-multi-dream-beauty-fashion-original-imaghmrwuzbacbgv.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc9",
        "product_id": "1006",
        "product_category": "Men casual shirts",
        "rank": 5,
        "brand_name": "VeBNoR",
        "product_description": "Men Regular Fit Checkered Spread Collar Casual Shirt",
        "price": 289,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70"
    }
]
```

# Product Recommendation

Endpoint: `/product/recommendation`
http://localhost:3000/product/recommendation?username=raju_cs
Method: `GET`
We Can Pass Key in Params section or In URL
We Have To Include The Token We got from Login api in Headers
With Key : Authorization And Value : "Token Got From Login api"

- Request Query Parameters:

username (required): Username of the user for whom recommendations are requested.
Response (Success - Preferred Category Available):

```
[
    {
        "_id": "654f6211dc1da2539cc32fc2",
        "product_id": "1001",
        "product_category": "Men casual shirts",
        "rank": 0,
        "brand_name": "WOXEN",
        "product_description": "Men Regular Fit Solid Spread Collar Casual Shirt",
        "price": 399,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/c/1/l-w-d-pocket-white-woxen-original-imagrw6gcswdzags.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc4",
        "product_id": "1002",
        "product_category": "Men casual shirts",
        "rank": 1,
        "brand_name": "allan peter",
        "product_description": "Men Regular Fit Printed Mandarin Collar Casual Shirt",
        "price": 394,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/t/j/l-pink-sws4107-allan-peter-original-imagmfwxtfkzrrnn.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc5",
        "product_id": "1003",
        "product_category": "Men casual shirts",
        "rank": 2,
        "brand_name": "KILLER",
        "product_description": "Men Slim Fit Checkered Casual Shirt",
        "price": 1049,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/b/a/-original-imagr6ujg6chz2ph.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc6",
        "product_id": "1004",
        "product_category": "Men casual shirts",
        "rank": 3,
        "brand_name": "VeBNoR",
        "product_description": "Men Regular Fit Solid Spread Collar Casual Shirt",
        "price": 379,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/b/p/s-st2-vebnor-original-imagpv8vufgg5egp.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc8",
        "product_id": "1005",
        "product_category": "Men casual shirts",
        "rank": 4,
        "brand_name": "Dennis Lingo",
        "product_description": "Men Slim Fit Solid Slim Collar Casual Shirt",
        "price": 489,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fc9",
        "product_id": "1006",
        "product_category": "Men casual shirts",
        "rank": 5,
        "brand_name": "VeBNoR",
        "product_description": "Men Regular Fit Checkered Spread Collar Casual Shirt",
        "price": 289,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/1/g/m-st39-vebnor-original-imagrvfs3e5typze.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fca",
        "product_id": "1007",
        "product_category": "Men casual shirts",
        "rank": 6,
        "brand_name": "Jai Textiles",
        "product_description": "Men Slim Fit Printed Spread Collar Casual Shirt",
        "price": 399,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/9/p/s-black-5-jai-textiles-original-imag42m5hcfue7np-bb.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fcb",
        "product_id": "1008",
        "product_category": "Men casual shirts",
        "rank": 7,
        "brand_name": "allan peter",
        "product_description": "Men Regular Fit Printed Casual Shirt",
        "price": 394,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/b/b/l-sws5101-allan-peter-original-imagak5hggw3zzyk-bb.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fcc",
        "product_id": "1009",
        "product_category": "Men casual shirts",
        "rank": 8,
        "brand_name": "Allen Solly",
        "product_description": "Men Regular Fit Checkered Casual Shirt",
        "price": 1014,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/l45xea80/shirt/r/d/a/-original-imagf4snhj4dcdtu.jpeg?q=70"
    },
    {
        "_id": "654f6215dc1da2539cc32fcd",
        "product_id": "1010",
        "product_category": "Men casual shirts",
        "rank": 9,
        "brand_name": "Plus91",
        "product_description": "Men Slim Fit Graphic Print Hood Collar Casual Shirt",
        "price": 369,
        "image_link": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/c/e/s-p1-sht-geographical-red-verticals-original-imaggphymyzfzfrc.jpeg?q=70"
    }
]
```

- Response (Success - No Preferred Category):

```
[
  {
    "product_id": "789",
    "product_category": "accessories",
    "rank": 3,
    "brand_name": "Brand C",
    "product_description": "Description C",
    "price": 19.99,
    "image_link": "https://example.com/imageC.jpg"
  },
  // ... (up to 10 random products)
]
```

- Response (Error - User Not Found):

```
{
  "error": "User not found"
}
```

---

## Testing with Postman

1.Open Postman.
2.Create a new request.
3.Set the request method (POST/GET) and enter the appropriate URL from the documentation.
4.Add request body parameters (if required).
5.Send the request and check the response.

## Security Features

1.JWT (JSON Web Tokens): Used for user authentication, providing a secure way to transmit information between parties.
2.Bcrypt: Hashing passwords to enhance security during user registration and login.
3.Middleware for Authentication: An authentication middleware verifies the presence and validity of JWT tokens.
