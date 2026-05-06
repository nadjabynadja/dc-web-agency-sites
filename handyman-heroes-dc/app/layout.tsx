export const metadata = {
  title: 'Handyman Heroes DC',
  description: 'Drywall repair in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
