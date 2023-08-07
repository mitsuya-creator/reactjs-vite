import { useState } from "react";

export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const options = {
        value: value,
        onChange: e => setValue(e.target.value)
    }

    return options;
}