# FindIt - Campus Lost & Found App

FindIt is a simple mobile application that helps students report lost items and find items that have been found on campus. Users can add item details, upload photos, search through listings, and share item information.

## Features

- **Lost Items:** View items reported as lost.
- **Found Items:** View items reported as found.
- **Add Items:** Submit an item with its name, description, location, and type.
- **Photo Upload:** Select an image from the gallery and upload it.
- **Search:** Search for items by name.
- **Share Items:** Share item details using the phone's native share option.
- **Delete Items:** Delete listings or use the available recovery actions.
- **Database Storage:** Store item details and image URLs permanently.

## Tech Stack

**Frontend**
- React Native
- Expo
- JavaScript

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose

**Image Storage**
- Cloudinary

## Project Structure

```text
FindIt/
├── mobile/
│   ├── App.js
│   ├── LostItemsScreen.js
│   ├── FoundItemsScreen.js
│   └── AddItemScreen.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── .gitignore
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd FindIt
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
node server.js
```

The backend will run on port `5000`.

### 3. Set Up the Mobile App

Open another terminal:

```bash
cd mobile
npm install
```

Update the API address in the mobile app to use your computer's local IP address:

```js
http://YOUR_LOCAL_IP:5000/api/items
```

Make sure your phone and computer are connected to the same Wi-Fi network when testing locally.

Start Expo:

```bash
npx expo start
```

Scan the QR code using Expo Go to open the app.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Add a new item |
| DELETE | `/api/items/:id` | Delete an item |

## Future Improvements

- Edit existing item details.
- Add more item filters.
- Improve the user interface.
- Add item status tracking.

## Author

Developed as a college project to make campus lost-and-found management easier.

**FindIt - Helping lost things find their way back.**