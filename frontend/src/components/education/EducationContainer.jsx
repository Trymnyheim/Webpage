import EducationItem from './EducationItem.jsx';

import { useTranslation } from "react-i18next";

function EducationContainer() {

    const { t } = useTranslation('education');
    const education = t('education', { returnObjects: true });

    return (
        <div>
            {education.map((educationItem, index) => (
                <EducationItem key={index} educationItem={educationItem} />
            ))}

        </div>
    )
}

export default EducationContainer;