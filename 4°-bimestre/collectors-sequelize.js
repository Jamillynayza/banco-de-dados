const { Sequelize, DataTypes } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize(
    'collectors', // Nome do banco de dados
    'seu_usuario', // Substitua com seu usuário do banco de dados
    'sua_senha', // Substitua com sua senha do banco de dados
    {
        host: 'localhost',
        dialect: 'mysql', // Use 'mysql' ou o dialect correspondente ao seu banco de dados
    }
);

// Modelo Empresa
const Empresa = sequelize.define('Empresa', {
    endereco: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    cnpj: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
});

// Modelo Servidor
const Servidor = sequelize.define('Servidor', {
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
});

// Modelo Notificacao
const Notificacao = sequelize.define('Notificacao', {
    nome: {
        type: DataTypes.STRING,
    },
    data: {
        type: DataTypes.STRING,
    },
});

// Relacionamento 1-N entre Servidor e Notificacao
Servidor.hasMany(Notificacao, { foreignKey: 'fk_cpf' });
Notificacao.belongsTo(Servidor, { foreignKey: 'fk_cpf' });

// Modelo SerEm
const SerEm = sequelize.define('SerEm');

// Relacionamento N-M entre Servidor e SerEm
Servidor.belongsToMany(Servidor, { through: SerEm, foreignKey: 'fk_cpf' });
Servidor.belongsToMany(Servidor, { through: SerEm, foreignKey: 'fk_cpf' });

// Sincronizando os modelos com o banco de dados
sequelize.sync({ force: true }).then(async () => {
    // Aqui você pode realizar operações com o banco de dados se necessário
    // ...

    // Fechando a conexão com o banco de dados
    await sequelize.close();
});
