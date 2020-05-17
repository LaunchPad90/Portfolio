import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"


export default function Contact(props) {

    const ContactPage = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const FormGroup = styled.div`
        margin: 1rem;
    `;

    const Label = styled.label`
        margin-bottom: .5rem;
        display: block;
    `;

    return (
        <Layout>
            <ContactPage>
                <FormGroup>
                    <Label>Name</Label>
                    <input type="text" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <input type="email" />
                </FormGroup>
            </ContactPage>
            <Footer />
        </Layout>
    )
}
