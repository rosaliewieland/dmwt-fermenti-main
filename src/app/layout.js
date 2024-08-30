import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Fermenti",
    description: "Eine Internetseite die Menschen verbindet",
};

export default function RootLayout({children}) {
    return (
        <html lang="de">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
