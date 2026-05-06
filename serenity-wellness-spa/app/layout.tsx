export const metadata = {
  title: 'Serenity Wellness Spa',
  description: 'Deep tissue massage in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
