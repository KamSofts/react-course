import { useState } from "react";

const Button1 = () => {
    const [hover, setHover] = useState(false);

    const styles = {
        backgroundColor: hover ? "#0000a0" : "#0000d0",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return (<button style={styles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>INLINE CSS</button>);
}

export default Button1
