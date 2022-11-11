import { PdfViewer } from "./pdf-viewer/pdf-viewer";
import { ResumeForm } from "./resume-form/resume-form";
import {
  Navigate,
  Route,
  Routes,
  Link,
  useLocation,
  matchPath,
} from "react-router-dom";
import {
  Box,
  CssBaseline,
  Fab,
  SxProps,
  useMediaQuery,
  useTheme,
  Zoom,
} from "@mui/material";
import styled from "@emotion/styled";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledPanel = styled.div`
  flex: 1 1;
  flex-basis: 50%;
`;

const fabStyles: SxProps = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabs = [
  {
    label: "Preview and download",
    icon: <ArticleIcon />,
    redirectTo: "app/preview",
    color: "primary",
  },
  {
    label: "Close",
    icon: <CloseIcon />,
    redirectTo: "app/form",
    color: "primary",
  },
];

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <>
      <CssBaseline />
      {matches ? (
        <>
          <Box sx={{ height: "100vh" }}>
            <Routes>
              <Route path="app/form" element={<ResumeForm />} />
              <Route path="app/preview" element={<PdfViewer />} />
              <Route path="app" element={<Navigate to="/app/form" replace />} />
              <Route path="*" element={<Navigate to="app" replace />} />
            </Routes>
          </Box>
          {fabs.map(({ redirectTo, color, label, icon }) => {
            const isCurrentFab = !matchPath(redirectTo, location.pathname);

            return (
              <Link to={redirectTo}>
                <Zoom
                  in={isCurrentFab}
                  key={redirectTo}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: `${
                      isCurrentFab ? transitionDuration.exit : 0
                    }ms`,
                  }}
                  unmountOnExit
                >
                  <Fab
                    color={color as any}
                    size="large"
                    sx={fabStyles}
                    aria-label={label}
                  >
                    {icon}
                  </Fab>
                </Zoom>
              </Link>
            );
          })}
        </>
      ) : (
        <Routes>
          <Route
            path="app"
            element={
              <StyledWrapper>
                <StyledPanel>
                  <ResumeForm />
                </StyledPanel>
                <StyledPanel>
                  <PdfViewer />
                </StyledPanel>
              </StyledWrapper>
            }
          />
          <Route path="*" element={<Navigate to="app" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
