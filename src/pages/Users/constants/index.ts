import { fieldTypes } from "assets/constants/fieldTypes";
import { IColumns, IFilters } from "assets/interfaces";

export const columns: IColumns[] = [
  { name: "imagePath", alias: "image" },
  { name: "name", alias: "name" },
  { name: "email", alias: "email" },
  { name: "phoneNumber", alias: "phoneNumber" },
  { name: "dateOfBirth", alias: "dateOfBirth" },
  { name: "coins", alias: "coins" },
  { name: "actions", alias: "actions" },
];

export const filters: IFilters[] = [
  {
    name: "name",
    value: "",
    options: [],
    type: fieldTypes.TEXT,
  },
  {
    name: "email",
    value: "",
    options: [],
    type: fieldTypes.TEXT,
  },
  {
    name: "phoneNumber",
    value: "",
    options: [],
    type: fieldTypes.TEXT,
  },
];
