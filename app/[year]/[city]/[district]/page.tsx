'use client';

import DemographicsForm from '@/components/DemographicsForm';
import DemographicsResult from '@/components/DemographicsResult';
import { PopulateFormValues } from '@/type/type';
import { Stack, CircularProgress } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const url = 'https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019';

function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const year = params?.year as string;
  const city = decodeURIComponent((params?.city as string) ?? '');
  const district = decodeURIComponent((params?.district as string) ?? '');

  const [cityData, setCityData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${url}/${year}`);
        const data = await res.json();

        const { responseData } = data;
        const site = `${city}${district}`;
        const filteredData = responseData.filter((d: { site_id: string }) => d.site_id === site);
        setCityData(filteredData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (year != null) {
      getData();
    }
  }, [city, district, year]);

  const onSubmit = (formValues: PopulateFormValues) => {
    const { year: newYear, city: newCity, district: newDistrict } = formValues;
    router.push(`/${newYear}/${newCity}/${newDistrict}`);
  };
  return (
    <Stack pt={1} px={{ xs: 2, sm: 2, md: '149px' }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <DemographicsForm defaultFormValues={{ year, city, district }} onSubmit={onSubmit} />
          <DemographicsResult cityData={cityData} searchParams={{ year, city, district }} />
        </>
      )}
    </Stack>
  );
}

export default ResultPage;
