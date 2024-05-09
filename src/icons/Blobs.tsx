import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" {...props}>
        <path fill="#fff" d="M0 0h900v600H0z" />
        <path
            fill="#b9e9e8"
            d="M683.7 600c2.8-34.1 5.6-68.2 33.4-75.8 27.8-7.5 80.6 11.5 96.6-10.5 16.1-22-4.7-85 3.5-113.6 8.3-28.5 45.5-22.5 82.8-16.4V600Z"
        />
        <path
            fill="#66d3d1"
            d="M791.8 600c1.4-17.1 2.8-34.1 16.7-37.9 13.9-3.8 40.4 5.8 48.4-5.2s-2.4-42.6 1.7-56.8c4.1-14.3 22.8-11.3 41.4-8.3V600Z"
        />
        <path
            fill="#b9e9e8"
            d="M216.3 0c-14.9 24-29.9 48-39.8 73.1-10 25.1-15 51.3-29.4 74-14.4 22.7-38.2 41.8-64.3 52.8-26.1 10.9-54.4 13.7-82.8 16.4V0Z"
        />
        <path
            fill="#66d3d1"
            d="M108.2 0c-7.5 12-15 24-20 36.5-5 12.6-7.5 25.7-14.7 37-7.2 11.4-19.1 21-32.1 26.4-13 5.5-27.2 6.9-41.4 8.3V0Z"
        />
    </svg>
)
export default SvgComponent
