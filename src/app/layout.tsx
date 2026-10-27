import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono, Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  axes: ["opsz", "wdth"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-accent",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Code Crunch",
    template: "%s | Code Crunch",
  },
  description:
    "A student-led technology community bridging campus and industry in Maharashtra, India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${dmMono.variable} ${bricolageGrotesque.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
