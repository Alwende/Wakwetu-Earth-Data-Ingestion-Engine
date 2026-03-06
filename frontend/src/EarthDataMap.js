import React, { useEffect, useRef } from 'react';
import Terria from 'terriajs/lib/Models/Terria';
import ViewState from 'terriajs/lib/ReactViews/ViewState';
import TerriaViewer from 'terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface';

const EarthDataMap = () => {
    const terriaRef = useRef(null);

    useEffect(() => {
        const terria = new Terria({
            baseUrl: "./terria"
        });

        const viewState = new ViewState({
            terria: terria
        });

        // Trench Signal: Loading the Wakwetu EarthData Catalog
        terria.start({
            configUrl: "./config.json"
        }).then(() => {
            console.log("Wakwetu EarthData Engine: Visualization Layer Active");
        });
    }, []);

    return (
        <div className="wakwetu-viewer" style={{ height: '100vh', width: '100%' }}>
            {/* The Terria UI will mount here */}
            <div id="terria-ui"></div>
        </div>
    );
};

export default EarthDataMap;
