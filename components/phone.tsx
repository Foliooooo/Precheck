import Image from "next/image";

/** A phone frame around a real PreCheck screen. */
export function Phone({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <Image src={src} alt={alt} width={822} height={1782} priority={priority} sizes="(max-width: 720px) 70vw, 300px" />
    </div>
  );
}
