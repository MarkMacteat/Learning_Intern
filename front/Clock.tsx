import { FC } from 'react'
import styled from '@emotion/styled'

const Clockbox = styled('div')`
    display: flex;
    
`
const PDays = styled('div')`   
    
    font-size: 200px;
    color: #db4844;
`

const PHours = styled('div')`   
    
    font-size: 150px;
    color: #f07c22;
`

const PMinutes = styled('div')`  
    
    font-size: 100px;
    color: #f6da74;
`

const PSeconds = styled('div')` 
      
    font-size: 50px;
    color: #abcd58;
`

const Span = styled('span')`   
    
    
    
    font-size: 20px;
    color: white;

    
`
const Section = styled('section')`
    text-align: center;
    padding: 10px;
    
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`


const Clock: FC = ({Days,Hours,Minutes,Seconds}) => {
    return (
            <Clockbox>
            <Section>
                <PDays>{Days}</PDays>
                <Span>Days</Span>
            </Section>
            <Section>
                <PHours>{Hours}</PHours>
                <Span>Hours</Span>
            </Section>
            <Section>
                <PMinutes>{Minutes}</PMinutes>
                <Span>Minutes</Span>
            </Section>
            <Section>
                <PSeconds>{Seconds}</PSeconds>
                <Span>Seconds</Span>
            </Section>
            </Clockbox>
                
    )
}

Clock.defaultProps={
    Days:10,
    Hours:10,
    Minutes:10,
    Seconds:10
}

export default Clock
