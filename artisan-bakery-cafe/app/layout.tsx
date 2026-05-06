export const metadata = {
  title: 'Artisan Bakery & Cafe',
  description: 'Sourdough bread in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
