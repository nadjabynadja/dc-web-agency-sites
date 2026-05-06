export const metadata = {
  title: 'Dr. Chen's Dental Practice',
  description: 'General dentistry in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
