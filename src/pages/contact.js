import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Button from "../components/button";


export default function Contact(props) {

    const ContactPage = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const FormGroup = styled.div`
        margin: 1rem;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    `;

    const Label = styled.label`
        margin-bottom: .5rem;
        display: block;
    `;

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 25%;
    `;

    const FormText = styled.textarea`
        width: 100%;
        height: 200px;
    `;

    const Input = styled.input`
        font-size: 2rem;
        width: 100%;
    `;
    return (
        <Layout>
            <ContactPage>
                <Form action="https://formspree.io/mpzyqjyv" method="POST">
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="_replyto" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Message</Label>
                        <FormText name="message"/>
                    </FormGroup>
                    <Button type="submit">Send</Button>
                </Form>
            </ContactPage>
            <Footer />
        </Layout>
    )
}
