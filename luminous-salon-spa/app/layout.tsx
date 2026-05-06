export const metadata = {
  title: 'Luminous Salon & Spa',
  description: 'Balayage highlights in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
