import "./globals.css";
import {
  cabinet,
  fraunces,
  inter,
  manrope,
  spaceGrotesk,
  spaceMono,
} from "./fonts/styles/FontStyle";
import { themeScript } from "@/lib/theme";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata = {
  title: "Jibon Roy — Full-Stack Developer",
  description:
    "Engineering ideas into production-ready products. Full-Stack Developer focused on modern secure web applications, APIs, and scalable systems.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${spaceMono.variable} ${cabinet.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}