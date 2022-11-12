import { Navigate, Route, Routes } from "react-router-dom";
import { PdfViewer } from "./pdf-viewer/pdf-viewer";
import { ResumeForm } from "./resume-form/resume-form";
import Media from "react-media";
import { Grid } from "antd";
import "./app.less";

const { useBreakpoint } = Grid;

function App() {
  const { lg } = useBreakpoint();

  return (
    <div className="app">
      {lg ? (
        <Routes>
          <Route
            path="app"
            element={
              <>
                <div className="app__panel">
                  <ResumeForm />
                </div>
                <div className="app__panel">
                  <PdfViewer />
                </div>
              </>
            }
          />
          <Route path="*" element={<Navigate to="app" replace />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="app/form" element={<ResumeForm />} />
            <Route path="app/preview" element={<PdfViewer />} />
            <Route path="app" element={<Navigate to="/app/form" replace />} />
            <Route path="*" element={<Navigate to="app" replace />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
