import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  	const { i18n } = useTranslation();

  	const changeLanguage = (language) => {
    	i18n.changeLanguage(language);
  	}

  	return (
		<>
			<img 
				src="/imgs/en_flag.png"
				onClick={() => changeLanguage("en")} 
				className={`flag${i18n.language === 'en' ? ' selected' : ''}`}
			/>
			<img
				src="/imgs/no_flag.png"
				onClick={() => changeLanguage("no")} 
				className={`flag${i18n.language === 'no' ? ' selected' : ''}`}
			/>
		</>
  	);
}

export default LanguageSwitcher;
