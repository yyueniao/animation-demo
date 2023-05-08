import Image from "next/image";

export default function Characters() {
  return (
    <>
      <Image
        className="fixed"
        src="/global/main_character.png"
        alt="main character"
        width={1080}
        height={1920}
      />
      <Image
        className="fixed"
        src="/global/character1.png"
        alt="character 1"
        width={1080}
        height={1920}
      />
      <Image
        className="fixed"
        src="/global/character2.png"
        alt="character 2"
        width={1080}
        height={1920}
      />
      <Image
        className="fixed"
        src="/global/character3.png"
        alt="character 3"
        width={1080}
        height={1920}
      />
      <Image
        className="fixed"
        src="/global/character4.png"
        alt="character 4"
        width={1080}
        height={1920}
      />
      <Image
        className="fixed"
        src="/global/character5.png"
        alt="character 5"
        width={1080}
        height={1920}
      />
    </>
  );
}
