import React from 'react';
import { Row, Col, Tabs } from 'antd';
import residential1 from '../../assets/residential1.jpg'
import residential2 from '../../assets/residential2.jpg'
import residential3 from '../../assets/residential3.jpg'
import commercial1 from '../../assets/commercial1.jpg'
import commercial2 from '../../assets/commercial2.jpg'

import './deals.css';

function Deals() {
  const { TabPane } = Tabs;
  return (
    <div id='deals' className='section'>
      <div className='wrapper'>
        <div className='deals__top-section'>
          <div>
            <h2 className='section__title'>Best Real Estate Deals</h2>
            <p className='section__description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy.</p>
          </div>
          <div>
            <button className='deals-btn'>View All Property</button>
          </div>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Residential Property" key="1">
            <Row className='deals__tab-section' justify="start" gutter={[16, 16]}>
              <Col xs={24} md={8} className="gutter-row" span={6}>
                <img src={residential1} alt="" />
              </Col>
              <Col xs={24} md={8} className="gutter-row" span={6}>
                <img src={residential2} alt="" />
              </Col>
              <Col xs={24} md={8} className="gutter-row" span={6}>
                <img src={residential3} alt="" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Commercial Property" key="2">
            <Row className='deals__tab-section' justify="start" gutter={[16, 16]}>
              <Col xs={24} md={8} className="gutter-row" span={6}>
                <img src={commercial1} alt="" />
              </Col>
              <Col xs={24} md={8} className="gutter-row" span={6}>
                <img src={commercial2} alt="" />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Agriculture Property" key="3">
            <div className='deals__tab-section'>
              <img src={residential1} alt="" />
              <img src={residential2} alt="" />
              <img src={residential3} alt="" />
            </div>
          </TabPane>
          <TabPane tab="Industrial Property" key="4">
            <div className='deals__tab-section'>
              <img src={residential1} alt="" />
              <img src={residential2} alt="" />
              <img src={residential3} alt="" />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Deals


