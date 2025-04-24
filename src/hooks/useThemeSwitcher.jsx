// useThemeSwitcher.js
import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(() => {
		// Always default to 'dark'
		return 'dark';
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}, [theme]);

	return [theme, setTheme];
};

export default useThemeSwitcher;
