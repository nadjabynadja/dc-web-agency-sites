export const metadata = {
  title: 'Petcare Plus Grooming',
  description: 'Full grooming in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
