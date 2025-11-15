"use client";

import React, { useState, useRef } from "react";
import styles from "./EditableField.module.css";

interface EditableFieldProps {
    value?: string;
    placeholder: string;
    className?: string;
    validate?: (value: string) => boolean;
}

const EditableField: React.FC<EditableFieldProps> = ({
    value = "",
    placeholder,
    className = "",
    validate,
}) => {
    const [content, setContent] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleFocus = () => {
        const el = spanRef.current;
        if (!el) return;

        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);

        setIsValid(true);
    };

    const handleBlur = () => {
        if (validate) {
            const valid = validate(spanRef.current?.textContent || "");
            setIsValid(valid);
        }
    };

    const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
        setContent(e.currentTarget.textContent || "");
    };

    return (
        <span
            ref={spanRef}
            contentEditable
            data-placeholder={placeholder}
            className={`${styles["editable-field"]} ${!isValid ? styles.invalid : ""} ${className}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
            suppressContentEditableWarning
        >
            {content}
        </span>
    );
};

export default EditableField;
