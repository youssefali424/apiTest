import mongoose from "mongoose";
import note from "../models/notebookModel.js";
import { Request, Response } from "express";

export const getNote = (req: Request, res: Response) => {
    // console.log(req.params);
  note.findById(req.params.noteId, (err, note) => {
    if (err) {
      res.send(err);
    }

    res.json(note);
  });
};

export const getAllNotes = (req: Request, res: Response) => {
  note.find({}, (err, notes) => {
    if (err) {
      res.send(err);
    }

    res.json(notes);
  });
};

export const createNote = (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const newNote = new note(req.body);

    newNote.save((err, note) => {
      if (err) {
        res.send(err);
      }

      res.json(note);
    });
  } catch(err) {
    res.status(500).send(err);
  }
};

export const updateNote = (req: Request, res: Response) => {
  note.findOneAndUpdate(
    {
      _id: req.params.noteId
    },
    req.body,
    (err, note) => {
      if (err) {
        res.send(err);
      }

      res.json(note);
    }
  );
};

export const deleteNote = (req: Request, res: Response) => {
  note.remove(
    {
      _id: req.params.noteId
    },
    err => {
      if (err) {
        res.send(err);
      }

      res.json({
        message: `note ${req.params.noteId} successfully deleted`
      });
    }
  );
};
