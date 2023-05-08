import Image from "next/image";
import style from "@/styles/languageSelectFooter.module.css";

export default function Footer() {
  return (
    <>
      <Image
        className="fixed"
        src="/global/footer_background.png"
        alt="footer background"
        width={1080}
        height={1920}
      />
      <div className={style.buttonGroup}>
        <Image
          className={`${style.button} ${style.first}`}
          src="/languageSelect/button_english.png"
          alt="button-english"
          width={333}
          height={83}
        />
        <Image
          className={`${style.button} ${style.second}`}
          src="/languageSelect/button_chinese.png"
          alt="button-chinese"
          width={333}
          height={83}
        />
        <Image
          className={`${style.button} ${style.third}`}
          src="/languageSelect/button_malay.png"
          alt="button-malay"
          width={333}
          height={83}
        />
        <Image
          className={`${style.button} ${style.forth}`}
          src="/languageSelect/button_tamil.png"
          alt="button-tamil"
          width={333}
          height={83}
        />
      </div>
    </>
  );
}
