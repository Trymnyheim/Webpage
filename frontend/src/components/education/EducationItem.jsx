
function EducationItem({educationItem}) {

    return (
        <div className="education-item" style={{marginBottom: '96px', marginLeft: '96px'}}>
            <img src={educationItem.institution.logo} style={{backgroundColor: 'lightgray', padding: '24px', height: '100px'}} />
            <p>{educationItem.degree}</p>
            <p>{educationItem.level}</p>
        </div>
    )
}

export default EducationItem;