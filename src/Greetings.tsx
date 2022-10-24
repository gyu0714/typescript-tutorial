import React from "react";

type GrettingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무것도 리턴하지 않는다
}

function Grettings({ name, mark, optional, onClick }: GrettingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>
                    Click!!
                </button>
            </div>
        </div>
    );
}

Grettings.defaultProps = {
    mark: '!'
}

export default Grettings;