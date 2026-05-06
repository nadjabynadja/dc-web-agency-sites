export const metadata = {
  title: 'Bella Boutique DC',
  description: 'Women's clothing in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
