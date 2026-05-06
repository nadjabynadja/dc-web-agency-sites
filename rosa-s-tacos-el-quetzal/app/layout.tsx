export const metadata = {
  title: 'Rosa's Tacos El Quetzal',
  description: 'Al pastor tacos in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
