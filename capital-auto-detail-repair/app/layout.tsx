export const metadata = {
  title: 'Capital Auto Detail & Repair',
  description: 'Oil changes in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
