import { useState, ChangeEvent } from 'react';

interface InputValue {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	setValue: (value: string) => void;
	bind: {
		value: string;
		onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	};
}

const useInput = (initialValue: string): InputValue => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChange,
		setValue,
		bind: {
			value,
			onChange: handleChange,
		},
	};
};

export default useInput;
