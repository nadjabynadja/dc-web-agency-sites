export const metadata = {
  title: 'Bella Nails Studio',
  description: 'Gel manicures in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
