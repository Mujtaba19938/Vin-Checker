'use client';

import dynamic from 'next/dynamic';

// Dynamically import the modal to avoid SSR issues with animations
const AppointmentModal = dynamic(
  () => import('@/components/appointment-modal'),
  { ssr: false }
);

export default function AppointmentModalWrapper() {
  return <AppointmentModal />;
}

