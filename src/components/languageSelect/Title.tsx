import Image from "next/image";

export default function Title() {
  return (
    <Image
      className="fixed"
      src="/languageSelect/title.png"
      alt="Select your language"
      width={1080}
      height={1920}
    />
  );
}
