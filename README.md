# Happy Tails Notebooks - Backend

This backend connects to **MongoDB** and provides an API for handling journal entries, supporting the **Happy Tails Notebooks** app. Built with **Node.js**, **Express**, and **Mongoose**, it manages CRUD operations for journal entries.

---

## Features

- **MongoDB Integration**: Stores journal entries with optional mood and subject.
- **API Endpoints**: Allows creating, reading, updating, and deleting journal entries.
- **Schema Validation**: Uses **Mongoose** for structure and validation.
- **Auto Date**: Automatically adds submission date for each entry.

---

## API Endpoints

- **POST /api/journal**: Create a new journal entry.
- **GET /api/journal**: Retrieve all journal entries.
- **GET /api/journal/:id**: Retrieve a specific journal entry.
- **PATCH /api/journal/:id**: Update a journal entry.
- **DELETE /api/journal/:id**: Delete a journal entry.

---

## Database Setup

Uses **Mongoose** for schema management. Here's the journal schema:

```js
const journalEntries = new mongoose.Schema({
  mood: { type: String, default: "" },
  subject: { type: String, default: "" },
  entry: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now }
});
```

---

## File Structure

```plaintext
backend/
│
├── controllers/
│   └── journalController.mjs  # Logic for journal operations
├── models/
│   └── journalModel.mjs  # Defines the journal schema
├── routes/
│   └── journalRoutes.mjs  # API routes for journal entries
├── .env  # MongoDB URI
└── server.js  # Server entry point
```

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/happy-tails-notebooks-backend.git
   cd happy-tails-notebooks-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set your **MongoDB URI** in the `.env` file.

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

---

Enjoy using **Happy Tails Notebooks** to track your journal entries!

---