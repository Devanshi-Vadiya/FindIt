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
Devanshi Vadiya
Developed as a college project to make campus lost-and-found management easier.

**FindIt - Helping lost things find their way back.**