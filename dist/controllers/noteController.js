"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notebookModel_js_1 = __importDefault(require("../models/notebookModel.js"));
exports.getNote = (req, res) => {
    // console.log(req.params);
    notebookModel_js_1.default.findById(req.params.noteId, (err, note) => {
        if (err) {
            res.send(err);
        }
        res.json(note);
    });
};
exports.getAllNotes = (req, res) => {
    notebookModel_js_1.default.find({}, (err, notes) => {
        if (err) {
            res.send(err);
        }
        res.json(notes);
    });
};
exports.createNote = (req, res) => {
    console.log(req.body);
    try {
        const newNote = new notebookModel_js_1.default(req.body);
        newNote.save((err, note) => {
            if (err) {
                res.send(err);
            }
            res.json(note);
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
};
exports.updateNote = (req, res) => {
    notebookModel_js_1.default.findOneAndUpdate({
        _id: req.params.noteId
    }, req.body, (err, note) => {
        if (err) {
            res.send(err);
        }
        res.json(note);
    });
};
exports.deleteNote = (req, res) => {
    notebookModel_js_1.default.remove({
        _id: req.params.noteId
    }, err => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: `note ${req.params.noteId} successfully deleted`
        });
    });
};
//# sourceMappingURL=noteController.js.map