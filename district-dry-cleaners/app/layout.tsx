export const metadata = {
  title: 'District Dry Cleaners',
  description: 'Suit cleaning in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
