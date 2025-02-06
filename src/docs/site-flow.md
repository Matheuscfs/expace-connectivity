
# Guia de Fluxo do Site

## 1. Fluxo Principal

### Página Inicial (/)
- Exibe destaques de empresas
- Mostra serviços populares
- Permite acesso ao sistema de busca
- Links para registro/login

### Autenticação
- Login (/login)
  - Email/senha
  - Redirecionamento para dashboard após login
- Registro (/register)
  - Formulário de cadastro
  - Verificação de email (opcional)

### Busca de Serviços (/search-companies)
- Filtros por categoria
- Filtros por preço
- Filtros por localização
- Resultados paginados

### Perfil da Empresa (/company/:id)
- Informações da empresa
- Lista de serviços
- Avaliações
- Contato

### Área do Usuário (/dashboard)
- Visão geral
- Serviços contratados
- Mensagens
- Configurações

### Área Administrativa (/admin/dashboard)
- Gestão de usuários
- Relatórios
- Configurações do sistema

## 2. Fluxos Secundários

### Blog (/blog)
- Lista de posts
- Post individual (/blog/:id)
- Categorias

### Recursos (/resources)
- Materiais educativos
- Guias
- Downloads

### Planos (/plans)
- Comparação de planos
- Processo de assinatura

## 3. Integrações

### Supabase
- Autenticação de usuários
- Armazenamento de dados
- Políticas de segurança (RLS)

### Storage
- Upload de imagens
- Gestão de arquivos

## 4. Componentes Principais

### Layout
- Header com navegação
- Footer com links importantes
- Sidebar em áreas específicas

### Formulários
- Cadastro de usuário
- Edição de perfil
- Busca avançada

### Elementos UI
- Cards de serviços
- Listagens
- Modais de confirmação

## 5. Políticas de Segurança

### RLS (Row Level Security)
- Usuários podem ver apenas seus próprios dados
- Admins têm acesso completo ao sistema
- Empresas podem gerenciar apenas seus serviços

### Permissões
- Usuários não autenticados: acesso limitado
- Usuários autenticados: acesso aos recursos básicos
- Admins: acesso completo

## 6. Manutenção

### Backups
- Dados do Supabase são backupeados automaticamente
- Arquivos de storage devem ser backupeados separadamente

### Monitoramento
- Logs do sistema
- Métricas de uso
- Erros e exceções

## 7. Deploy
- Build do frontend
- Atualização de migrations do Supabase
- Verificação de variáveis de ambiente

