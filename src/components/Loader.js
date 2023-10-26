import { useSelector } from "react-redux"
import { getLoader } from "../redux/contacts/selectors"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
const override = css`
  margin: 20px 0;
  position: fixed
  width: 500px
`;

export function Loader() {
    const loader = useSelector(getLoader)
    const [position, setPosition] = useState({ x: 0, y: 0 })

useEffect(() => {
    function setFromEvent(event) {
      setPosition({ x: event.pageX, y: event.pageY });
    }
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

    const style = {
        position: "absolute",
        left: position.x + 20,
        top: position.y - 20,
    };

    return <>{loader &&
            <div style={style} ><ClipLoader loading={loader}
            css={override}
            size={30}
            color={"#70bbff"}
        /></div>}</>
}