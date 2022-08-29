import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #fff;
  font-size: 25px;
  
  &.active {
    color: rgb(102, 73, 231);
  }
`
  