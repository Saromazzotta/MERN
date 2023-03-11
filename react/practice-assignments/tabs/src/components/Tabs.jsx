import React, { useState } from 'react'
import './styles.css'

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <div className="container">

            <div className="tab-head">
                <div className="tab">Tab 1</div>
                <div className="tab">Tab 2</div>
                <div className="tab">Tab 3</div>
            </div>


            <div className="content">
                <div className="content">
                    <p>tab 1 content</p>
                </div>
                <div className="content">
                    <p>tab 2 content</p>
                </div>
                <div className="content">
                    tab 3 content
                </div>

            </div>


        </div>
    )
}

export default Tabs