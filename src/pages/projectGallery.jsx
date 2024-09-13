import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { mernProjects } from '../constants';

const ProjectGallery = () => {
  const location = useLocation();
  const { id } = useParams();
  // const { screens } = location.state || { screens: [] };
  const project = mernProjects.find((proj) => proj.id === String(id));
  
  const screens = project?.screen || [];
  console.log("screens", screens)
  return (
    <>

<div className="container mx-auto p-6 min-h-screen mt-20 object-fill">
      <h1 className="text-3xl font-bold mb-6">Project Screens</h1>
      {screens.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screens.map((screen) => (
            <div key={screen.id} className="bg-gray-200 p-4 rounded-lg">
              <img src={screen.img} alt={screen.des} className="w-full h-auto rounded-lg" />
             
            </div>
          ))}
        </div>
      ) : (
        <p>No screenshots available for this project.</p>
      )}
    </div>

   
    </>
  );
};

export default ProjectGallery;
