import { CreateNoteType } from "../serviceTypes";

import errorCatch from "./errorCath";
import noteRequestObjects from "./noteRequestObjects";

const baseURL = "http://localhost:3001";

export async function createNoteFetch(noteData: CreateNoteType) {
  const response = await fetch(
    `${baseURL}/notes/create`,
    noteRequestObjects.noteCreate(noteData),
  );
  const data = await errorCatch(response);
  return data;
}
