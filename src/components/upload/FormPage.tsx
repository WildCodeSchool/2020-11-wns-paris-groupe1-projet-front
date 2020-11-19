import React from 'react'
import Container from '@material-ui/core/Container';
import Form from './Form';
import Upload from './Upload';

export default function FormPage() {
    return(
        <Container maxWidth="lg">
            <Form />
            <Upload />
        </Container>
    )
}