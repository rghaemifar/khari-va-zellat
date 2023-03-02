import React from "react";
import MainLayout from "@/components/mainLayout";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ThesisStatuses() {
  const studentStatuses = ["عدم تایید", "تایید", "استاد"];
  const teacherStatuses = [
    "موضوع",
    "تاریخ آپلود",
    "تایید",
    "عدم تایید",
    "دانشجو",
  ];

  return (
    <MainLayout>
      <TableContainer
        component={Paper}
        sx={{
          minWidth: 900,
          maxHeight: 300,
          overflowY: "auto",
          border: "1px solid #00baba",
        }}
        // onScroll={(e) => {
        //   if (
        //     Math.ceil(e?.target?.scrollTop) + e?.target?.clientHeight + 1 >=
        //       e?.target?.scrollHeight &&
        //     !isLoading
        //   ) {
        //     setPage((prev) => ++prev);
        //   }
        // }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {teacherStatuses.map((item) => (
                <TableCell key={item}>
                  <Typography variant={"body_m"}>{item}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <TableBody>
        {peopleInfo.map((item) => {
          const isChecked = servicedPeople.some(
            (servicedPerson) => servicedPerson.id === item.id
          );
          return (
            <TableRow key={item.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isChecked}
                  onClick={() =>
                    toggleRelated(
                      item,
                      isChecked
                        ? RELATED_TOGGLE_MODES.DELETE
                        : RELATED_TOGGLE_MODES.ADD
                    )
                  }
                  color="primary"
                />
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {item.firstname} {item.lastname}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {texts.static.relations[item.relation] || "_"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {item.phonenumber || "_"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {getShortJalaliDate(item.birthdate)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {item.national_code}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {item.insurance_name || "_"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {item.supplemental_insurance_name || "_"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant={"body_m"}>
                  {texts.static.genders[item.gender]}
                </Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody> */}
        </Table>
      </TableContainer>
    </MainLayout>
  );
}

export default ThesisStatuses;
