export const metadata = {
  title: 'East Side Automotive',
  description: 'General maintenance in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
