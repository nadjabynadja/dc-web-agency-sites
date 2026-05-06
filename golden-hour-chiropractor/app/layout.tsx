export const metadata = {
  title: 'Golden Hour Chiropractor',
  description: 'Spinal adjustments in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
