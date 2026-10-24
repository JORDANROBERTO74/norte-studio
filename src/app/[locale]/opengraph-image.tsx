import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export const alt = "Norte Studio — independent digital studio in Valencia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#102a2b",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 999,
            backgroundColor: "#2f8f83",
            opacity: 0.14,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              transform: "rotate(45deg)",
              backgroundColor: "#2f8f83",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#f4efe6",
              display: "flex",
            }}
          >
            Norte Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 1,
              color: "#f4efe6",
              fontFamily: "Georgia, serif",
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Design that earns
            <br />
            its keep.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 38,
              color: "#f4efe6",
              opacity: 0.7,
              maxWidth: 780,
              display: "flex",
            }}
          >
            {dict.common.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#f4efe6",
            opacity: 0.5,
          }}
        >
          {dict.footer.note}
        </div>
      </div>
    ),
    size,
  );
}
