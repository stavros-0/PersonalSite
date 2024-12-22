import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import Books from "./components/Books.tsx";
import Projects from "./components/Projects.tsx";
import Courses from "./components/Courses.tsx";
import Education from "./components/Education.tsx";
import Experiences from "./components/Experiences.tsx";
import About from "./components/About.tsx";
import styled from "styled-components";



// Container component to handle layout styling
const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;


// Main content styling to adjust width and padding
const Main = styled.main`
    padding: 2%;
    width: 100%;
    margin-top: 2%;
   
    @media (max-width: 750px) {
        width: 100%;
    }
`;

// Root component to manage routes and dynamic header props based on current page
function Root() {
    
    return (
        <>
            {/* Layout structure with Nav and Main content */}
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path={`/`} element={<Home />}/>
                        <Route path={`/Books`} element={<Books />} />
                        <Route path={`/Projects`} element={<Projects />} />
                        <Route path={`/Courses`} element={<Courses />} />
                        <Route path={`/Education`} element={<Education />} />
                        <Route path={`/Experiences`} element={<Experiences />} />
                        <Route path="/About" element={<About  />} />
                    </Routes>
                </Main>
            </Container>

            
        </>
    );
}

// Define the router with the Root component as the main route handler
const router = createBrowserRouter(
    [
        { path: "*", Component: Root }, // Catch-all route to load Root
    ]
);

// Main App component that provides the router to the application
export default function App() {
    
    return (
        <>
        
        <RouterProvider router={router} />
        
        </>
    )
}
