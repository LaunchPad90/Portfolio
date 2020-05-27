import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Button from "../components/button";
import media from "../styles/media"


export default function Contact(props) {

    const ContactPage = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #383838;
    `;

    const Message = styled.div`
        font-size: 3rem;
        color: #383838;
        height: 25%;
        width: 40%;
        text-align: center;

        ${media.m`
            font-size: 1.8rem;
        `}
    `;

    const FormGroup = styled.div`
        margin: 1rem;
        width: 100%;
        text-align: left;
        font-size: 2rem;
    `;

    const Label = styled.label`
        margin-bottom: .5rem;
        display: block;
    `;

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 50%;
        width: 40%;

        ${media.l`
            height: 80%;
            width: 60%;
        `}
    `;

    const FormText = styled.textarea`
        width: 100%;
        height: 200px;
        font-size: 1.6rem;
        box-shadow: inset 1px 1px rgba(0, 0, 0, 0.7);
    `;

    const Input = styled.input`
        font-size: 2rem;
        width: 100%;
        box-shadow: inset 1px 1px rgba(0, 0, 0, 0.7);
    `;

    return (
        <Layout>
            <ContactPage>
                <Message>Wanna get in touch? Drop me a line through the form below.</Message>
                <Form action="https://formspree.io/mpzyqjyv" method="POST">
                    <FormGroup>
                        <Label>What's your name?</Label>
                        <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>What's your email?</Label>
                        <Input type="email" name="_replyto" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Let me know how I can help!</Label>
                        <FormText name="message"/>
                    </FormGroup>
                    <Button type="submit">And awwwaaay we go!</Button>
                </Form>
            </ContactPage>
            <Footer />
        </Layout>
    )
}
