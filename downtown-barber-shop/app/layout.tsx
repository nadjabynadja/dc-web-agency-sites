export const metadata = {
  title: 'Downtown Barber Shop',
  description: 'Classic haircuts in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
