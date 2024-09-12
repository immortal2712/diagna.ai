import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPatientCard } from "../../api";
import Cards from "../Cards";

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
            stayId={item?.stay_id}
            index={index}
            firstCareunit={item?.first_careunit}
            lastCareunit={item?.last_careunit}
            los={Math.ceil(item?.los)}
            dateOfAdmission={item?.intime}
            dateOfDischarge={item?.outtime}
          />
        ))}
      <div className="w-full flex items-center justify-center">
        {hasNextPage && (
          <button
            onClick={handleLoadMoreClick}
            className="w-24 bg-black rounded-xl text-white"
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PatientCard;
