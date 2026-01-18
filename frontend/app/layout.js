import "./globals.css";

export const metadata = {
  title: "Meeting Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
