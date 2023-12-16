const { Sequelize, DataTypes } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('Biblioteca', 'seu_usuario', 'sua_senha', {
    host: 'localhost',
    dialect: 'mysql',
    });

// Definição do modelo Autor
const Autor = sequelize.define('Autor', {
    AutorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    },
    });

// Definição do modelo Editora
const Editora = sequelize.define('Editora', {
    EditoraID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    Localizacao: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    });

// Definição do modelo Livro
const Livro = sequelize.define('Livro', {
    LivroID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    AnoPublicacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    ISBN: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    },
    });

// Definição do modelo Genero
const Genero = sequelize.define('Genero', {
    GeneroID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
    },
    });
// Definição do modelo LivroGenero (relação n-m entre Livro e Genero)
const LivroGenero = sequelize.define('LivroGenero', {});

// Definição do modelo Usuario
const Usuario = sequelize.define('Usuario', {
    UsuarioID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    },
    });

// Definição do modelo Emprestimo
const Emprestimo = sequelize.define('Emprestimo', {
    EmprestimoID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    DataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    DataDevolucao: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    });

// Definição do modelo Reserva
const Reserva = sequelize.define('Reserva', {
    ReservaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    DataReserva: {
    type: DataTypes.DATE,
    allowNull: false,
    },
    });

// Definição do modelo LivroAutor (relação n-m entre Livro e Autor)
const LivroAutor = sequelize.define('LivroAutor', {});

// Definição do modelo LivroUsuario (relação n-m entre Livro e Usuario)
const LivroUsuario = sequelize.define('LivroUsuario', {});

// Sincronizar os modelos com o banco de dados
sequelize.sync({ force: true }) // 'force: true' irá recriar as tabelas (cuidado ao usar em

produção.then(() => {
    
console.log('Tabelas sincronizadas com sucesso.');
})
.catch((error) => {
console.error('Erro ao sincronizar tabelas:', error);
});
