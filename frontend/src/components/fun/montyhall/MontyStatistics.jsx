import MontyHall from './MontyHall.js';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function MontyStatistics({ t }) {
    const [statistics, setStatistics] = useState(null);
    const [size, setSize] = useState(100000);
    const [validSize, setValidSize] = useState(true);

    const generateStatistics = () => {
        if (!/^\d+$/.test(size)) {
            setValidSize(false);
            return;
        }
        setValidSize(true);
        const newMonty = new MontyHall();
        newMonty.generateStatistics(parseInt(size));
        setStatistics(newMonty.statistics);
    }


    return (
        <div className="monty-item-fixed">
            <div className="margin-vertical">
                <h2 className="center">{t('title')}</h2>
                <p>{t('ingress')}</p>
                <Form className="margin-vertical"
                    onSubmit={(event) => {
                        event.preventDefault();
                        generateStatistics();
                    }}
                >
                    <Form.Group>
                        <Form.Label>{t('input-label')}</Form.Label>
                        <Form.Control
                            variant="danger" 
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            isInvalid={!validSize}
                        />
                        {!validSize &&
                            <p className="error">Please enter a positive number</p>}
                    </Form.Group>
                    <Button type="submit" className="btn-success margin-sm-vertical">
                        {t('generate')}
                    </Button>
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th colSpan="2">{t('with')}</th>
                        <th colSpan="2">{t('without')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{t('success')}</th>
                        <td className="text-success">
                            {statistics ? statistics.switch.success.number.toLocaleString('fr-FR') : ""}
                        </td>
                        <td className="text-success">
                            {statistics ? statistics.switch.success.percent.toFixed(1) + "%" : ""}
                        </td>
                        <td className="text-success">
                            {statistics ? statistics.without.success.number.toLocaleString('fr-FR') : ""}
                        </td>
                        <td className="text-success">
                            {statistics ? statistics.without.success.percent.toFixed(1) + "%" : ""}
                        </td>
                    </tr>
                    <tr>
                        <th>{t('fail')}</th>
                        <td className="text-danger">
                            {statistics ? statistics.switch.fail.number.toLocaleString('fr-FR') : ""}
                        </td>
                        <td className="text-danger">
                            {statistics ? statistics.switch.fail.percent.toFixed(1) + "%"  : ""}
                        </td>
                        <td className="text-danger">
                            {statistics ? statistics.without.fail.number.toLocaleString('fr-FR') : ""}
                        </td>
                        <td className="text-danger">
                            {statistics ? statistics.without.fail.percent.toFixed(1) + "%"  : ""}
                        </td>
                    </tr>
                    <tr>
                        <th>{t('total')}</th>
                        <td colSpan="2">{statistics ? statistics.switch.total : ""}</td>
                        <td colSpan="2">{statistics ? statistics.without.total : ""}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default MontyStatistics;