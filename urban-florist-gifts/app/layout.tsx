export const metadata = {
  title: 'Urban Florist & Gifts',
  description: 'Fresh arrangements in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
