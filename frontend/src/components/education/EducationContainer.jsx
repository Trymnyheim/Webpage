import EducationItem from './EducationItem.jsx';

function EducationContainer({education, t, secondary}) {

    return (
        <div className="education-container">
            {education.map((educationItem, index) => (
                <EducationItem key={index} educationItem={educationItem} t={t} secondary={secondary} />
            ))}
        </div>
    )
}

export default EducationContainer;