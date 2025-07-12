import './education.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function EducationItem({educationItem, t}) {

    return (
        <div className="education-item center" >
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>
                            {educationItem.degree}
                            <br/>
                            <Button href={educationItem.link} variant="secondary" className="margin-sm">
                                {t('general.about')}
                            </Button>
                        </td>
                        <td>
                            {educationItem.level}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{backgroundColor: 'gray'}}>
                            <div className="institution-container">
                                <Button href={educationItem.institution.path} variant="light">{educationItem.institution.name}</Button>
                                <img
                                    src={educationItem.institution.logo}
                                    alt={educationItem.institution.name}
                                    href={educationItem.institution.path}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <span>{educationItem.start}</span>
                            <span className="margin">–</span>
                            <span>{educationItem.end || 'Present'}</span>
                        </td>

                    </tr>
                    {educationItem.exchange?.institution &&
                        <tr>
                            <td colSpan={2}>
                                {`${t('general.exchangeTo')} ${educationItem.exchange.institution} (${educationItem.exchange.semesters} semester)`}
                            </td>
                        </tr>
                    }
                </tbody>
            </Table>
            <p></p>
        </div>
    )
}

export default EducationItem;