import React, { useEffect } from "react";

const ScrollspyNav = ({ scrollTargetIds, activeNavClass, scrollDuration, headerBackground, router, children }) => {
  const hashIdentifier = router && router === "HashRouter" ? "#/#" : "#";
  const homeDefaultLink = router && router === "HashRouter" ? "#/" : "/";

  const easeInOutQuad = (current_time, start, change, duration) => {
    current_time /= duration / 2;
    if (current_time < 1) return (change / 2) * current_time * current_time + start;
    current_time--;
    return (-change / 2) * (current_time * (current_time - 2) - 1) + start;
  };

  const scrollTo = (start, to, duration) => {
    let change = to - start,
      currentTime = 0,
      increment = 10;

    const animateScroll = () => {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const getNavLinkElement = (sectionID) => {
    return document.querySelector(`a[href='${hashIdentifier}${sectionID}']`);
  };

  const getNavToSectionID = (navHref) => {
    return navHref.includes(hashIdentifier) ? navHref.replace(hashIdentifier, "") : "";
  };

  const scrollSection = () => {
    let scrollSectionOffsetTop;
    scrollTargetIds.forEach((sectionID, index) => {
      scrollSectionOffsetTop =
        document.getElementById(sectionID).offsetTop -
        (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);

      if (
        window.pageYOffset >= scrollSectionOffsetTop &&
        window.pageYOffset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight
      ) {
        getNavLinkElement(sectionID).classList.add(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
        clearOtherNavLinkActiveStyle(sectionID);
      } else {
        getNavLinkElement(sectionID).classList.remove(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
      }

      if (
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight &&
        index === scrollTargetIds.length - 1
      ) {
        getNavLinkElement(sectionID).classList.add(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
        clearOtherNavLinkActiveStyle(sectionID);
      }
    });
  };

  const clearOtherNavLinkActiveStyle = (excludeSectionID) => {
    scrollTargetIds.forEach((sectionID) => {
      if (sectionID !== excludeSectionID) {
        getNavLinkElement(sectionID).classList.remove(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
      }
    });
  };

  useEffect(() => {
    if (document.querySelector(`a[href='${homeDefaultLink}']`)) {
      document.querySelector(`a[href='${homeDefaultLink}']`).addEventListener("click", (event) => {
        event.preventDefault();
        scrollTo(window.pageYOffset, 0, scrollDuration);
        window.location.hash = "";
      });
    }

    document
      .querySelector("div[data-nav='list']")
      .querySelectorAll("a")
      .forEach((navLink) => {
        navLink.addEventListener("click", (event) => {
          event.preventDefault();
          let sectionID = getNavToSectionID(navLink.getAttribute("href"));

          if (sectionID) {
            let scrollTargetPosition =
              document.getElementById(sectionID).offsetTop -
              (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
            scrollTo(window.pageYOffset, scrollTargetPosition, scrollDuration);
          } else {
            scrollTo(window.pageYOffset, 0, scrollDuration);
          }
        });
      });

    window.addEventListener("scroll", scrollSection, true);

    return () => {
      window.removeEventListener("scroll", scrollSection, true);
    };
  }, [scrollTargetIds, activeNavClass, scrollDuration, headerBackground, homeDefaultLink, hashIdentifier]);

  return (
    <div data-nav="list" className="navbar-collapse  justify-content-end">
      {children}
    </div>
  );
};

export default ScrollspyNav;
