import * as React from 'react'
import { styled } from '@mui/material/styles';
import {useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types';



const Svg = styled('svg')({
    // display: 'block',
    margin: '20px, auto',
    maxWidth: '100%',

})

const SvgCircleBg = styled('circle')({
    fill: 'none',
})

const SvgCircle = styled('circle')({
    fill: 'none'
})

const SvgCircleText = styled('text')({
    fontSize: '24px',
    marginTop: '5px',
    textAnchor: 'middle',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
})


const CircleProgress = (props) => {

    const [offset, setOffset] = useState(0)
    const circleRef = useRef(null)

    const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke, } = props;
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2 
    const circumference = 2 * Math.PI * radius

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference
        setOffset(progressOffset)

        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';

    }, [setOffset, circumference, progress, offset])

    return (
        <>
            <Svg width={size} height={size}>
                <SvgCircleBg 
                    stroke={circleOneStroke} 
                    cx={center} 
                    cy={center} 
                    r={radius} 
                    strokeWidth={strokeWidth}/>
                <SvgCircle 
                    stroke={circleTwoStroke}
                    ref={circleRef} 
                    cx={center} 
                    cy={center} 
                    r={radius} 
                    strokeWidth={strokeWidth} 
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    />
                <SvgCircleText x={`${center}`} y={`${center}`}>
                    {progress}
                </SvgCircleText>
            </Svg>
        </>
    );
}

CircleProgress.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired,
}

export default CircleProgress;