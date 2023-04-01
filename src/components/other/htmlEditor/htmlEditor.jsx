import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./htmlEditor.css";

const HtmlEditor = (props) => {
    return <ReactQuill theme="snow" value={props.value} onChange={props.onChange} />;
}

export default HtmlEditor;