import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import ChatbotScript from "@/components/chatbootscript/ChatBootScript";

export const metadata = {
  title: "LuxHunt",
  description: "A description for luxhunt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={"relative"}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </body>
      </ThemeProvider>
      <ChatbotScript />
    </html>
  );
}
