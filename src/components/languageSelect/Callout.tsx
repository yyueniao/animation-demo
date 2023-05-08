import Image from "next/image";

export default function Callout() {
  return (
    <Image
      className="fixed"
      src="/languageSelect/callout.png"
      alt="select your preferred language"
      width={1080}
      height={1920}
    />
  );
}
