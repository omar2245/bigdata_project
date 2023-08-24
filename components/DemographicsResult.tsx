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
    return <ErrorText text="發生錯誤，請稍後再試一次" />;
  }
  if (!isLoading && cityData.length === 0) {
    return <ErrorText text="此城市或區不存在" />;
  }

  return (
    <Stack pt={3} spacing={6} alignItems="center">
      <Typography variant="h4" textAlign="center">
        {`${year}年 ${city} ${district}`}
      </Typography>

      {isLoading && !error && <CircularProgress />}
      {!isLoading && !error && (
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
