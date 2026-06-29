const mongoose = require('mongoose');

const borrowedBookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date }
});

module.exports = mongoose.model('BorrowedBook', borrowedBookSchema);
