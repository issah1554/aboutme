"use client";

import React, { useState, useRef } from "react";

interface EditableFieldProps {
    value?: string;
    placeholder: string;
    className?: string;
    validate?: (value: string) => boolean; // validation function
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

    // Move caret to the end on focus
    const handleFocus = () => {
        const el = spanRef.current;
        if (!el) return;

        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false); // moves caret to end
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);

        // reset validation when user focuses
        setIsValid(true);
    };

    const handleBlur = () => {
        if (validate) {
            const valid = validate(spanRef.current?.textContent || "");
            setIsValid(valid);
        }
    };

    return (
        <>
            <style>
                {`
          .editable-field {
            display: inline-block;
            border-bottom: 1px dashed rgba(16, 75, 238, 0.5);
            transition: background 0.2s, border-color 0.2s, color 0.2s;
            cursor: text;
            text-align: left;
            min-width: 3ch;
            direction: ltr;
          }

          .editable-field:hover {
            background: rgba(16, 75, 238, 0.1);
            border-bottom-color: rgba(16, 75, 238, 0.8);
          }

          .editable-field:focus {
            outline: none !important;
            background: rgba(16, 75, 238, 0.2);
            caret-color: #104bee;
          }

          .editable-field:empty::before {
            content: attr(data-placeholder);
            color: rgba(0, 0, 0, 0.3);
            pointer-events: none;
          }
            .editable-field.invalid {
            border-bottom-color: red !important;
            background: rgba(255, 0, 0, 0.1); /* light red background */
            }
        `}
            </style>

            <span
                ref={spanRef}
                contentEditable
                data-placeholder={placeholder}
                className={`editable-field ${!isValid ? "invalid" : ""} ${className}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                suppressContentEditableWarning
            >
                {content}
            </span>
        </>
    );
};

export default EditableField;
