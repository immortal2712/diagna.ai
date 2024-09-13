import Sidebar from "../../components/Sidebar";

import PatientTable from "../../components/PatientTable";
import { useQuery } from "@tanstack/react-query";
import { fetchPatientDetail, getDateRange, getUniqueType } from "../../api";
import { RootState } from "../../redux/toolkit/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HomeNavbar from "../../components/HomeNavbar";
import { getDatesInRange } from "../../utils";
import { useEffect } from "react";
import {
  resetPatientSlice,
  updateSelectedDate,
  updateSelectedType,
} from "../../redux/toolkit/slices/userSlice";

interface UniqueTypeData {
  type: string;
}

const Ventilation = () => {
  const { stayId, selectedDate, selectedType } = useAppSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();
  const tableName = "ventilation";

  const { data: dateRangeData } = useQuery({
    queryKey: ["date-range", stayId, tableName],
    queryFn: () => getDateRange(stayId, tableName),
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ventilation", stayId, tableName, selectedDate, selectedType],
    queryFn: () =>
      fetchPatientDetail(stayId, tableName, selectedDate, selectedType),
    enabled: !!selectedDate || !!selectedType,
  });

  const { data: uniqueTypeData } = useQuery({
    queryKey: ["unique-types", stayId, tableName, selectedDate],
    queryFn: () => getUniqueType(stayId, tableName, selectedDate),
    enabled: !!selectedDate,
  });

  const startTime = dateRangeData?.data?.start_time;
  const endTime = dateRangeData?.data?.end_time;
  const datesInRange = getDatesInRange(startTime, endTime);

  const uniqueTypes: string[] = [
    ...new Set(
      (uniqueTypeData?.data as UniqueTypeData[])?.map((item) => item.type)
    ),
  ];

  useEffect(() => {
    if (datesInRange && uniqueTypes && !selectedDate) {
      dispatch(updateSelectedDate(datesInRange[datesInRange?.length - 1]));
      dispatch(updateSelectedType(uniqueTypes[uniqueTypes?.length - 1]));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRangeData, uniqueTypeData, selectedDate, selectedType]);

  useEffect(() => {
    if (selectedDate && selectedType) {
      if (!data) {
        refetch();
      }
    }
  }, [selectedDate, selectedType, data, refetch]);

  useEffect(() => {
    const handleCleanup = () => {
      dispatch(resetPatientSlice());
    };

    return handleCleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#F5F5F5] flex">
      <Sidebar
        className1=" hidden bg-black md:block md:rounded-[1.87rem] md:my-10 md:ml-10 md:min-w-[17.5rem] md:max-w-[17.5rem] md:h-[59rem]"
        classNameH1="text-white font-[Montserrat] font-bold text-3xl leading-[2.75rem] pl-[3.12rem] pt-[3.75rem]"
        heading="Board."
        showFooterLinks={true}
        showLinks={true}
        showPatientDetailLink={true}
      />
      <div className="md:w-full ml-2 mr-2">
        <HomeNavbar pageName="Ventilation" showPatientDetailLink={true} />
        <PatientTable
          patientTable={data}
          dateRangeData={datesInRange}
          types={uniqueTypes}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Ventilation;
