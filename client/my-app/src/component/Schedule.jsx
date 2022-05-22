import * as React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px'
})
const Table = styled('div')({
    width: '100%',
    border: '1px solid #EEEEEE'
})
const TableHeader = styled('div')({
    display: 'flex',
    width: '100%',
    background: '#000',
    padding: '18px'
})

const HeaderItem = styled('div')({
    textTransform: 'uppercase',
    flex: '1 1 20%',
    textAlign: 'center',
    color: 'white'
})
const TableContent = styled('div')({

})
const TableRow = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '18px 0',

    '&:nth-of-type(odd)' :{
        background: ' #EEEEEE'
    }
})

const TableData = styled('div')({
    flex: '1 1 20%',
    textAlign: 'center'
})




const Schedule = () => {
    return(
        <Container>
            <Table>
                <TableHeader>
                    <HeaderItem>
                        Day/Time
                    </HeaderItem>
                    <HeaderItem>
                        10:00-12:00
                    </HeaderItem>
                    <HeaderItem>
                        12:00-14:00
                    </HeaderItem>
                    <HeaderItem>
                        14:00-16:00
                    </HeaderItem>
                    <HeaderItem>
                        16:00-18:00
                    </HeaderItem>
                    <HeaderItem>
                        18:00-20:00
                    </HeaderItem>
                    <HeaderItem>
                        20:00-22:00
                    </HeaderItem>

                </TableHeader>
                <TableContent>
                    <TableRow>
                        <TableData>Monday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Tuesday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Wednesday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Thursday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Friday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Saturday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>Sunday</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                        <TableData>---</TableData>
                    </TableRow>

                </TableContent>
            </Table>
        </Container>
    )
}

export  default Schedule