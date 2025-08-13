import React, { useState } from "react";
import ProjectForm from "./ReactForm";
import ReactDOM from "react-dom/client";

export default function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const handleSave = (projectData) => {
    if (editingProject) {
      // Edit mode: update the existing project
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === editingProject.id
            ? { ...projectData, id: editingProject.id }
            : proj
        )
      );
    } else {
      // Add mode: create new project
      setProjects((prev) => [
        ...prev,
        { ...projectData, id: Date.now() } // id for demo purposes
      ]);
    }
    setEditingProject(null); // Exit edit mode
  };

  const handleCancel = () => {
    setEditingProject(null);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Project Manager</h2>

      {/* Form for add/edit */}
      <ProjectForm
        onSave={handleSave}
        onCancel={handleCancel}
        initialData={editingProject}
      />

      {/* List of projects */}
      <ul>
        {projects.map((proj) => (
          <li key={proj.id}>
            <strong>{proj.project}</strong> — {proj.description} — ${proj.budget} — {proj.active ? "Active" : "Inactive"}
            <button onClick={() => handleEdit(proj)}>Edit</button>
            <button onClick={() => handleDelete(proj.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProjectManager/>);