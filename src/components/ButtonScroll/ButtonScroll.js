import React, { useCallback, useEffect, useState } from 'react';

import { Span } from "./styles"

const ButtonScroll = ({
  showBelow,
}) => {
  const [show, setShow] = useState(showBelow ? false : true)
  const [NavBar, setNavBar] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }, [show, showBelow])

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  }, [handleScroll, showBelow])

  return (
    <div>
      {NavBar &&
        <Span onClick={handleClick} aria-label="to top">
          <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
        </Span>
      }
    </div>
  )
}

export default ButtonScroll;