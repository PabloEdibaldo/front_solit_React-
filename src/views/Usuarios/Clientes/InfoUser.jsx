import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Servicios from './rtk/Servicios';
import Facturacion from './rtk/Facturacion'
import { useParams } from 'react-router-dom';
import Resumen from './rtk/Resumen';
const TabsAndAccordions = () => {
    const { id } = useParams();

    const [activeTab, setActiveTab] = useState('default-tab-1');
    const [activeAccordion, setActiveAccordion] = useState('collapseOne');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
    };


    return (
        <>
            <h1 className="page-header">Tabs & Accordions <small>header small text goes here...</small></h1>
            <div class="tab-pane fade active show" >
                <ul className="nav nav-tabs nav-tabs-inverse ">
                    <li className="nav-item">
                        <a href="#default-tab-1" data-toggle="tab" className={`nav-link ${activeTab === 'default-tab-1' ? 'resumen' : ''}`} onClick={() => handleTabClick('resumen')}>
                            <span className="d-sm-none">Tab 1</span>
                            <span className="d-sm-block d-none">Resumen </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#default-tab-2" data-toggle="tab" className={`nav-link ${activeTab === 'default-tab-2' ? '' : ''}`} onClick={() => handleTabClick('default-tab-2')}>
                            <span className="d-sm-none">Tab 2</span>
                            <span className="d-sm-block d-none">Servicio</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#default-tab-3" data-toggle="tab" className={`nav-link ${activeTab === 'default-tab-3' ? '' : ''}`} onClick={() => handleTabClick('default-tab-3')}>
                            <span className="d-sm-none">Tab 3</span>
                            <span className="d-sm-block d-none">Facturacion</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#default-tab-4" data-toggle="tab" className={`nav-link ${activeTab === 'default-tab-4' ? '' : ''}`} onClick={() => handleTabClick('default-tab-3')}>
                            <span className="d-sm-none">Tab 4</span>
                            <span className="d-sm-block d-none">Facturacion</span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'default-tab-1' ? 'active show' : ''}`} id="default-tab-1">
                        <>
                            <Resumen />
                        </>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'default-tab-2' ? 'active show' : ''}`} id="default-tab-2">
                        <>
                            <Servicios idClient={id} />
                        </>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'default-tab-3' ? 'active show' : ''}`} id="default-tab-3">
                        <>
                            <Facturacion idFacturacion={id} />
                        </>
                    </div>
                    <div className={`tab-pane fade ${activeTab === 'default-tab-4' ? 'active show' : ''}`} id="default-tab-4">
                        <></>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TabsAndAccordions;
