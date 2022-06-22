import React from "react"
import HeroImageGroup from "./style";
export default function ImageGroup() {
  return (
    <>
      <HeroImageGroup className="main-imagegroup">
        <HeroImageGroup.Inner className="imagegroup">
            {<img
              src="image/marketing/home-page-hero-banner.png"
              className="welcome-image--group-01__main ipad-cls"
              alt="hero image main"
            />}
          <div className="welcome-image--group-01__img-5">
            <img
                src="image/marketing/l1-hero-shape-1.png"
                className="w-100"
                alt="hero image"
              />
          </div>
        </HeroImageGroup.Inner>
      </HeroImageGroup>
    </>
  )
}
