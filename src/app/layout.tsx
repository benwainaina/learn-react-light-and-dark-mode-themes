"use client";

import "./globals.css";

import "./app.scss";
import { Provider } from "react-redux";
import { STORE } from "./state-manager/store";
import { HeaderSharedComponent } from "./shared/header/header.shared";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={STORE}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body className="body-wrapper light">
          <HeaderSharedComponent />
          <div className="content">
            <div className="content__inner">{children}</div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
