import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/toolkit/store";
import {
  updateSelectedDate,
  updateSelectedType,
} from "../../redux/toolkit/slices/userSlice";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "subject_id", label: "Subject Id", minWidth: 100 },
  { id: "charttime", label: "ChartTime", minWidth: 170 },
  { id: "value", label: "Value", minWidth: 170 },
  { id: "label", label: "Label", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 170 },
];

interface PatientTableData {
  index: number;
  subject_id: number;
  stay_id: number;
  charttime: string;
  value: string;
  valuenum: string;
  valueuom: string;
  label: string;
  type: string;
}

interface PatientTableResponse {
  patientTable: {
    data: PatientTableData[];
  };
  dateRangeData: string[];
  types: string[];
  isLoading: boolean;
}

export default function PatientTable({
  patientTable,
  dateRangeData,
  types,
  isLoading,
}: PatientTableResponse) {
  const { selectedDate, selectedType } = useAppSelector(
    (state: RootState) => state.user
  );
  const dispatch = useAppDispatch();

  const [tableWidth, setTableWidth] = React.useState("false");

  React.useEffect(() => {
    const handleResize = () => {
      setTableWidth(window.innerWidth > 1200 ? "90%" : "80%");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("changing", event?.target.value);
    dispatch(updateSelectedDate(event.target.value));
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSelectedType(event.target.value));
  };

  if (patientTable?.data && patientTable?.data?.length < 1) {
    return (
      <div className="w-full flex items-center">
        <p className="text-2xl text-black font-bold m-auto">No Data to show</p>
      </div>
    );
  }

  return (
    <Paper
      sx={{
        width: tableWidth,
        overflow: "hidden",
        marginLeft: "50px",
        paddingBottom: "20px",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        {isLoading ? (
          <p className="font-sans font-bold text-sm">Loading...</p>
        ) : (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patientTable?.data?.map((row) => {
                return (
                  <TableRow tabIndex={-1} key={row?.index}>
                    {columns?.map((column) => {
                      const value = row[column.id as keyof PatientTableData];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : column.id === "charttime" &&
                              typeof value === "string"
                            ? value?.split("T")[0]
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>

      <div className="w-full flex justify-end pr-4 gap-5">
        <div className="bg-[#EFDADA]">
          <label
            className="font-[Lato] font-normal text-sm text-black"
            htmlFor="mySelect"
          >
            Filter by date:
          </label>
          <select
            className="font-sans font-bold text-sm"
            id="mySelect"
            value={selectedDate}
            onChange={handleChange}
          >
            {dateRangeData?.map((date) => (
              <option
                className="font-sans font-bold text-sm"
                key={date}
                value={date}
              >
                {date}
              </option>
            ))}
          </select>
        </div>
        {types && types?.length > 1 && (
          <div className="bg-[#EFDADA]">
            <label
              className="font-[Lato] font-normal text-sm text-black"
              htmlFor="mySelect"
            >
              Filter by type:
            </label>
            <select
              className="font-sans font-bold text-sm"
              id="mySelect"
              value={selectedType}
              onChange={handleTypeChange}
            >
              {types?.map((type) => (
                <option
                  className="font-sans font-bold text-sm"
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </Paper>
  );
}
