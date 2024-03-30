import logo from './logo.svg';
import './App.css';
import BreadCrumb from './components/BreadCrumb';
import NameCard from './components/NameCard';
import SocialCard from './components/SocialCard';
import DetailForm from './components/DetailForm';
import ProjectCard from './components/ProjectCard';
import InputForm from './components/InputForm';
import { useContext } from 'react';
import DataContext from './data/dataContext'
function App() {
  const { isEdit, data, loading, error } = useContext(DataContext)
  return (
    <div className="container-fluid px-md-5 pd-sm-3" style={{ backgroundColor: "#e2e8f0" }}>
      <div class="p-0 m-0 row">
        <div className="col-sm-12 m-0">
          <div className="p-0 m-0 row"><BreadCrumb /></div>
        </div>
        {data && !loading && !error ? (
          <>
            <div class="col-sm-4 p-0">
              <div className="p-0 m-0 row">
                <div className="col-12 p-0">
                  <NameCard />
                </div>
              </div>
              <div className="p-0 m-0 row ">
                <div className="col-12 p-0">
                  <SocialCard />
                </div>
              </div>
            </div>
            <div class="col-sm-8 p-0">
              <div className="p-0 m-0 row">
                <div className="col-12 p-0">
                  {isEdit ? <InputForm /> : <DetailForm />}
                </div>
              </div>
              <div className="p-0 m-0 row">
                <div className="col-md-6 p-0 ">
                  <ProjectCard />
                </div>
                <div className="col-md-6 p-0 ">
                  <ProjectCard />
                </div>
              </div>
            </div>
          </>
        ) : loading  && !error ?(
          <div className="d-flex justify-content-center align-items-center"><h1>Data is Loading</h1></div>
        ) :
          (
            <div className="d-flex justify-content-center align-items-center"><h1>Error Occured {error.message}</h1></div>
          )}
      </div>
    </div>
  );
}

export default App;
