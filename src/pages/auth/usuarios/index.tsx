import React, { useState } from 'react';
import AuthLayout from '../../../components/layouts/AuthLayout';
import {
  UsuariosContainer,
  PageHeader,
  SearchBar,
  UserTable,
  TableHeader,
  TableRow,
  TableCell,
  ActionButton,
  AddUserButton
} from './styles';

const UsuariosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Admin', status: 'Ativo' },
    { id: 2, name: 'Maria Santos', email: 'maria@example.com', role: 'Usuário', status: 'Ativo' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@example.com', role: 'Editor', status: 'Inativo' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@example.com', role: 'Usuário', status: 'Ativo' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AuthLayout>
      <UsuariosContainer>
        <PageHeader>
          <h1>Gerenciar Usuários</h1>
          <AddUserButton>+ Novo Usuário</AddUserButton>
        </PageHeader>
        
        <SearchBar>
          <input
            type="text"
            placeholder="Buscar usuários..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <UserTable>
          <TableHeader>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Função</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ações</TableCell>
          </TableHeader>
          
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <span style={{ 
                  color: user.status === 'Ativo' ? '#27ae60' : '#e74c3c',
                  fontWeight: '500'
                }}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>
                <ActionButton variant="edit">Editar</ActionButton>
                <ActionButton variant="delete">Excluir</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </UserTable>
      </UsuariosContainer>
    </AuthLayout>
  );
};

export default UsuariosPage;
