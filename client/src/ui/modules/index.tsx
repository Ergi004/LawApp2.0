import { Hero } from "./Hero";

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
  return (
    <>
      {modules?.map((module) => {
        switch (module._type) {
          case "hero":
            return <Hero {...module} key={module._key} />;
        }
      })}
    </>
  );
}
