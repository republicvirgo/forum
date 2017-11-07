import React from "react"
import { NavLink } from "react-router-dom"
import { Row, Col } from "reactstrap"

import Link from "../atoms/Link"

// -----------------------------------------------------------------------------

const USER = {
  _id: 0,
  name: "Administrator"
}

// -----------------------------------------------------------------------------

const Home = () => (
  <nav
    style={{
      borderBottom: "1px solid black"
    }}
  >
    <Row>
      <Col xs={8}>
        <Link to="/">LOGO</Link>
        <NavLink to="/welcome">Welcome</NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/answer">Answer</NavLink>
      </Col>

      <Col xs={4}>
        <NavLink to={`/profile/${USER._id}`}>Profile</NavLink>
        <NavLink to="/ask">Ask Question</NavLink>
        <NavLink to="/profiles">[P]</NavLink>
        <NavLink to="/questions">[Q]</NavLink>
      </Col>
    </Row>
  </nav>
)

export default Home
