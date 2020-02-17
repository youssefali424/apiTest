import * as notebook from '../controllers/noteController';
import * as core from "express-serve-static-core";

export default (app:core.Express) => {
    app.route('/notes')
        .get(notebook.getAllNotes)
        .post(notebook.createNote);

    app.route('/notes/:noteId')
        .get(notebook.getNote)
        .put(notebook.updateNote)
        .delete(notebook.deleteNote);
};