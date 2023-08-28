'use client';

import DemographicsSearch from '@/components/DemographicsSearch';
import DemographicsResult from '@/components/DemographicsResult';
import { PopulateFormValues, PopulateInputValues } from '@/type/type';
import { Stack } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const API_URL = 'https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019';

function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const year = params?.year as string;
  const city = decodeURIComponent((params?.city as string) ?? '');
  const district = decodeURIComponent((params?.district as string) ?? '');

  const [formValues, setFormValues] = useState<PopulateFormValues>({ year, city, district });
  const [inputValue, setInputValue] = useState<PopulateInputValues>({ city, district });
  const [cityData, setCityData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/${year}`);
        const data = await res.json();

        const { responseData } = data;
        const site = `${city}${district}`;
        const filteredData = responseData.filter((d: { site_id: string }) => d.site_id === site);
        setCityData(filteredData);
      } catch (err) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (year != null) {
      getData();
    }
  }, [city, district, year]);

  const onSubmit = (values: PopulateFormValues) => {
    const { year: newYear, city: newCity, district: newDistrict } = values;
    router.push(`/${newYear}/${newCity}/${newDistrict}`);
  };
  return (
    <Stack pt={1} px={{ xs: 2, sm: 2, md: '149px' }}>
      <DemographicsSearch
        formValues={formValues}
        setFormValues={setFormValues}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={onSubmit}
      />

      <DemographicsResult
        cityData={cityData}
        searchParams={{ year, city, district }}
        isLoading={isLoading}
        error={hasError}
      />
    </Stack>
  );
}

export default ResultPage;
