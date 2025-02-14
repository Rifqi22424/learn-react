import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("Rifqi");
    
    return (
        <>
            <h1> {name.toUpperCase()} </h1>
        </>
    );
}

export default ContactForm;