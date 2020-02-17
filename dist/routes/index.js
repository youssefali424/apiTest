"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const notebook = __importStar(require("../controllers/noteController"));
exports.default = (app) => {
    app.route('/notes')
        .get(notebook.getAllNotes)
        .post(notebook.createNote);
    app.route('/notes/:noteId')
        .get(notebook.getNote)
        .put(notebook.updateNote)
        .delete(notebook.deleteNote);
};
//# sourceMappingURL=index.js.map