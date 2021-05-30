import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themes } from 'styles/themes';

export const Nav = styled.nav`
    z-index: 2;
    width: 100%;
    display: flex;
    height: 6.5rem;
    position: fixed;
    top: 0%;
    cursor: pointer;
    background-color: #131418;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: ${themes.breakpoints.sm}) {
        height: 4rem;
    }

    .nav-links {
        width: 80%;
        display: flex; 
        align-items: center;
        justify-content: space-around;
        list-style: none;
        text-decoration: none;

        .active::after{
            content: "";
            display: block;
            position: relative;
            top: 5px;
            left: 40%;
            width: 9px;
            height: 9px;
            background: red;
            border-radius: 50%;
        }
        .active-genre::after{
            content: "";
            display: block;
            position: relative;
            top: -12px;
            left: 88%;
            width: 8px;
            height: 8px;
            background: ${themes.colors.heartRed};
            border-radius: 50%;
        } 

        .active-bookmark::after{
            content: "";
            display: block;
            position: relative;
            top: 20px;
            left: -40%;
            width: 9px;
            height: 9px;
            background: red;
            border-radius: 50%;
        }

        @media (max-width: ${themes.breakpoints.md}) {
            width: 100%;
            justify-content: space-around;
        }

        @media (max-width: ${themes.breakpoints.sm}) {
            position: fixed;
            background: #131418;
            height: 100vh;
            width: 100%;
            flex-direction: column;
            clip-path: circle(50px at 90% -20%);
            -webkit-clip-path: circle(50px at 90% -10%);
            transition: all 1s ease-out;
            pointer-events: none;
        }
    }

    .toggle .line1 {
            transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle .line2 {
        transition: all 0.7s ease;
        width: 0;
    }
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .open {
        clip-path: circle(2000px at 90% -10%);
        -webkit-clip-path: circle(2000px at 90% -10%);
        pointer-events: all;
    }
`;

export const Logo = styled.img`
    padding: 1rem;
    height: 7rem;
    width: 18rem;

    @media (max-width: ${themes.breakpoints.md}) {
        display: none;
    }
`;

export const Hamburger = styled.div`
    display: none;
    outline: none;
    div {
        width: 30px;
        height: 3px;
        background: #f2f5f7;
        margin: 5px;
        transition: all 0.3s ease;
    }

    @media (max-width: ${themes.breakpoints.sm}) {
        display: block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${themes.colors.white};
    display: ${(props) => props.flexDisplay ? 'flex' : 'block'};
    align-items: ${(props) => props.flexDisplay ? 'center' : ''};


    &:hover {
        color: silver;
    }
`;

export const Dropdown = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;

    &:hover {
        color: silver;
    }
`;

export const DropdownList = styled.li`
    .dropdown-content {
        position: absolute;
        top: 4.1rem;
        margin-left: -3rem;
        background-color: ${themes.colors.white};
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 0.2rem;
        display: none;

        @media (max-width: ${themes.breakpoints.sm}) {
            position: relative;
            top: 1.2rem;
            margin-left: 3rem;
            display: none;
        }
    }

    &:hover .dropdown-content{
        display: block;
    }

    .dropdown2 {
        position: absolute;
        top: 4.1rem;
        margin-left: -6rem;
        background-color: ${themes.colors.white};
        width: 300px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-radius: 0.2rem;
        display: none;
        
        @media (max-width: ${themes.breakpoints.sm}) {
            position: relative;
            margin-left: 0rem;
            width: 250px;
            top: 1.2rem;
        }
    }

    &:hover .dropdown2 {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const DropdownNav = styled(NavLink)`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: ${(props) => props.drop2 ? '50%' : 'auto'};

    &:hover {
        background: ${themes.colors.dullBlack};
        color: ${themes.colors.white};
        border-radius: 1.5px;
    }
`;