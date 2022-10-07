import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Stand_image from '../../assets/images/Stand_image.jpg';
import { getAuth } from 'firebase/auth';
import userEvent  from '@testing-library/user-event';
import { GoogleButton } from '../SignIn/SignIn';
//...Other Imports above
import { AuthCheck } from 'reactfire'; // New Import
import { Suspense } from 'react';


interface Props {
    title: string;
}

// Create Styled Compinenets with styled-components -basically HTML elements
const Root = styled("div")({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled("div")({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled("h1")({
    margin: '0 0 0 0.45em'
})

const LogoA = styled(Link)({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Stand_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

{/* changed href= to to= */ }

export const Home = (props: Props) => {
    const auth = getAuth(); 
    if (auth.currentUser) {

    
    
    return (      
        
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="#">Brand</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <GoogleButton/>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
        
            
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Stands ...</p>
                    <Button color='warning' variant='contained' component={Link} to='/dashboard'>See The Stands</Button>
                </MainText>
            </Main>

        </Root>
    )} else {
        return (
            <Root>
                <NavbarContainer>
                    <Logo>
                        <LogoA to="#">Brand</LogoA>
                    </Logo>
                    <LogoNavigation>                      
                        <li>
                            <NavA to="/signin">Sign In</NavA>
                        </li>
                    </LogoNavigation>
                </NavbarContainer>


                <Main>
                    <MainText>
                        <h1>{props.title}</h1>
                        <p>Stands are strong...</p>
                        <Button color='warning' variant='contained' component={Link} to='/dashboard'>See The Stands</Button>
                    </MainText>
                </Main>

            </Root>

        )}
    }

    