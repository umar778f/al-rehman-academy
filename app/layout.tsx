import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AL REHMAN ACADEMY | Professional Home & Online Tuition',
  description: 'Expert Home and Online Tutoring Services. Connect with qualified tutors for all subjects and grades.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
