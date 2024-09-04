import Markdown from 'react-markdown';
import { Title } from "@mantine/core";
import { useState, useEffect } from 'react';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';



export function AboutPage() {

    const [content, setContent] = useState('');

    useEffect(() => {
        import("./content.md")
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(text => setContent(text))
                    .catch(error => console.error('Error fetching Markdown:', error));
            })
            .catch(error => console.error('Error importing Markdown:', error));
    }, []);

    return (
        <div>
            <Title> About </Title>
            <Markdown children={content} remarkPlugins={[remarkGfm, remarkGemoji]} />
        </div>
    );
}