import './App.css'
import Table from './components/Table'
import { Col, Container, Row } from 'react-bootstrap'
import Detail from './components/Detail'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className='App'>
      <header className='App-header'>
        <Container>
          <Row>
            <Col>
              <Table selected={selected} setSelected={setSelected} />
            </Col>
            <Col className='my-auto'>
              <Detail selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
