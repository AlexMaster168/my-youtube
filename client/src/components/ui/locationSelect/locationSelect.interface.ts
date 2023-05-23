import React from 'react'

export interface LocationSelectProps {
	selectedLocation: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
