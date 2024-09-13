export const fetchPatientCard = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const response = await fetch(
    `https://api-testing.diagna.icu/mimic/api/misc/allStays?page_number=${pageParam}&num_entries=10`
  );

  const cardData = await response.json();
  return cardData;
};

export const fetchStayDetail = async (stayId: string) => {
  const response = await fetch(
    `https://api-testing.diagna.icu/mimic/api/misc/stayDetails?stay_id=${stayId}`
  );

  const stayDetailData = await response?.json();

  return stayDetailData;
};

export const fetchPatientDetail = async (
  stayId: string,
  tableName: string,
  date: string,
  type: string
) => {
  let url;
  if (type) {
    console.log("if");
    url = `https://api-testing.diagna.icu/mimic/api/${tableName}?type=${type}&date=${date}&stay_id=${stayId}`;
  } else {
    console.log("else");
    url = `https://api-testing.diagna.icu/mimic/api/${tableName}?date=${date}&stay_id=${stayId}`;
  }
  const response = await fetch(url);

  const patientDetail = await response?.json();

  return patientDetail;
};

export const getDateRange = async (stayId: string, tableName: string) => {
  const response = await fetch(
    `https://api-testing.diagna.icu/mimic/api/misc/getDateRange/?stay_id=${stayId}&table_name=${tableName}`
  );

  const datesRange = await response.json();

  return datesRange;
};

export const getUniqueType = async (
  stayId: string,
  tableName: string,
  date: string
) => {
  const response = await fetch(
    `https://api-testing.diagna.icu/mimic/api/${tableName}?date=${date}&stay_id=${stayId}`
  );

  const uniqueType = await response.json();

  return uniqueType;
};
