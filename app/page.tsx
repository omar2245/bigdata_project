'use client';

import React from 'react';
import { Stack } from '@mui/material';

import DemographicsForm from '@/components/DemographicsForm';
import { PopulateFormValues } from '@/type/type';
import { useRouter } from 'next/navigation';

const defaultFormValues: PopulateFormValues = {
  year: '110',
  city: '',
  district: '',
};

function Home() {
  const router = useRouter();

  const onSubmit = (formValues: PopulateFormValues) => {
    const { year, city, district } = formValues;
    router.push(`/${year}/${city}/${district}`);
  };

  return (
    <Stack pt={1} px={{ xs: 2, sm: 2, md: '149px' }}>
      <DemographicsForm defaultFormValues={defaultFormValues} onSubmit={onSubmit} />
    </Stack>
  );
}

export default Home;
