import React from "react";
import CoverImage from "../components/cover-image";

export default function HeroPost({
  title,
  coverImage,
  slug,
}) {
  return (
    <section>
      <div className="mb-6 md:mb-10">
        <CoverImage title={title} fluid={coverImage.small} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-20">
        <div>
          <h3 className="mb-4 text-4xl lg:text-4xl leading-tight">
              {title}
          </h3>

        </div>

      </div>
    </section>
  );
}
