import Image from "next/image";
import React from "react";

const MRFImage = ({
  children,
  src,
  alt,
  quality = 100,
  classNames = "",
  bgImage = false,
  loading = "lazy",
  priority = false,
  placeholder = "blur",
  blurDataURL = "/images/blur-bg.jpg",
  ...rest
}) => {
  if (bgImage) {
    return (
      <div className={`relative ${classNames}`}>
        <div className="absolute w-full h-full">
          <Image
            alt={alt}
            src={src}
            placeholder={placeholder}
            loading={loading}
            priority={priority}
            blurDataURL={blurDataURL}
            quality={quality}
            fill
            style={{
              objectFit: "cover",
            }}
            {...rest}
          />
        </div>
        <div className="relative z-[1]">{children}</div>
      </div>
    );
  } else {
    return (
      <Image
        className={classNames}
        alt={alt}
        src={src}
        width={1000}
        height={1000}
        placeholder={placeholder}
        loading={loading}
        priority={priority}
        blurDataURL={blurDataURL}
        quality={quality}
        style={{
          width: "100%",
        }}
        {...rest}
      />
    );
  }
};

export default MRFImage;
