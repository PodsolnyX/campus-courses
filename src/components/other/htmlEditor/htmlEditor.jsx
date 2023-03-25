import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./htmlEditor.css";

const HtmlEditor = () => {
    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value}
                       // style={{maxHeight: "200px", overflowY: "auto"}}
                       onChange={setValue} />;
}

export default HtmlEditor;