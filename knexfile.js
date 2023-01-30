//knex database ile backend bağlantılarını yapar
//önce psql comutlarıyla termianlden veritabanını oluştur
//sonra bağlantıalrını yap
//uygulamamızın ayarlarını vs tutabiliriz
//migration dosyalarımızın nerde olduğunu migration: veri tabanı şeması
//seed doayalarımızın nerde olduğunu burda belirticez. seed: initial data sağlıyor
module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "betul",
                user: "testdatabase",
                password: "admin",
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    },
    production: {
        //api ımızı deploy ettiğimiz servis bağlantıları olucak
    }
}