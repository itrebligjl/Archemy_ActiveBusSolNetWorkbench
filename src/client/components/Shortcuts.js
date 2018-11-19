import React from 'react';
import MappleToolTip from 'reactjs-mappletooltip';
import '../app.css';

export default () => (
  <aside className="section">
    <h4 className="is-size-4">Shortcuts</h4>
    <div className="btn-group">
      <MappleToolTip mappleType="info" shadow>
        <div>
          <button className="button" type="button">EAMTk™</button>
        </div>
        <div>
          <text>
            { 'EA Mgmt. Toolkit' }
          </text>
        </div>
      </MappleToolTip>
      <MappleToolTip mappleType="info" shadow>
        <div>
          <button className="button" type="button">ArchNav™</button>
        </div>
        <div>
          <text>
            { 'Knowledge & Search Tool' }
          </text>
        </div>
      </MappleToolTip>
      <MappleToolTip mappleType="info" shadow>
        <div>
          <button className="button" type="button">ArchDoc™</button>
        </div>
        <div>
          <text>
            { 'Steps Documentation Tool' }
          </text>
        </div>
      </MappleToolTip>
      <MappleToolTip mappleType="info" shadow>
        <div>
          <button className="button" type="button">ArchViz™</button>
        </div>
        <div>
          <text>
            { 'Visualization Tool' }
          </text>
        </div>
      </MappleToolTip>
      <button className="button" type="button">Utilities</button>
      <button className="button" type="button">Workbench Blog</button>
      <button className="button" type="button">Planet Archemy</button>
      <button className="button" type="button">Workbench Forum</button>
    </div>
  </aside>
);
