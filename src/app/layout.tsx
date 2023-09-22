import { ThemeProvider } from "@/provider/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReduxProvider } from "@/provider/redux-provider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-Josefin",
});

// export const metadata: Metadata = {
//     title: "EduMastery",
//     description:
//         "EduMastery: Your Path to Knowledge Excellence. Explore a world of online learning with our expertly curated courses in diverse fields. Master new skills and unlock your potential today!",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${josefin.variable} bg-no-repeat bg-gradient-to-r from-violet-200 to-pink-200 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 duration-300 dark:to-black  text-black dark:text-white`}
            >
                <ReduxProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        {children}
                        <ToastContainer />
                    </ThemeProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
