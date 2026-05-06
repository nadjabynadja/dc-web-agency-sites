export const metadata = {
  title: 'The Grooming Room',
  description: 'Precision haircuts in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
