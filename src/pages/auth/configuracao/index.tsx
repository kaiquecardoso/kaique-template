import React, { useState } from 'react';
import AuthLayout from '../../../components/layouts/AuthLayout';
import { ThemeCard } from '../../../components/ui/ThemeCard';
import { useTheme } from '../../../contexts/ThemeContext';
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
  ConfigGrid,
  ThemeDemoSection
} from './styles';

const ConfiguracaoPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [config, setConfig] = useState({
    companyName: 'Kaique Template',
    email: 'admin@example.com',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    notifications: true,
    darkMode: theme === 'dark',
    autoSave: true
  });

  const handleChange = (field: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Sincroniza o tema com a configuração
    if (field === 'darkMode') {
      setTheme(value ? 'dark' : 'light');
    }
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

        <ThemeDemoSection>
          <h2>Demonstração do Sistema de Temas</h2>
          <p>Veja como os componentes se adaptam automaticamente ao tema selecionado:</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <ThemeCard 
              title="Card Primário" 
              description="Este é um exemplo de card com variante primária"
              variant="primary"
            >
              <p>O conteúdo se adapta automaticamente ao tema atual.</p>
            </ThemeCard>
            
            <ThemeCard 
              title="Card Secundário" 
              description="Este é um exemplo de card com variante secundária"
              variant="secondary"
            >
              <p>As cores mudam suavemente entre os temas.</p>
            </ThemeCard>
            
            <ThemeCard 
              title="Card de Destaque" 
              description="Este é um exemplo de card com variante de destaque"
              variant="accent"
            >
              <p>Perfeito para informações importantes.</p>
            </ThemeCard>
          </div>
          
          <div style={{ marginTop: '30px', padding: '20px', borderRadius: '8px', backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border-primary)' }}>
            <h3>Informações do Tema</h3>
            <p><strong>Tema atual:</strong> {theme === 'dark' ? '🌙 Escuro' : '☀️ Claro'}</p>
            <p><strong>Toggle de tema:</strong> Localizado na sidebar, na parte inferior</p>
            <p><strong>Persistência:</strong> O tema é salvo automaticamente no localStorage</p>
            <p><strong>Preferência do sistema:</strong> Detecta automaticamente a preferência do usuário</p>
          </div>
        </ThemeDemoSection>
      </ConfigContainer>
    </AuthLayout>
  );
};

export default ConfiguracaoPage;
