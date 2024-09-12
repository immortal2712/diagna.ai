import { formatReadableDate } from "../../utils";
import CardContent from "../CardContent";

interface CardResponse {
  index: number;
  stayId: number;
  firstCareunit: string;
  lastCareunit: string;
  dateOfDischarge: string;
  dateOfAdmission: string;
  los: number; // Length of stay
}

const Cards = ({
  index,
  stayId,
  dateOfAdmission,
  dateOfDischarge,
  los,
  firstCareunit,
}: CardResponse) => {
  return (
    <div
      key={index}
      className="min-h-28  rounded-[1.25rem] m-5 md:m-1 md:ml-6 lg:ml-0 md:mr-12 xl:mr-9 2xl:mr-12 flex flex-col lg:mb-5 w-[480px] xl:h-[7.5rem] pt-2"
      style={{ backgroundColor: "#EFDADA" }}
    >
      <CardContent label="Stay ID" info={stayId} />
      <CardContent label="First Care Unit" info={firstCareunit} />
      <CardContent
        label="Date of Admission"
        info={formatReadableDate(dateOfAdmission)}
      />
      <CardContent
        label="Date of Discharge"
        info={formatReadableDate(dateOfDischarge)}
      />
      <CardContent label="los" info={los} />
    </div>
  );
};

export default Cards;
