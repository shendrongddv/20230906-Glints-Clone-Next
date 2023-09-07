import Image from "next/image";
import { type } from "os";

type CardBannerProps = {
  label: string;
  media: string;
  url?: string;
};
export const CardBanner = ({ label, media, url }: CardBannerProps) => {
  return (
    <>
      <Image
        src={`/${media}`}
        alt={label}
        priority
        width={2880}
        height={500}
        className="h-auto w-full"
      />
    </>
  );
};
