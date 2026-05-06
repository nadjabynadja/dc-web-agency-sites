export const metadata = {
  title: 'Marco's Pizzeria',
  description: 'Neapolitan pizza in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
