import { fieldTypes } from "assets/constants/fieldTypes";
import { IColumns, IFilters } from "assets/interfaces";

export const columns: IColumns[] = [
    { name: "createdAt", alias: "CREATED AT" },
    { name: "sponsor", alias: "SPONSOR" },
    { name: "startDate", alias: "START DATE" },
    { name: "endDate", alias: "END DATE" },
    { name: "actions", alias: "ACTIONS" },
]

export const filters: IFilters[] = [
{
    name: "startDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "endDate",
    value: "",
    options: [],
    type: fieldTypes.DATETIME,
  },
  {
    name: "isCurrent",
    value: "",
    options: [],
    type: fieldTypes.CHECKBOX,
  },
]