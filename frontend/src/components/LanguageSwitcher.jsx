import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  	const { i18n } = useTranslation();

  	const changeLanguage = (language) => {
    	i18n.changeLanguage(language); // Switches language
  	};

  	const flagStyle = {
		height: "28px",
		width: "40px",
		marginRight: "8px",
		borderRadius: "8px",
		cursor: "pointer"
  	}

  	return (
		<div>
			<img src="/imgs/en_flag.png" onClick={() => changeLanguage("en")} style={flagStyle} />
			<img src="/imgs/no_flag.png" onClick={() => changeLanguage("no")}style={flagStyle} />
		</div>
  	);
}

export default LanguageSwitcher;
