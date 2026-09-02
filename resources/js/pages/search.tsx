import { useEffect, useState } from "react";

interface SearchProps {
    onSearch?: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
    const placeholders = ["Search...", "खोज्नुहोस्..."];

    const [value, setValue] = useState("");
    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (value !== "") {
            setText("");
            return;
        }

        const currentText = placeholders[textIndex];

        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setText(currentText.slice(0, charIndex + 1));
                setCharIndex((index) => index + 1);
            }, 120);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setTextIndex((index) => (index + 1) % placeholders.length);
        }, 1500);

        return () => clearTimeout(timer);
    }, [value, textIndex, charIndex]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;

        setValue(newValue);
        onSearch?.(newValue);
    }

    return (
        <input
            type="search"
            value={value}
            onChange={handleChange}
            placeholder={text}
            className="container w-[20vw] rounded-lg border px-4 py-2 outline-none focus:ring-2"
        />
    );
}
