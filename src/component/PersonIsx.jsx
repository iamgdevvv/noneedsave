import React from 'react'

import './PersonIsx.css'

function PersonIsx(props) {
    const colorTheme = {
        light: function(color) {
            return (color === "blue") ? "#59DCF1" : "#59F1C7";
        },
        dark: function(color) {
            return (color === "blue") ? "#68ABC4" : "#68C4AA";
        }
    }

    const personStyle = {
        lightStyle: {
            fill: colorTheme.light(props.color),
            stroke: colorTheme.light(props.color)
        },
        darkStyle: {
            fill: colorTheme.dark(props.color),
            stroke: colorTheme.dark(props.color)
        },
    };

    return (
        <div className="person-ilustration-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="162.385" height="230.754" viewBox="0 0 162.385 230.754">
            <g transform="translate(702.792 3318.317)">
                <line x2="1.272" y2="9.538" transform="translate(-661.01 -3205.232)" fill="none" stroke="#f5ebdc"   />
                <path d="M1009.737,319.717s14.308-16.851-1.59-31.159a26.208,26.208,0,0,0-21.389-6.308c.442-5.322,1.329-19.077-10.2-27.5s-26.174-3.99-31.5,2.661-3.99,19.077-5.764,27.948-.445,14.626,4.877,17.745,11.535.887,11.535.887l-1.332,7.984a80.506,80.506,0,0,0-19.039,5.2c-9.729,4.324-31.477,16.215-31.477,16.215-.636-2.226-4.133-38.472-5.723-50.236-1.211-8.963-5.405-20.031-8.585-17.805-3.084,2.159-1.908,9.221-1.908,9.221L871.428,291.42s-8.015,57.781,11.128,73.446c13.99,11.446,50.554-6.995,50.554-6.995l-4.769,34.657h43.629s-8.181,2.175-25.188,9.856c-19.713,8.9-31.159,33.7-29.887,35.61s5.087.318,10.174-6.041c-4.451,16.533,0,15.262,2.862,14.944,2.909,4.184,6.677-.954,6.677-.954s5.087,4.769,13.036-17.487a38.6,38.6,0,0,0,9.856-6.677s50.554-3.18,60.411-20.985S1023.091,336.568,1009.737,319.717Z" transform="translate(-1565.029 -3536.237)" fill="#e6e6e6"/>
                <circle cx="1.319" cy="1.319" r="1.319" transform="translate(-622.697 -3257.535)" fill="#1e3127"/>
                <path d="M963.576,540.844l.817,1.828,4.9,10.972c15.071-1.863,43.963-7.065,51.158-20.066,9.856-17.805,3.18-64.226-10.174-81.077h0c-11.128,12.238-28.336,8.9-35.235-1.272a24.307,24.307,0,0,1-3.873.636,23.262,23.262,0,0,1-6.1-.242,15.657,15.657,0,0,1-6.677-2.814,11.4,11.4,0,0,1-3.434-3.939l-.426-.06a79.7,79.7,0,0,0-18.651,5.148c-9.729,4.324-31.477,16.215-31.477,16.215-.286-1-1.148-8.861-2.156-18.282l-12.349,4.769-1.339.518-6.388,2.474-11.615,4.5c.833,14.969,3.958,30.475,12.543,37.5,13.99,11.446,50.554-6.995,50.554-6.995l-4.769,34.657h43.629a133.035,133.035,0,0,0-13.672,4.912l2.118,4.741Z" transform="translate(-1565.565 -3669.021)" fill="#59F1C7" style={personStyle.lightStyle}/>
                <path d="M942.626,567A14.626,14.626,0,0,0,928,581.626a14.827,14.827,0,0,0,.175,2.268c8.337,2.227,19.8-.386,29.023-3.5A14.625,14.625,0,0,0,942.626,567Z" transform="translate(-1604.749 -3752.361)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M889.134,475.242a14.666,14.666,0,0,0-.582-4.082l-6.388,2.474-11.615,4.5c.213,3.838.579,7.71,1.148,11.465a14.626,14.626,0,0,0,17.436-14.352Z" transform="translate(-1565.565 -3686.993)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1033.408,471.865a14.626,14.626,0,0,0,13.354-20.575,62.447,62.447,0,0,0-8.9,3.087c-4.477,1.99-11.5,5.583-17.78,8.883a14.626,14.626,0,0,0,13.328,8.6Z" transform="translate(-1667.552 -3673.44)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <circle cx="14.626" cy="14.626" r="14.626" transform="translate(-613.159 -3197.443)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1063.539,648a14.561,14.561,0,0,0-7.633,2.16L1054,663.9h24.1c.038-.42.061-.843.061-1.272A14.626,14.626,0,0,0,1063.539,648Z" transform="translate(-1690.687 -3807.606)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1249.026,476.752c0,.277-.026.553-.026.833a14.626,14.626,0,0,0,27.436,7.052c-2.248-6.305-4.966-11.764-8.041-15.637h0A22.9,22.9,0,0,1,1249.026,476.752Z" transform="translate(-1823.687 -3685.52)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1292,656.611a14.626,14.626,0,0,0,13.621,14.588,16.809,16.809,0,0,0,2.276-3.141c3.243-5.857,4.7-14.813,4.709-24.8A14.626,14.626,0,0,0,1292,656.611Z" transform="translate(-1853.015 -3803.499)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1173.263,734a14.571,14.571,0,0,0-10.133,4.086l.817,1.828,4.9,10.972a191.259,191.259,0,0,0,19-3.288A14.626,14.626,0,0,0,1173.263,734Z" transform="translate(-1765.12 -3866.263)" fill="#68C4AA" style={personStyle.darkStyle}/>
                <path d="M1214.185,669.5c-8.547,2.912-20.072,6.454-27.185,8.744" transform="translate(-1781.4 -3822.271)" fill="none" stroke="#f5ebdc"   />
                <line x2="3.017" y2="32.812" transform="translate(-576.274 -3183.675)" fill="none" stroke="#f5ebdc"   />
                <path d="M1047.31,794.439a149.332,149.332,0,0,1,5.218-14.069" transform="translate(-1686.124 -3897.89)" fill="none" stroke="#1e3127"   />
                <path d="M1066.1,788.74a126.007,126.007,0,0,0-8,24.921" transform="translate(-1693.484 -3903.598)" fill="none" stroke="#1e3127"   />
                <path d="M1088.252,798.5a154.258,154.258,0,0,0-6.772,21.156" transform="translate(-1709.43 -3910.255)" fill="none" stroke="#1e3127"   />
                <line x1="1.73" y2="11.542" transform="translate(-632.621 -3189.669)" fill="none" stroke="#f5ebdc"   />
                <path d="M1161.4,288.558a26.208,26.208,0,0,0-21.388-6.308c.442-5.322,1.329-19.077-10.2-27.5s-26.173-3.99-31.5,2.661c-2.168,2.712-3.234,6.384-3.854,10.381,3.542.6,8.734-.62,8.734-.62,7.1,7.984,14.625,9.758,14.625,9.758,4.881-5.323,13.751-5.323,15.084,2.226,1.472,8.346-8.874,10.645-8.874,10.645a56.908,56.908,0,0,0,1.431,23.884,17.565,17.565,0,0,0,2.283,4.769c6.9,10.174,24.11,13.513,35.235,1.272a22.455,22.455,0,0,0,1.529-2.124C1167.728,312.624,1173.9,299.807,1161.4,288.558Z" transform="translate(-1718.283 -3536.237)" fill="#828d87"/>
                <path d="M1139.92,415.98a28.5,28.5,0,0,0,5.907-2.48" transform="translate(-1749.289 -3647.666)" fill="none" stroke="#1e3127"   />
                <path d="M1237.384,350.87c-.242,2.426-.566,5.447-.884,7.831" transform="translate(-1815.161 -3604.949)" fill="none" stroke="#1e3127"   />
                <line y1="2.2" x2="3.958" transform="translate(-595.551 -3255.777)" fill="none" stroke="#1e3127"   />
                <path d="M1112.62,382.148c.728.455,3.453.808,4.559-1.288" transform="translate(-1730.669 -3625.404)" fill="none" stroke="#1e3127"   />
                <circle cx="1.319" cy="1.319" r="1.319" transform="translate(-612.202 -3255.787)" fill="#1e3127"/>
                <path d="M1111.5,359.76a5.4,5.4,0,0,0-.232,2.162,1.929,1.929,0,0,0,.9.9" transform="translate(-1729.713 -3611.012)" fill="none" stroke="#1e3127"   />
                <ellipse cx="6.359" cy="5.723" rx="6.359" ry="5.723" transform="translate(-631.322 -3251.371) rotate(-76.95)" fill="none" stroke="#1e3127"   />
                <ellipse cx="6.359" cy="5.723" rx="6.359" ry="5.723" transform="translate(-617.331 -3249.147) rotate(-76.95)" fill="none" stroke="#1e3127"   />
                <line x2="2.226" y2="0.318" transform="translate(-618.405 -3255.469)" fill="none" stroke="#1e3127"   />
                <path d="M913.5,332.5s6.041,5.087,6.677,6.359c0,0-9.856,10.174-2.226,22.574" transform="translate(-1594.859 -3592.419)" fill="none" stroke="#1e3127"   />
                <rect width="5.069" height="97.358" rx="2.535" transform="matrix(0.853, 0.522, -0.522, 0.853, -651.985, -3297.665)" fill="#1e3127"/>
                <path d="M991.652,153.851l5.475-4.381a2.8,2.8,0,0,1,4.5,2.709l-1.313,6.9a2.8,2.8,0,0,0,1.211,2.862l5.857,3.854a2.8,2.8,0,0,1-1.186,5.116l-6.941.887a2.8,2.8,0,0,0-2.35,2.038l-1.854,6.76a2.8,2.8,0,0,1-5.234.452l-2.985-6.359a2.8,2.8,0,0,0-2.664-1.59l-6.995.318a2.8,2.8,0,0,1-2.083-4.839l5.109-4.8a2.8,2.8,0,0,0,.7-3.03l-2.474-6.559a2.8,2.8,0,0,1,3.974-3.443l6.146,3.38a2.8,2.8,0,0,0,3.1-.267Z" transform="translate(-1636.26 -3467.163)" fill="#59F1C7" style={personStyle.lightStyle}/>
                <path d="M878.627,321.842c-2.226-1.908-6.5-3.145-8.585-1.908-3.516,2.089-2.652,6.146-2.652,6.146s-5.723-.89-5.653,4.973c0,0-4.607,2.016-2.591,6.623,0,0-3.987,1.008-2.092,5.917,1.542,4,5.1,6.1,7.265,7.182,1.908.954,4.833-.423,3.815-4.133,0,0,2.226.636,3.5-.636,1.755-1.755.954-5.087.954-5.087a4.66,4.66,0,0,0,3.815-.636c1.939-1.552.954-4.451.954-4.451a3.955,3.955,0,0,0,3.179-2.544c1.272-3.179-3.5-6.995-3.5-6.995Z" transform="translate(-1556.012 -3583.51)" fill="#e6e6e6"/>
                <path d="M864,377.37a77.112,77.112,0,0,0,9.22,9.421" transform="translate(-1561.098 -3623.023)" fill="none" stroke="#1e3127"   />
                <path d="M873,355.88a65.59,65.59,0,0,0,11.147,10.744" transform="translate(-1567.236 -3608.366)" fill="none" stroke="#1e3127"   />
                <path d="M889,341.17a46.566,46.566,0,0,0,10.712,10.2" transform="translate(-1578.149 -3598.333)" fill="none" stroke="#1e3127"   />
                <path d="M913.5,332.5s2.979,2.509,4.973,4.451" transform="translate(-1594.859 -3592.419)" fill="none" stroke="#1e3127"   />
                <path d="M1142.315,242.72l-1.679,1.847-1.116,1.227h0c-.709,2.48,4.451,6.432,11.627,8.88s13.672,2.47,14.626.073h0l-.133-1.653-.2-2.49c-2.7.636-7.367.124-12.371-1.59S1144.054,244.882,1142.315,242.72Z" transform="translate(-1748.972 -3531.186)" fill="#e6e6e6"/>
                <path d="M1161.143,234.768a30.8,30.8,0,0,1-9.049-4.648l-3.644,4.006c1.739,2.162,5.758,4.6,10.759,6.3s9.675,2.226,12.371,1.59l-.436-5.405A30.993,30.993,0,0,1,1161.143,234.768Z" transform="translate(-1755.107 -3522.591)" fill="#59F1C7" style={personStyle.lightStyle}/>
                <path d="M1163.808,216.64l-3.9,4.286a35.007,35.007,0,0,0,19.052,6.5l-.467-5.777A37.5,37.5,0,0,1,1163.808,216.64Z" transform="translate(-1762.923 -3513.398)" fill="#e6e6e6"/>
                <path d="M1181.184,204.666a37.914,37.914,0,0,1-4.953-2.076l-4.06,4.451a37.5,37.5,0,0,0,14.686,5.008l-.486-6.016A38.4,38.4,0,0,1,1181.184,204.666Z" transform="translate(-1771.285 -3503.814)" fill="#59F1C7" style={personStyle.lightStyle}/>
                <path d="M1195.079,184.688,1194,171.27l-9.055,9.958a37.927,37.927,0,0,0,4.954,2.076,38.409,38.409,0,0,0,5.186,1.383Z" transform="translate(-1779.995 -3482.453)" fill="#e6e6e6"/>
                <circle cx="4.896" cy="4.896" r="4.896" transform="translate(-590.133 -3318.317)" fill="#68C4AA" style={personStyle.darkStyle}/>
            </g>
            </svg>
        </div>
    )
}

export default PersonIsx