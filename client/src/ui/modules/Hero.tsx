import type { CSSProperties } from "react";
import { PortableText } from "@portabletext/react";
import { stegaClean } from "@sanity/client/stega";
import { cn } from "@/lib/utils";
import type { TypedObject } from "@portabletext/types";

export type HeroType = {
  pretitle: string;
  content: TypedObject;
  ctas: Sanity.CTA[];
  headlineColor?: string;
  bgImage: Sanity.Image;
  bgImageMobile: Sanity.Image;
  textAlign: React.CSSProperties["textAlign"];
  alignItems: React.CSSProperties["alignItems"];
};

export const Hero = ({
  content,
  bgImage,
  textAlign = "center",
  alignItems,
  headlineColor = "",
}: Partial<HeroType>) => {
  const hasImage = !!bgImage?.asset;

  const styles = {
    "--headline-color": headlineColor,
  } as CSSProperties;

  return (
    <section
      className={cn(
        hasImage &&
          "grid bg-ink-black text-tertiary-canvas *:col-span-full *:row-span-full"
      )}
      style={styles}
    >
      {bgImage && <picture></picture>}
      {content && (
        <div className="container flex w-full flex-col">
          <div
            className={cn(
              "richtext md:max-w-1000 [&_:is(h1,h2)]:text-balance",
              bgImage?.asset,
              {
                "mb-8": stegaClean(alignItems) === "start",
                "my-auto": stegaClean(alignItems) === "center",
                "mt-auto": stegaClean(alignItems) === "end",
              }
            )}
            style={{ textAlign: stegaClean(textAlign) }}
          >
            <PortableText value={content} />
          </div>
        </div>
      )}
    </section>
  );
};
