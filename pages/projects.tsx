import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components';
import axios from 'axios';

const Main = styled.main`
  padding: 40px;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const FilterButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

interface Project {
  id: number;
  name: string;
  description: string;
  category_id: number;
}

interface Category {
  id: number;
  name: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('https://api.test.cyberia.studio/api/v1/projects');
        setProjects(res.data);
        setFilteredProjects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://api.test.cyberia.studio/api/v1/project-categories');
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProjects();
    fetchCategories();
  }, []);

  const handleFilter = (categoryId: number) => {
    const filtered = projects.filter((project: Project) => project.category_id === categoryId);
    setFilteredProjects(filtered);
  };

  return (
    <div>
      <Header />
      <Breadcrumb items={[{ text: 'Главная', href: '/' }, { text: 'Проекты', href: '/projects' }]} />
      <Main>
        <h1>Наши проекты</h1>
        <div>
          {categories.map(category => (
            <FilterButton key={category.id} onClick={() => handleFilter(category.id)}>
              {category.name}
            </FilterButton>
          ))}
        </div>
        <ProjectList>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </ProjectCard>
          ))}
        </ProjectList>
      </Main>
      <Footer />
    </div>
  );
};

export default Projects;




