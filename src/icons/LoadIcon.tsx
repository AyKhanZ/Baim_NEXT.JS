import * as React from "react"
import { SVGProps } from "react"

interface Props {
    width?: number,
    height?: number
}

const LoadIcon = ({width,height}:Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
    >
        <path
            stroke="#0C8985"
            strokeMiterlimit={10}
            strokeWidth={21}
            d="M293.39 427.84c78.336 0 141.84-64.229 141.84-143.46 0-79.231-63.504-143.46-141.84-143.46-78.336 0-141.84 64.229-141.84 143.46 0 79.231 63.504 143.46 141.84 143.46Z"
        />
        <path
            stroke="#0C8985"
            strokeMiterlimit={10}
            strokeWidth={21}
            d="M293.39 140.95v-118c0-8.94 1.73-10.68 17.13-11.63 15.4-.95 142-5.25 212.18 87.87M303.22 427.83v118c0 8.93-1.74 10.68-17.14 11.63-15.4.95-142 5.25-212.17-87.87"
        />
        <path
            stroke="#0C8985"
            strokeMiterlimit={10}
            strokeWidth={21}
            d="M526.8 184.02c23.538 0 42.62-19.297 42.62-43.1s-19.082-43.1-42.62-43.1c-23.538 0-42.62 19.297-42.62 43.1s19.082 43.1 42.62 43.1ZM53.62 479.27c23.538 0 42.62-19.297 42.62-43.1s-19.082-43.1-42.62-43.1c-23.538 0-42.62 19.297-42.62 43.1s19.082 43.1 42.62 43.1ZM293.39 327.48c23.538 0 42.62-19.297 42.62-43.1s-19.082-43.1-42.62-43.1c-23.538 0-42.62 19.297-42.62 43.1s19.082 43.1 42.62 43.1Z"
        />
    </svg>
)
export default LoadIcon