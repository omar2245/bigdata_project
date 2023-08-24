import React from 'react';
import { Chip, Divider, Stack, Typography } from '@mui/material';

import { FormProps } from '@/type/type';
import CitySelectForm from './CitySelectForm';

function DemographicsForm({ defaultFormValues, onSubmit }: FormProps) {
  return (
    <Stack pt={3} spacing={6} alignItems="center">
      <Typography variant="h4" textAlign="center">
        人口數、戶數按戶別及性別統計
      </Typography>

      <CitySelectForm defaultFormValues={defaultFormValues} onSubmit={onSubmit} />

      <Divider
        flexItem
        sx={{
          '::before': { bgcolor: 'secondary.light' },
          '::after': { bgcolor: 'secondary.light' },
        }}
      >
        <Chip label="搜尋結果" variant="outlined" color="secondary" />
      </Divider>
    </Stack>
  );
}

export default DemographicsForm;
