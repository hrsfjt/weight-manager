import Dexie from "dexie";

export const db = new Dexie("weight");
db.version(1).stores({
  weight: "++id, weight, date",
});
