# FrostGuard

React App with Random People Cards and Weather

This is a simple React application that allows you to:
- View cards of random people and save their data.
- Check the weather for each person and manage your saved cards.

### Installation and Running

1. Clone the repository:

git clone https://github.com/AndriiHamasa/FrostGuard.git
cd FrostGuard

markdown
Copy code

2. Install dependencies:

yarn install

markdown
Copy code

3. Start the application:

yarn dev

markdown
Copy code

The application will be available at `http://localhost:5173/`.

### Description

#### Home Page (`/home`)

On the home page of the application, you can:
- View cards of random people, each containing the following information:
  - Person's Photo
  - Name
  - Email
  - Location
  - Weather
- Save card data using the "Save" button.
- Display hourly weather in a modal window using the "Show Weather" button.

#### Second Route (`/saved`)

On the second page of the application, you can:
- See cards with saved data from the home page, each containing the same information.
- Remove a card from local storage using the "Remove" button.

### How It Works

The application uses:
- React for building the user interface.
- APIs for random people data: [randomuser.me](https://randomuser.me/api/)
- APIs for weather data: [open-meteo.com](https://open-meteo.com/en/docs)

### Technologies

The application uses the following technologies:
- React
- Axios (for making API requests)
- React Router (for navigation between pages)
- Browser's local storage (for storing cards)
- Material-UI (for UI components)
- Prop-Types (for prop validation)
- React Icons (for icons)
- React Slick and Slick Carousel (for carousel display)
- Vite (as a build tool)

### Additional Information

This is a basic application template, and you can extend it by adding more functionality and styles as per your requirements.