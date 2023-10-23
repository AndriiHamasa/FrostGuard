# FrostGuard

React App with Random People Cards and Weather
This is a simple React application that allows you to view cards of random people and save their data. You can also check the weather for each person and manage your saved cards.

Installation and Running
Clone the repository:
bash
Copy code
git clone https://github.com/AndriiHamasa/FrostGuard.git
cd FrostGuard
Install dependencies:
Copy code
yarn install
Start the application:
Copy code
yarn dev
The application will be available at http://localhost:3000/.

Description
Home Page (/home)
On the home page of the application, you'll find cards of random people. Each card contains the following information:

Person's Photo
Name
Email
Location
Weather
"Save" Button - to store the card's data in local storage
"Show Weather" Button - for displaying hourly weather in a modal window
Second Route (/saved)
On the second page of the application, you can see cards with saved data from the home page. Each card contains the same information as on the home page.

You can also remove a card from local storage using the "Remove" button.

How It Works
The application uses React for building the user interface. Data about random people and weather is obtained using the following APIs:

Random People: randomuser.me
Weather: open-meteo.com
Technologies
The application uses the following technologies:

React
Axios (for making API requests)
React Router (for navigation between pages)
Browser's local storage (for storing cards)
Material-UI (for UI components)
Prop-Types (for prop validation)
React Icons (for icons)
React Slick and Slick Carousel (for carousel display)
Vite (as a build tool)
Additional Information
Please make sure to add your API key for weather data and ensure your application has internet access.

This is a basic application template, and you can extend it by adding more functionality and styles as per your requirements.