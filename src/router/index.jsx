import { Routes, Route } from 'react-router-dom';
import ListPersonComponent from '@/components/pages/ListPersonComponent';
import SidebarComponent from '../components/layout/SidebarComponent';

const AppRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <SidebarComponent />

        {/* Content Area */}
        <div className="col py-3">
          <div className="content-area">
            <Routes>
              <Route path="/listperson" element={<ListPersonComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRouter;
