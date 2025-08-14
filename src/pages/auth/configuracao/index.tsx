import React, { useState } from 'react';
import AuthLayout from '../../../components/layouts/AuthLayout';
import {
  ConfigContainer,
  PageHeader,
  ConfigSection,
  ConfigCard,
  ConfigForm,
  FormGroup,
  Label,
  Input,
  Select,
  Switch,
  SaveButton,
  ConfigGrid
} from './styles';

const ConfiguracaoPage: React.FC = () => {
  const [config, setConfig] = useState({
    companyName: 'Kaique Template',
    email: 'admin@example.com',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    notifications: true,
    darkMode: false,
    autoSave: true
  });

  const handleChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Configurações salvas:', config);
    // Aqui você implementaria a lógica para salvar as configurações
  };

  return (
    <AuthLayout>
      <ConfigContainer>
        <PageHeader>
          <h1>Configurações</h1>
          <SaveButton onClick={handleSave}>Salvar Alterações</SaveButton>
        </PageHeader>
        
        <ConfigGrid>
          <ConfigSection>
            <h2>Informações Gerais</h2>
            <ConfigCard>
              <ConfigForm>
                <FormGroup>
                  <Label>Nome da Empresa</Label>
                  <Input
                    type="text"
                    value={config.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email de Contato</Label>
                  <Input
                    type="email"
                    value={config.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Fuso Horário</Label>
                  <Select
                    value={config.timezone}
                    onChange={(e) => handleChange('timezone', e.target.value)}
                  >
                    <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                    <option value="America/New_York">Nova York (GMT-5)</option>
                    <option value="Europe/London">Londres (GMT+0)</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Idioma</Label>
                  <Select
                    value={config.language}
                    onChange={(e) => handleChange('language', e.target.value)}
                  >
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en-US">English (US)</option>
                    <option value="es-ES">Español</option>
                  </Select>
                </FormGroup>
              </ConfigForm>
            </ConfigCard>
          </ConfigSection>
          
          <ConfigSection>
            <h2>Preferências</h2>
            <ConfigCard>
              <ConfigForm>
                <FormGroup>
                  <Label>Notificações</Label>
                  <Switch
                    checked={config.notifications}
                    onChange={(e) => handleChange('notifications', e.target.checked)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Modo Escuro</Label>
                  <Switch
                    checked={config.darkMode}
                    onChange={(e) => handleChange('darkMode', e.target.checked)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Salvamento Automático</Label>
                  <Switch
                    checked={config.autoSave}
                    onChange={(e) => handleChange('autoSave', e.target.checked)}
                  />
                </FormGroup>
              </ConfigForm>
            </ConfigCard>
          </ConfigSection>
        </ConfigGrid>
      </ConfigContainer>
    </AuthLayout>
  );
};

export default ConfiguracaoPage;
