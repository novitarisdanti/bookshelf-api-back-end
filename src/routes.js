const {addBooksHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  // untuk request menyimpan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  // untuk request menampilkan seluruh buku
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // untuk request menampilkan detail buku
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // untuk request update buku
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  // untuk request menghapus
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
