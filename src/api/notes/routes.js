const routes = (handler) => [{
  method: 'POST',
  path: '/notes',
  handler: handler.postNotesHandler,
  options: {
    auth: 'notesapp_jwt',
  },
},
{
  method: 'GET',
  path: '/notes',
  handler: handler.getNotesHandler,
  options: {
    auth: 'notesapp_jwt',
  },
}, {
  method: 'GET',
  path: '/notes/{id}',
  handler: handler.getNoteByIdHandler,
  options: {
    auth: 'notesapp_jwt',
  },
},
{
  method: 'PUT',
  path: '/notes/{id}',
  handler: handler.putNoteByIdHandler,
  options: {
    auth: 'notesapp_jwt',
  },
},
{
  method: 'DELETE',
  path: '/notes/{id}',
  handler: handler.deleteNoteByIdHandler,
},
];

module.exports = routes;
