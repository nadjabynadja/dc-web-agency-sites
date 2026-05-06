export const metadata = {
  title: 'Capitol Electric Solutions',
  description: 'Panel upgrades in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
