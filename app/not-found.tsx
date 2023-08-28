'use client';

import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import React from 'react';

function ErrorPage() {
  const router = useRouter();

  return (
    <Stack justifyContent="center" alignItems="center" height="80vh" spacing={3}>
      <Typography variant="h4" fontWeight={700}>
        此頁面不存在
      </Typography>

      <Button variant="outlined" onClick={() => router.replace('/')}>
        返回主頁面
      </Button>
    </Stack>
  );
}

export default ErrorPage;
