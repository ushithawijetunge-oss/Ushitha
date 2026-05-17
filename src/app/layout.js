import "./globals.css";

export const metadata = {
  title: "Ushitha Wijetunge Portfolio",
  description: "Finance & Business Analytics Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
