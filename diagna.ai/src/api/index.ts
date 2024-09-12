export const fetchPatientCard = async ({ pageParam }) => {
  const response = await fetch(
    `https://api-testing.diagna.icu/mimic/api/misc/allStays?page_number=${pageParam}&num_entries=10`
  );

  const cardData = await response.json();
  return cardData;
};
