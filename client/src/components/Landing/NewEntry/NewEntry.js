import React from "react";
import Entries from "../EntriesPage";
import { Row, Col, Card, CardTitle, Tabs, Tab } from 'react-materialize';
import './NewEntry.css';

const NewEntry = props => (
    <div className="new-entry">
            <Entries />
    </div>
);

export default NewEntry;