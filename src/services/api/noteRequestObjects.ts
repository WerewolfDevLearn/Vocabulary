import { CreateNoteType } from "../serviceTypes";

function noteCreateObject(data: CreateNoteType): RequestInit {
  return {
    method: "POST",
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    body: data.note,
  };
}

const noteRequestObjects = {
  noteCreate: noteCreateObject,
};
export default noteRequestObjects;
