import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const getInitialTheme = () =>
		localStorage.getItem('theme') || 'light';

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const root = window.document.documentElement;

		// Remove all possible theme classes
		root.classList.remove('light', 'dark');
		root.classList.add(theme);

		// Save to localStorage
		localStorage.setItem('theme', theme);
	}, [theme]);

	return [theme, setTheme];
};

export default useThemeSwitcher;
