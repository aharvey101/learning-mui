import React from 'react'
import Navbar from '../Components/Nav'
import Map from '../Components/Map'
import SidebarLeft from '../Components/Sidebar'
import SidebarRight from '../Components/SidebarRight'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BottomBar from '../Components/BottomBar'
function Home() {
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col style={{ paddingRight: 0 }}>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={2} className="d-none d-lg-block">
            <SidebarLeft />
          </Col>
          <Col>
            <Row>
              <Col>
                <Map />
              </Col>
            </Row>
            <Row>
              <Col>
                <BottomBar />
              </Col>
            </Row>
          </Col>
          <Col style={{ paddingRight: 0 }} lg={2}>
            <SidebarRight />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
