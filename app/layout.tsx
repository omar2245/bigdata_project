import './globals.css';
import IconButton from '@/components/IconButton';

import { Ubuntu } from 'next/font/google';
import React from 'react';
import theme from '@/styles/theme';
import { SettingsOutlined } from '@mui/icons-material';
import { Stack, ThemeProvider, Typography } from '@mui/material';

export const metadata = {
  title: 'Dig Data Project',
  description: 'Generated by Next.js',
};

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <main className={ubuntu.className}>
          <ThemeProvider theme={theme}>
            <Stack
              px={2}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                height: '48px',
                backgroundColor: 'primary.main',
                boxShadow: '0px 7px 10px 0px rgba(0, 0, 0, 0.20);',
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
                LOGO
              </Typography>

              <IconButton icon={<SettingsOutlined />} />
            </Stack>

            <Stack direction="row" position="relative">
              <Typography
                ml="-5px"
                sx={{
                  fontSize: '200px',
                  fontWeight: 700,
                  lineHeight: '74.4%',
                  letterSpacing: '36px',
                  background:
                    '-webkit-linear-gradient(267deg, #E60000 0%, #FC0 30.91%, #007F00 65.63%, #00C 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  writingMode: 'vertical-lr',
                  opacity: { xs: 0.2, sm: 0.2, md: 1 },
                }}
              >
                TAIWAN
              </Typography>
              <Stack
                pt={1}
                width="100%"
                position={{ xs: 'absolute', sm: 'absolute', md: 'static' }}
                left={0}
              >
                {children}
              </Stack>
            </Stack>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
