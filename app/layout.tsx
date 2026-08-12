import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Al Rehman Academy | Home & Online Tuition in Jeddah & Lahore',
  description: 'Al Rehman Academy offers quality home and online tuition for students in Jeddah and Lahore. Find experienced tutors and flexible learning options.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
