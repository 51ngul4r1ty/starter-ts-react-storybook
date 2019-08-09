import * as React from 'react';

import scss from './HamburgerIcon.module.scss';

export const HamburgerIcon: React.FC<{}> = () => (
    <svg
        stroke-width="0.501"
        stroke-linejoin="bevel"
        fill-rule="evenodd"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        overflow="visible"
        width="75px"
        height="75px"
        viewBox="0 0 75 75"
    >
        <defs></defs>
        <g
            id="Document"
            className={scss.stroke}
            fill="none"
            stroke="black"
            transform="scale(1 -1)"
        >
            <g id="Spread" transform="translate(0 -75)">
                <g id="Layer 1">
                    <g
                        id="Group"
                        className={scss.fill}
                        fill="#006aa2"
                        stroke-linejoin="miter"
                        stroke-linecap="round"
                        stroke-width="0.048"
                        stroke-miterlimit="79.8403193612775"
                    >
                        <path
                            d="M 21.092,47.4 C 20.234,47.4 19.524,47.818 19.524,48.337 L 19.524,53.072 C 19.524,53.578 20.234,54 21.092,54 L 53.925,54 C 54.775,54 55.476,53.578 55.476,53.072 L 55.476,48.337 C 55.476,47.818 54.775,47.4 53.925,47.4 L 21.092,47.4 Z"
                            stroke="none"
                            marker-start="none"
                            marker-end="none"
                        />
                        <path
                            d="M 21.092,21 C 20.234,21 19.524,21.418 19.524,21.937 L 19.524,26.672 C 19.524,27.178 20.234,27.6 21.092,27.6 L 53.925,27.6 C 54.775,27.6 55.476,27.178 55.476,26.672 L 55.476,21.937 C 55.476,21.418 54.775,21 53.925,21 L 21.092,21 Z"
                            stroke="none"
                            marker-start="none"
                            marker-end="none"
                        />
                        <path
                            d="M 21.092,34.2 C 20.234,34.2 19.524,34.618 19.524,35.137 L 19.524,39.872 C 19.524,40.378 20.234,40.8 21.092,40.8 L 53.925,40.8 C 54.775,40.8 55.476,40.378 55.476,39.872 L 55.476,35.137 C 55.476,34.618 54.775,34.2 53.925,34.2 L 21.092,34.2 Z"
                            className={scss.stroke}
                            stroke="#006aa2"
                            marker-start="none"
                            marker-end="none"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
