import { 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import ListPersonComponent from '@/components/pages/ListPersonComponent';
import SidebarComponent from '@/components/layout/SidebarComponent';
import DashboardComponent from '@/components/pages/DashboardComponent';

const AppRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SidebarComponent />
        <div className="col">
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/listperson" element={<ListPersonComponent />} />
              <Route path="/dashboard" element={<DashboardComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRouter;
