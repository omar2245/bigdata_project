import React from 'react';
import { Stack, Typography, CircularProgress } from '@mui/material';
import { PopulateFormValues } from '@/type/type';
import HouseholdChart from './HouseholdChart';
import HouseholdPieChart from './HouseholdPieChart';

interface Props {
  searchParams: PopulateFormValues;
  isLoading: boolean;
  error: boolean;
  cityData: any[];
}

function ErrorText({ text }: { text: string }) {
  return (
    <Stack pt={3}>
      <Typography variant="h4" textAlign="center">
        {text}
      </Typography>
    </Stack>
  );
}

function DemographicsResult({ searchParams, isLoading, error = false, cityData }: Props) {
  const { year, city, district } = searchParams;

  const totalMaleOrdinary = cityData.reduce(
    (acc, item) => acc + parseInt(item?.household_ordinary_m ?? 0, 10),
    0,
  );
  const totalFemaleOrdinary = cityData.reduce(
    (acc, item) => acc + parseInt(item?.household_ordinary_f ?? 0, 10),
    0,
  );
  const totalMaleSingle = cityData.reduce(
    (acc, item) => acc + parseInt(item?.household_single_m ?? 0, 10),
    0,
  );
  const totalFemaleSingle = cityData.reduce(
    (acc, item) => acc + parseInt(item?.household_single_f ?? 0, 10),
    0,
  );

  if (error) {
    return <ErrorText text="發生錯誤，請確認輸入的地區是否有誤" />;
  }

  return (
    <Stack pt={3} spacing={6} alignItems="center">
      <Typography variant="h4" textAlign="center">
        {`${year}年 ${city} ${district}`}
      </Typography>

      {isLoading && <CircularProgress />}
      {!isLoading && cityData.length !== 0 && (
        <div>
          <HouseholdChart
            totalMaleOrdinary={totalMaleOrdinary}
            totalFemaleOrdinary={totalFemaleOrdinary}
            totalMaleSingle={totalMaleSingle}
            totalFemaleSingle={totalFemaleSingle}
          />
          <HouseholdPieChart
            totalMaleOrdinary={totalMaleOrdinary}
            totalFemaleOrdinary={totalFemaleOrdinary}
            totalMaleSingle={totalMaleSingle}
            totalFemaleSingle={totalFemaleSingle}
          />
        </div>
      )}
    </Stack>
  );
}

export default DemographicsResult;
