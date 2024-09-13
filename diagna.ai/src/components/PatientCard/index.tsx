import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPatientCard } from "../../api";
import Cards from "../Cards";
import LoadMoreButton from "../LoadMoreButton";

interface PatientStay {
  subject_id: number;
  hadm_id: number;
  stay_id: number;
  first_careunit: string;
  last_careunit: string;
  intime: string;
  outtime: string;
  los: number;
}

const PatientCard = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: fetchPatientCard,
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length < 10) {
        return undefined;
      }

      return allPages.length + 1;
    },
  });
  const handleLoadMoreClick = () => {
    fetchNextPage();
  };
  return (
    <div className="flex flex-wrap justify-center md:justify-center lg:justify-start 2xl:justify-between w-screen md:w-[89.9%] md:ml-1 lg:ml-[3.55rem] md:mb-10 ">
      {data?.pages
        ?.flatMap((data) => data?.data)
        ?.map((item: PatientStay, index: number) => (
          <Cards
            key={item?.subject_id}
            stayId={item?.stay_id}
            index={index}
            firstCareunit={item?.first_careunit}
            lastCareunit={item?.last_careunit}
            los={Math.ceil(item?.los)}
            dateOfAdmission={item?.intime}
            dateOfDischarge={item?.outtime}
          />
        ))}
      <LoadMoreButton
        handleLoadMoreClick={handleLoadMoreClick}
        isFetching={isFetching}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default PatientCard;
