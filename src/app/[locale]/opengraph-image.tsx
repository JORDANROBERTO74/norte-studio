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
          backgroundColor: "#0D1013",
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
            backgroundColor: "#F15A24",
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
              backgroundColor: "#F15A24",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#F5F2EB",
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
              color: "#F5F2EB",
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
              color: "#F5F2EB",
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
            color: "#F5F2EB",
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
