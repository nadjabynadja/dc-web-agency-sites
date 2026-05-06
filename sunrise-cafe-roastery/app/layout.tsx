export const metadata = {
  title: 'Sunrise Cafe & Roastery',
  description: 'Single-origin espresso in Washington DC'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
