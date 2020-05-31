import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Resositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Resositories>
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      {/* REAPEATED */}
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
          alt="Fulano"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      {/*  */}
    </Resositories>
  </>
);
export default Dashboard;
