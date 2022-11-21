import React from 'react';

type btnStyleprops = {
    btnStyle: React.CSSProperties;
}


const ButtonStyle = (props: btnStyleprops) => {
    return (
        <div style={props.btnStyle}>
            Button style
        </div>
    );
};

export default ButtonStyle;