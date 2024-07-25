import { Crimson_Pro, PT_Serif } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { gtmConfig } from "@/config";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {gtmConfig.containerId && (
        <GoogleTagManager gtmId={gtmConfig.containerId} />
      )}

      <body className="flex min-h-screen flex-col bg-tertiary-white text-ink-black">
        {/* <AppProvider lang={params?.lang ?? "en"}> */}
        {/* <Header
          title={title}
          ctas={ctas}
          logo={logo}
          headerMenu={headerMenu}
          lang={params?.lang ?? "en"}
        /> */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        {/* <Footer
            title={title}
            copyright={copyright}
            footerMenu={footerMenu}
            social={social}
          /> */}
        {/* </AppProvider> */}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
