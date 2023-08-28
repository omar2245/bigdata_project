'use client';

import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line import/no-named-as-default
import DemographicsSearch from '@/components/DemographicsSearch';
import { PopulateFormValues, PopulateInputValues } from '@/type/type';

const defaultFormValues: PopulateFormValues = {
  year: '110',
  city: '',
  district: '',
};

function Home() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<PopulateFormValues>(defaultFormValues);
  const [inputValue, setInputValue] = useState<PopulateInputValues>({ city: '', district: '' });

  const onSubmit = (values: PopulateFormValues) => {
    const { year, city, district } = values;
    router.push(`/${year}/${city}/${district}`);
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
    </Stack>
  );
}

export default Home;
