"use client"

import { ColumnDef } from "@tanstack/react-table"


export type EmployeeType={
    id: number | string;
    firstName: string;
    lastName: string;
    teamName: string;
    isTeamLeader: boolean;
    avatar?: undefined | string;
}


export const columns: ColumnDef<EmployeeType>[] = [
  {
    accessorKey: "avatar",
    header: "",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "teamName",
    header: "Team Name",
  },
  {
    accessorKey: "isTeamLeader",
    header: "Team Leader",
  },

]
